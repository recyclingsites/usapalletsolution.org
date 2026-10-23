// Where the visitor came from, sent with the lead as 1DB's _1db_* keys.
// Read once per visit (first touch) and kept in sessionStorage, so the UTM
// tags and landing page survive moving between pages before submitting.

const URL_PARAMS: Record<string, string> = {
  utm_source: '_1db_utm_source',
  utm_medium: '_1db_utm_medium',
  utm_campaign: '_1db_utm_campaign',
  utm_term: '_1db_utm_term',
  utm_content: '_1db_utm_content',
  gclid: '_1db_gclid',
  gbraid: '_1db_gbraid',
  wbraid: '_1db_wbraid',
  fbclid: '_1db_fbclid',
  msclkid: '_1db_msclkid',
  ttclid: '_1db_ttclid',
}

const STORAGE_KEY = 'usaps_lead_attribution'

function readStored(): Record<string, string> | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Record<string, string>) : null
  } catch {
    return null
  }
}

/** Call on mount. Returns the visit's first-touch attribution. */
export function captureAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const stored = readStored()
  if (stored) return stored

  const found: Record<string, string> = {}
  const params = new URLSearchParams(window.location.search)
  for (const [param, key] of Object.entries(URL_PARAMS)) {
    const value = params.get(param)?.trim()
    if (value) found[key] = value
  }
  if (document.referrer) found._1db_referrer = document.referrer
  found._1db_landing_page = window.location.href

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found))
  } catch {
    // Private mode or blocked storage: this page's values still go out.
  }
  return found
}

/** Google Analytics client id from the _ga cookie ("GA1.1.123.456" -> "123.456"). */
export function gaClientId(): string {
  if (typeof document === 'undefined') return ''
  const match = document.cookie.match(/(?:^|;\s*)_ga=([^;]+)/)
  if (!match) return ''
  const parts = decodeURIComponent(match[1]).split('.')
  return parts.length >= 4 ? parts.slice(-2).join('.') : ''
}

/** A UUID made when the form loads and kept across retries of one submission. */
export function newSubmissionId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  // Older browsers or a non-secure context: a v4-shaped id from getRandomValues.
  const bytes = new Uint8Array(16)
  crypto.getRandomValues(bytes)
  bytes[6] = (bytes[6] & 0x0f) | 0x40
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('')
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}
