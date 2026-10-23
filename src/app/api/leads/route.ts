import { getRequestContext } from '@cloudflare/next-on-pages'
import {
  SMS_CONSENT_TEXT,
  gradeOptions,
  productOptions,
  serviceOptions,
  timeframeOptions,
} from '@/lib/lead-options'

export const runtime = 'edge'

// Set here, never by the browser.
const FORM_SLUG = 'usapalletsolution-org-contact'

const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
const US_ZIP = /^\d{5}(-\d{4})?$/
const CA_POSTAL = /^[A-Za-z]\d[A-Za-z][\s-]?\d[A-Za-z]\d$/
const SUBMISSION_ID = /^[A-Za-z0-9._:-]{8,128}$/
const TRY_AGAIN = 'We could not send your request. Please try again in a moment or contact us.'
const CHECK_FIELDS = 'Check the highlighted fields'

// Passed through to 1DB only when present.
const ATTRIBUTION_KEYS = [
  '_1db_utm_source',
  '_1db_utm_medium',
  '_1db_utm_campaign',
  '_1db_utm_term',
  '_1db_utm_content',
  '_1db_referrer',
  '_1db_landing_page',
  '_1db_current_page',
  '_1db_gclid',
  '_1db_gbraid',
  '_1db_wbraid',
  '_1db_fbclid',
  '_1db_msclkid',
  '_1db_ttclid',
  '_1db_ga_client_id',
]

// 1DB names a bad field by its own key; the form knows it by this name.
const FORM_FIELD_FOR: Record<string, string> = {
  first_name: 'firstName',
  last_name: 'lastName',
  email: 'email',
  phone: 'phone',
  company: 'company',
  postal_code: 'postalCode',
  address_line_1: 'streetAddress',
  city: 'city',
  state: 'stateProvince',
  product_type: 'productType',
  product_label: 'productType',
  lead_type: 'selectService',
  service_label: 'selectService',
  quantity: 'quantity',
  condition: 'grade',
  timeframe: 'timeframe',
  message: 'message',
  sms_consent: 'smsConsent',
  sms_consent_text: 'smsConsent',
}

type Payload = Record<string, unknown>

function text(payload: Payload, key: string): string {
  const value = payload[key]
  return typeof value === 'string' ? value.trim() : ''
}

function validate(payload: Payload): Record<string, string> {
  const fields: Record<string, string> = {}
  const firstName = text(payload, 'firstName')
  const lastName = text(payload, 'lastName')
  const email = text(payload, 'email')
  const postalCode = text(payload, 'postalCode')
  const quantity = text(payload, 'quantity')
  const grade = text(payload, 'grade')
  const timeframe = text(payload, 'timeframe')

  if (!firstName || firstName.length > 80) fields.firstName = 'Enter a first name (up to 80 characters)'
  if (!lastName || lastName.length > 80) fields.lastName = 'Enter a last name (up to 80 characters)'
  if (!email || !EMAIL_RE.test(email)) fields.email = 'Please enter a valid email address (e.g., name@company.com)'

  // 10 digits, or 11 starting with 1, with an area code that can't start with 0 or 1.
  const digits = text(payload, 'phone').replace(/\D/g, '')
  const national = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits
  if (!/^[2-9]\d{9}$/.test(national)) fields.phone = 'Please enter a valid phone number (e.g., (555) 123-4567)'

  if (!US_ZIP.test(postalCode) && !CA_POSTAL.test(postalCode)) {
    fields.postalCode = 'Please enter a valid ZIP code (e.g., 12345 or 12345-6789) or Canadian postal code (e.g., A1A 1A1)'
  }
  if (!productOptions.some((option) => option.value === text(payload, 'productType'))) {
    fields.productType = 'Please select a product type'
  }
  if (!serviceOptions.some((option) => option.value === text(payload, 'selectService'))) {
    fields.selectService = 'Please select a service'
  }

  const quantityNumber = Number(quantity)
  if (!/^\d+$/.test(quantity) || quantityNumber < 1 || quantityNumber > 1000000) {
    fields.quantity = 'Please enter a whole number from 1 to 1,000,000'
  }

  if (text(payload, 'company').length > 120) fields.company = 'Company name must be under 120 characters'
  if (text(payload, 'streetAddress').length > 200) fields.streetAddress = 'Street address must be under 200 characters'
  if (text(payload, 'city').length > 80) fields.city = 'City must be under 80 characters'
  if (text(payload, 'stateProvince').length > 40) fields.stateProvince = 'State/Province must be under 40 characters'
  if (grade && !gradeOptions.some((option) => option.value === grade)) fields.grade = 'Please choose one of the grades'
  if (timeframe && !timeframeOptions.some((option) => option.value === timeframe)) {
    fields.timeframe = 'Please choose one of the options'
  }
  if (text(payload, 'message').length > 2000) fields.message = 'Additional details must be under 2,000 characters'
  return fields
}

function isConsented(value: unknown): boolean {
  return value === true || value === 'true' || value === 'yes' || value === 'on'
}

