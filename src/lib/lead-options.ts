// The contact form's options. Each one keeps the site's own wording (shown on
// the form and sent to 1DB as product_label / service_label / condition) and
// maps to exactly one Repackify value:
//   product_type: a slug from Repackify's lead API schema
//   lead_type:    buy, sell, recycle, waste or inquiry

export type LeadType = 'buy' | 'sell' | 'recycle' | 'waste' | 'inquiry'

export const productOptions: { value: string; label: string; slug: string }[] = [
  { value: 'Wooden Pallets', label: 'Wooden Pallets', slug: 'pallets' },
  { value: 'Plastic Pallets', label: 'Plastic Pallets', slug: 'plastic-pallets' },
  // Steel and aluminum pallets: Repackify has no metal-pallet slug.
  { value: 'Metal Pallets', label: 'Metal Pallets', slug: 'pallets' },
  { value: 'Custom Pallets', label: 'Custom Pallets', slug: 'pallets' },
  { value: 'Export Pallets', label: 'Export Pallets', slug: 'pallets' },
  // Collars, covers, slip sheets, strapping, load bars...: add-ons to a pallet
  // order. No one slug covers the mix, so they go with the pallet order.
  { value: 'Pallet Accessories', label: 'Pallet Accessories', slug: 'pallets' },
  { value: 'General Inquiry', label: 'General Inquiry', slug: 'pallets' },
]

// "Service Needed" is the visitor's side: "Buying Pallets" means the visitor
// buys (our Pallet Selling page), "Selling Pallets" means the visitor sells to
// us (our Pallet Buying page, "We Buy Used Pallets").
export const serviceOptions: { value: string; label: string; leadType: LeadType }[] = [
  { value: 'Buying', label: 'Buying Pallets (I need pallets)', leadType: 'buy' },
  { value: 'Selling', label: 'Selling Pallets (I have pallets to sell)', leadType: 'sell' },
  { value: 'Recycling', label: 'Recycling', leadType: 'recycle' },
  // Delivery, pickup and backhaul: no matching lead type.
  { value: 'Transportation', label: 'Transportation', leadType: 'inquiry' },
  // The visitor's own pallets are repaired and kept: no matching lead type.
  { value: 'Repair', label: 'Repair', leadType: 'inquiry' },
  { value: 'Disposal', label: 'Disposal', leadType: 'waste' },
]

export const gradeOptions: { value: string; label: string }[] = [
  { value: 'Premium A', label: 'Premium A - Like New' },
  { value: 'Grade B', label: 'Grade B - Good Condition' },
  { value: 'Recycled', label: 'Recycled - Refurbished' },
  { value: 'New', label: 'New - Never Used' },
]

export const timeframeOptions: { value: string; label: string }[] = [
  { value: 'asap', label: 'ASAP' },
  { value: 'within_2_weeks', label: 'Within 2 weeks' },
  { value: 'within_a_month', label: 'Within a month' },
  { value: 'just_pricing', label: 'Just pricing for now' },
]

export const SMS_CONSENT_TEXT =
  'Text me about this request. Message and data rates may apply. Reply STOP to opt out.'

// Pages pass the form a context string. A product option preselects that
// product; a service page preselects its service. Anything else (e.g.
// "Contact Page Inquiry") starts on General Inquiry.
const SERVICE_FOR_PAGE: Record<string, string> = {
  'Purchase Pallets': 'Buying',
  'Sell Pallets to Us': 'Selling',
  'Recycling Services': 'Recycling',
  'Transportation Services': 'Transportation',
  'Pallet Repair': 'Repair',
  'Disposal Services': 'Disposal',
}

export function initialSelections(pageContext: string): { productType: string; selectService: string } {
  const product = productOptions.find((option) => option.value === pageContext)
  return {
    productType: product ? product.value : 'General Inquiry',
    selectService: SERVICE_FOR_PAGE[pageContext] ?? '',
  }
}