/** The 1DB body, built only from allowlisted keys. */
function buildLead(payload: Payload, submissionId: string): Record<string, unknown> {
  const product = productOptions.find((option) => option.value === text(payload, 'productType'))!
  const service = serviceOptions.find((option) => option.value === text(payload, 'selectService'))!
  const grade = gradeOptions.find((option) => option.value === text(payload, 'grade'))

  const lead: Record<string, unknown> = {
    formSlug: FORM_SLUG,
    submission_id: submissionId,
    first_name: text(payload, 'firstName'),
    last_name: text(payload, 'lastName'),
    email: text(payload, 'email'),
    phone: text(payload, 'phone'),
    postal_code: text(payload, 'postalCode'),
    lead_type: service.leadType,
    service_label: service.label,
    product_type: product.slug,
    product_label: product.label,
    quantity: Number(text(payload, 'quantity')),
  }

  const optional: Record<string, string> = {
    company: text(payload, 'company'),
    address_line_1: text(payload, 'streetAddress'),
    city: text(payload, 'city'),
    state: text(payload, 'stateProvince'),
    condition: grade?.label ?? '',
    timeframe: text(payload, 'timeframe'),
    message: text(payload, 'message'),
    page_url: text(payload, 'sourceUrl').slice(0, 500),
  }
  for (const [key, value] of Object.entries(optional)) {
    if (value) lead[key] = value
  }

  const consented = isConsented(payload.smsConsent)
  lead.sms_consent = consented ? 'yes' : 'no'
  if (consented) lead.sms_consent_text = SMS_CONSENT_TEXT

  for (const key of ATTRIBUTION_KEYS) {
    const value = text(payload, key)
    if (value) lead[key] = value.slice(0, 500)
  }
  return lead
}

/** A Cloudflare binding when deployed; process.env under `next dev` / `next start`. */
function serverEnv(name: string): string {
  try {
    const value = (getRequestContext().env as unknown as Record<string, unknown>)[name]
    if (typeof value === 'string' && value) return value
  } catch {
    // No Cloudflare request context outside next-on-pages.
  }
  return process.env[name] ?? ''
}

function clientIp(request: Request): string {
  const cf = request.headers.get('cf-connecting-ip')?.trim()
  if (cf) return cf
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? ''
}

function backoffMs(response: Response | null): number {
  const retryAfter = Number(response?.headers.get('Retry-After'))
  if (Number.isFinite(retryAfter) && retryAfter > 0) return Math.min(retryAfter * 1000, 3000)
  return 600
}

/** POST to 1DB; on a 5xx, a 429 or a network error, try once more with the same body. */
async function sendTo1db(url: string, headers: Record<string, string>, body: string): Promise<Response | null> {
  let response: Response | null = null
  for (let attempt = 0; attempt < 2; attempt++) {
    if (attempt > 0) await new Promise((resolve) => setTimeout(resolve, backoffMs(response)))
    try {
      response = await fetch(url, { method: 'POST', headers, body })
    } catch {
      response = null
      continue
    }
    if (response.status < 500 && response.status !== 429) return response
  }
  return response
}

/** 1DB's per-field 400, renamed to the form's inputs. Empty when no field maps. */
async function formFieldErrors(response: Response): Promise<Record<string, string>> {
  const body: { fields?: Record<string, unknown> } = await response.json().catch(() => ({}))
  const fields: Record<string, string> = {}
  for (const [name, message] of Object.entries(body.fields ?? {})) {
    const formName = FORM_FIELD_FOR[name]
    if (formName && typeof message === 'string' && !fields[formName]) fields[formName] = message
  }
  return fields
}

export async function POST(request: Request) {
  // DB_* are the current names; 1DB_* are the names this site's Cloudflare
  // project was first set up with.
  const apiEndpoint = (serverEnv('DB_API_ENDPOINT') || serverEnv('1DB_API_ENDPOINT')).replace(/\/+$/, '')
  const apiKey = serverEnv('DB_API_KEY') || serverEnv('1DB_API_KEY')
  if (!apiEndpoint || !apiKey) {
    return Response.json({ error: TRY_AGAIN }, { status: 500 })
  }

  let payload: Payload
  try {
    const parsed: unknown = await request.json()
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) throw new Error('bad body')
    payload = parsed as Payload
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // Honeypot: answer as for a success and send nothing.
  if (text(payload, 'honeypot')) {
    return Response.json({ success: true })
  }

  const fields = validate(payload)
  if (Object.keys(fields).length > 0) {
    return Response.json({ error: CHECK_FIELDS, fields }, { status: 400 })
  }

  // The form makes this id on load; a caller without one gets one here.
  const sent = text(payload, 'submission_id')
  const submissionId = SUBMISSION_ID.test(sent) ? sent : crypto.randomUUID()

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'X-API-Key': apiKey,
    'X-1DB-Contract': '2',
  }
  const ip = clientIp(request)
  if (ip) headers['X-1DB-Client-IP'] = ip
  const userAgent = request.headers.get('user-agent')
  if (userAgent) headers['X-1DB-Client-UA'] = userAgent

  const response = await sendTo1db(
    `${apiEndpoint}/v1/leads`,
    headers,
    JSON.stringify(buildLead(payload, submissionId)),
  )

  if (response?.ok) {
    return Response.json({ success: true })
  }

  if (response?.status === 400) {
    const serverFields = await formFieldErrors(response)
    if (Object.keys(serverFields).length > 0) {
      return Response.json({ error: CHECK_FIELDS, fields: serverFields }, { status: 400 })
    }
  }

  return Response.json({ error: TRY_AGAIN }, { status: 502 })
}
