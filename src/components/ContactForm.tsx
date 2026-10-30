'use client'

import { useEffect, useRef, useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { captureAttribution, gaClientId, newSubmissionId } from '@/lib/attribution'
import {
  SMS_CONSENT_TEXT,
  gradeOptions,
  initialSelections,
  productOptions,
  serviceOptions,
  timeframeOptions,
} from '@/lib/lead-options'

interface ContactFormProps {
  productType?: string
  className?: string
  compact?: boolean // For modal view - more compact layout
}

interface ValidationErrors {
  [key: string]: string
}

// A failed submit is retried once after this pause (network error or 5xx).
const RETRY_DELAY_MS = 800

export function ContactForm({ productType = '', className = '', compact = false }: ContactFormProps) {
  const emptyForm = () => ({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    quantity: '',
    ...initialSelections(productType),
    grade: '',
    timeframe: '',
    smsConsent: false,
    honeypot: '', // Bot trap field
  })
  const [formData, setFormData] = useState(emptyForm)

  // Made on load and kept across retries, so 1DB can drop a repeated send.
  const submissionId = useRef('')
  const attribution = useRef<Record<string, string>>({})
  useEffect(() => {
    submissionId.current = newSubmissionId()
    attribution.current = captureAttribution()
  }, [])

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({})
  const [touched, setTouched] = useState<{[key: string]: boolean}>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  // Validation functions
  const validatePhone = (phone: string): boolean => {
    // US/Canada format: (123) 456-7890 or 123-456-7890 or 1234567890
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  }

  const validateEmail = (email: string): boolean => {
    // RFC 5322 compliant email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (!emailRegex.test(email)) return false

    // Check for common disposable/fake email domains
    const disposableDomains = ['tempmail', 'throwaway', 'guerrillamail', 'mailinator', '10minutemail', 'trashmail']
    const domain = email.split('@')[1]?.toLowerCase() || ''
    return !disposableDomains.some(d => domain.includes(d))
  }

  const validatePostalCode = (code: string): boolean => {
    // US ZIP: 12345 or 12345-6789
    const usZipRegex = /^\d{5}(-\d{4})?$/
    // Canadian Postal: A1A 1A1 or A1A1A1
    const canadianRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/
    return usZipRegex.test(code) || canadianRegex.test(code)
  }

  const validateQuantity = (quantity: string): boolean => {
    if (!/^\d+$/.test(quantity.trim())) return false
    const num = Number(quantity)
    return num > 0 && num <= 1000000
  }

  // Format phone as user types
  const formatPhoneNumber = (value: string): string => {
    const phone = value.replace(/\D/g, '')
    if (phone.length <= 3) return phone
    if (phone.length <= 6) return `(${phone.slice(0, 3)}) ${phone.slice(3)}`
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`
  }

  // Validate field
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required'
        if (value.trim().length > 80) return 'First name must be under 80 characters'
        return ''

      case 'lastName':
        if (!value.trim()) return 'Last name is required'
        if (value.trim().length > 80) return 'Last name must be under 80 characters'
        return ''

      case 'email':
        if (!value.trim()) return 'Email is required'
        if (!validateEmail(value)) return 'Enter a valid email address'
        return ''

      case 'phone':
        if (!value.trim()) return 'Phone number is required'
        if (!validatePhone(value)) return 'Enter a valid phone number'
        return ''

      case 'postalCode':
        if (!value.trim()) return 'Postal/ZIP code is required'
        if (!validatePostalCode(value)) return 'Enter a valid ZIP or postal code'
        return ''

      case 'streetAddress':
        if (value.trim().length > 200) return 'Street address must be under 200 characters'
        return ''

      case 'city':
        if (value.trim().length > 80) return 'City must be under 80 characters'
        return ''

      case 'stateProvince':
        if (value.trim().length > 40) return 'State/Province must be under 40 characters'
        return ''

      case 'quantity':
        if (!value.trim()) return 'Quantity is required'
        if (!validateQuantity(value)) return 'Please enter a whole number from 1 to 1,000,000'
        return ''

      case 'productType':
        if (!value) return 'Please select a product type'
        return ''

      case 'selectService':
        if (!value) return 'Please select a service'
        return ''

      case 'company':
        if (value && value.trim().length < 2) return 'Company name must be at least 2 characters'
        if (value.trim().length > 120) return 'Company name must be under 120 characters'
        return ''

      case 'message':
        if (value.length > 2000) return 'Additional details must be under 2,000 characters'
        return ''

      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
      const checked = e.target.checked
      setFormData(prev => ({ ...prev, [name]: checked }))
      // Changing the box clears any error the server put on it.
      setValidationErrors(prev => ({ ...prev, [name]: '' }))
      return
    }

    // Format phone number as user types
    let formattedValue = value
    if (name === 'phone') {
      formattedValue = formatPhoneNumber(value)
    }

    // Update form data
    setFormData(prev => ({ ...prev, [name]: formattedValue }))

    // Validate field if it has been touched
    if (touched[name]) {
      const error = validateField(name, formattedValue)
      setValidationErrors(prev => ({
        ...prev,
        [name]: error
      }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))

    const error = validateField(name, value)
    setValidationErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {}

    // Validate all required fields
    errors.firstName = validateField('firstName', formData.firstName)
    errors.lastName = validateField('lastName', formData.lastName)
    errors.email = validateField('email', formData.email)
    errors.phone = validateField('phone', formData.phone)
    errors.postalCode = validateField('postalCode', formData.postalCode)
    errors.quantity = validateField('quantity', formData.quantity)
    errors.productType = validateField('productType', formData.productType)
    errors.selectService = validateField('selectService', formData.selectService)

    // Validate optional fields if filled
    if (formData.streetAddress) errors.streetAddress = validateField('streetAddress', formData.streetAddress)
    if (formData.city) errors.city = validateField('city', formData.city)
    if (formData.stateProvince) errors.stateProvince = validateField('stateProvince', formData.stateProvince)
    if (formData.company) errors.company = validateField('company', formData.company)
    if (formData.message) errors.message = validateField('message', formData.message)

    // Remove empty errors
    Object.keys(errors).forEach(key => {
      if (!errors[key]) delete errors[key]
    })

    setValidationErrors(errors)

    // Mark all fields as touched
    const allTouched: {[key: string]: boolean} = {}
    Object.keys(formData).forEach(key => {
      allTouched[key] = true
    })
    setTouched(allTouched)

    return Object.keys(errors).length === 0
  }

  // POST once, and once more after a pause on a network error or a 5xx.
  // 503 means the route is not configured, which a retry can't fix.
  const postLead = async (body: string): Promise<Response> => {
    for (let attempt = 0; ; attempt++) {
      try {
        const response = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body,
        })
        if (response.status < 500 || response.status === 503 || attempt > 0) return response
      } catch {
        if (attempt > 0) throw new Error('We could not send your request. Please check your connection and try again.')
      }
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate all fields (a filled honeypot goes to the server, which answers
    // as for a success and sends nothing on)
    if (!formData.honeypot && !validateForm()) {
      setError('Please fix all errors before submitting the form.')
      return
    }

    setLoading(true)

    try {
      if (!submissionId.current) submissionId.current = newSubmissionId()
      const sourceUrl = typeof window !== 'undefined' ? window.location.href : ''
      const ga = gaClientId()

      const response = await postLead(
        JSON.stringify({
          ...attribution.current,
          _1db_current_page: sourceUrl,
          ...(ga ? { _1db_ga_client_id: ga } : {}),
          submission_id: submissionId.current,
          firstName: formData.firstName,
          lastName: formData.lastName,
          streetAddress: formData.streetAddress,
          city: formData.city,
          stateProvince: formData.stateProvince,
          postalCode: formData.postalCode,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          quantity: formData.quantity,
          productType: formData.productType,
          selectService: formData.selectService,
          grade: formData.grade,
          timeframe: formData.timeframe,
          smsConsent: formData.smsConsent,
          honeypot: formData.honeypot,
          sourceUrl: sourceUrl,
        })
      )

      if (!response.ok) {
        const data: { error?: string; fields?: Record<string, string> } = await response.json().catch(() => ({}))
        // Show the server's field errors on the matching inputs; keep what was typed.
        if (response.status === 400 && data.fields && Object.keys(data.fields).length > 0) {
          const fieldErrors = data.fields
          setValidationErrors(prev => ({ ...prev, ...fieldErrors }))
          setTouched(prev => {
            const next = { ...prev }
            Object.keys(fieldErrors).forEach(key => { next[key] = true })
            return next
          })
        }
        // submission_id has no input of its own, so its message goes in the banner.
        throw new Error(data.fields?.submission_id || data.error || 'Something went wrong. Please try again.')
      }

      setSuccess(true)
      setFormData(emptyForm())
      setValidationErrors({})
      setTouched({})
      submissionId.current = newSubmissionId()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-300 rounded-2xl p-8 text-center ${className}`}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-primary-600 mb-2">Thank You!</h3>
        <p className="text-gray-700">
          Your request has been received. A partner supplier will follow up about it.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-2xl ${compact ? 'p-0' : 'p-8'} ${compact ? 'border-0' : 'border border-primary-200 soft-shadow'} ${className}`} noValidate>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`bg-red-50 border border-red-300 text-red-700 ${compact ? 'p-2 mb-2 text-xs' : 'p-3 mb-6 text-sm'} rounded-lg`}
        >
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
          </div>
        </motion.div>
      )}

      {/* Honeypot field - hidden from users, visible to bots */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className={`grid grid-cols-1 ${compact ? 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2' : 'md:grid-cols-2 gap-6'}`}>
        {/* First Name - Required */}
        <div>
          <label htmlFor="firstName" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 h-[50px] bg-white border rounded-lg focus:outline-none transition-colors text-gray-800 ${
              touched.firstName && validationErrors.firstName
                ? 'border-red-500 focus:border-red-600'
                : touched.firstName && !validationErrors.firstName
                ? 'border-green-500 focus:border-green-600'
                : 'border-gray-300 focus:border-primary-500'
            }`}
            placeholder="First name"
          />
          {touched.firstName && validationErrors.firstName && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 h-[50px] bg-white border rounded-lg focus:outline-none transition-colors text-gray-800 ${
              touched.lastName && validationErrors.lastName
                ? 'border-red-500 focus:border-red-600'
                : touched.lastName && !validationErrors.lastName
                ? 'border-green-500 focus:border-green-600'
                : 'border-gray-300 focus:border-primary-500'
            }`}
            placeholder="Last name"
          />
          {touched.lastName && validationErrors.lastName && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.lastName}</p>
          )}
        </div>

        {/* Email - Required */}
        <div>
          <label htmlFor="email" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 h-[50px] bg-white border rounded-lg focus:outline-none transition-colors text-gray-800 ${
              touched.email && validationErrors.email
                ? 'border-red-500 focus:border-red-600'
                : touched.email && !validationErrors.email
                ? 'border-green-500 focus:border-green-600'
                : 'border-gray-300 focus:border-primary-500'
            }`}
            placeholder="Email address"
          />
          {touched.email && validationErrors.email && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
          )}
          {!compact && !validationErrors.email && (
            <p className="mt-1 text-xs text-gray-500">We use this to send your request details</p>
          )}
        </div>

        {/* Phone - Required */}
        <div>
          <label htmlFor="phone" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 h-[50px] bg-white border rounded-lg focus:outline-none transition-colors text-gray-800 ${
              touched.phone && validationErrors.phone
                ? 'border-red-500 focus:border-red-600'
                : touched.phone && !validationErrors.phone
                ? 'border-green-500 focus:border-green-600'
                : 'border-gray-300 focus:border-primary-500'
            }`}
            placeholder="Phone number"
            maxLength={14}
          />
          {touched.phone && validationErrors.phone && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
          )}
          {!compact && !validationErrors.phone && (
            <p className="mt-1 text-xs text-gray-500">US or Canadian phone number</p>
          )}
        </div>

        {/* Street Address */}
        <div>
          <label htmlFor="streetAddress" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            Street Address
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="street-address"
            className={`w-full px-4 py-3 h-[50px] bg-white border rounded-lg focus:outline-none transition-colors text-gray-800 ${
              touched.streetAddress && validationErrors.streetAddress
                ? 'border-red-500 focus:border-red-600'
                : 'border-gray-300 focus:border-primary-500'
            }`}
            placeholder="Street address"
          />
          {touched.streetAddress && validationErrors.streetAddress && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.streetAddress}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 h-[50px] bg-white border rounded-lg focus:outline-none transition-colors text-gray-800 ${
              touched.city && validationErrors.city
                ? 'border-red-500 focus:border-red-600'
                : 'border-gray-300 focus:border-primary-500'
            }`}
            placeholder="City"
          />
          {touched.city && validationErrors.city && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.city}</p>
          )}
        </div>

        {/* State/Province */}
        <div>
          <label htmlFor="stateProvince" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            State/Province
          </label>
          <input
            type="text"
            id="stateProvince"
            name="stateProvince"
            value={formData.stateProvince}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 h-[50px] bg-white border rounded-lg focus:outline-none transition-colors text-gray-800 ${
              touched.stateProvince && validationErrors.stateProvince
                ? 'border-red-500 focus:border-red-600'
                : 'border-gray-300 focus:border-primary-500'
            }`}
            placeholder="State"
          />
          {touched.stateProvince && validationErrors.stateProvince && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.stateProvince}</p>
          )}
        </div>

        {/* Postal Code - Required */}
        <div>
          <label htmlFor="postalCode" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            ZIP/Postal Code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 h-[50px] bg-white border rounded-lg focus:outline-none transition-colors text-gray-800 ${
              touched.postalCode && validationErrors.postalCode
                ? 'border-red-500 focus:border-red-600'
                : touched.postalCode && !validationErrors.postalCode
                ? 'border-green-500 focus:border-green-600'
                : 'border-gray-300 focus:border-primary-500'
            }`}
            placeholder="ZIP or postal code"
            maxLength={10}
          />
          {touched.postalCode && validationErrors.postalCode && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.postalCode}</p>
          )}
          {!compact && !validationErrors.postalCode && (
            <p className="mt-1 text-xs text-gray-500">US ZIP code or Canadian postal code</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 h-[50px] bg-white border rounded-lg focus:outline-none transition-colors text-gray-800 ${
              touched.company && validationErrors.company
                ? 'border-red-500 focus:border-red-600'
                : 'border-gray-300 focus:border-primary-500'
            }`}
            placeholder="Company name"
          />
          {touched.company && validationErrors.company && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.company}</p>
          )}
        </div>

        {/* Quantity - Required */}
        <div>
          <label htmlFor="quantity" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            Quantity Needed <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="1000000"
            value={formData.quantity}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 h-[50px] bg-white border rounded-lg focus:outline-none transition-colors text-gray-800 ${
              touched.quantity && validationErrors.quantity
                ? 'border-red-500 focus:border-red-600'
                : touched.quantity && !validationErrors.quantity
                ? 'border-green-500 focus:border-green-600'
                : 'border-gray-300 focus:border-primary-500'
            }`}
            placeholder="100"
          />
          {touched.quantity && validationErrors.quantity && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.quantity}</p>
          )}
          {!compact && !validationErrors.quantity && (
            <p className="mt-1 text-xs text-gray-500">Enter number of pallets needed</p>
          )}
        </div>

        {/* Product Type - Required */}
        <div>
          <label htmlFor="productType" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            Product Type <span className="text-red-500">*</span>
          </label>
          <select
            id="productType"
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 h-[50px] bg-white border rounded-lg focus:outline-none transition-colors text-gray-800 ${
              touched.productType && validationErrors.productType
                ? 'border-red-500 focus:border-red-600'
                : touched.productType && !validationErrors.productType
                ? 'border-green-500 focus:border-green-600'
                : 'border-gray-300 focus:border-primary-500'
            }`}
          >
            <option value="">Select Product Type</option>
            {productOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {touched.productType && validationErrors.productType && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.productType}</p>
          )}
        </div>

        {/* Select Service */}
        <div>
          <label htmlFor="selectService" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            Service Needed <span className="text-red-500">*</span>
          </label>
          <select
            id="selectService"
            name="selectService"
            value={formData.selectService}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 h-[50px] bg-white border rounded-lg focus:outline-none transition-colors text-gray-800 ${
              touched.selectService && validationErrors.selectService
                ? 'border-red-500 focus:border-red-600'
                : touched.selectService && !validationErrors.selectService
                ? 'border-green-500 focus:border-green-600'
                : 'border-gray-300 focus:border-primary-500'
            }`}
          >
            <option value="">Select Service</option>
            {serviceOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {touched.selectService && validationErrors.selectService && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.selectService}</p>
          )}
        </div>

        {/* Grade */}
        <div>
          <label htmlFor="grade" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            Pallet Grade
          </label>
          <select
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="w-full px-4 py-3 h-[50px] bg-white border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-gray-800"
          >
            <option value="">Select Grade (Optional)</option>
            {gradeOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {touched.grade && validationErrors.grade && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.grade}</p>
          )}
        </div>

        {/* Timeframe */}
        <div>
          <label htmlFor="timeframe" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            When do you need this?
          </label>
          <select
            id="timeframe"
            name="timeframe"
            value={formData.timeframe}
            onChange={handleChange}
            className={`w-full px-4 py-3 h-[50px] bg-white border rounded-lg focus:outline-none transition-colors text-gray-800 ${
              touched.timeframe && validationErrors.timeframe
                ? 'border-red-500 focus:border-red-600'
                : 'border-gray-300 focus:border-primary-500'
            }`}
          >
            <option value="">Select Timeframe (Optional)</option>
            {timeframeOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {touched.timeframe && validationErrors.timeframe && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.timeframe}</p>
          )}
        </div>

        {/* Message */}
        <div className={compact ? 'sm:col-span-2 md:col-span-3 lg:col-span-4' : 'md:col-span-2'}>
          <label htmlFor="message" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={1}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 h-[50px] bg-white border rounded-lg focus:outline-none transition-colors text-gray-800 resize-none ${
              touched.message && validationErrors.message
                ? 'border-red-500 focus:border-red-600'
                : 'border-gray-300 focus:border-primary-500'
            }`}
            placeholder="Tell us about your pallet requirements, delivery location, and timeline"
          ></textarea>
          {touched.message && validationErrors.message ? (
            <p className="mt-1 text-sm text-red-600">{validationErrors.message}</p>
          ) : (
            <p className="mt-1 text-xs text-gray-500">Optional: anything that helps a partner supplier prepare your quote</p>
          )}
        </div>

        {/* SMS Consent - unticked by default */}
        <div className={compact ? 'sm:col-span-2 md:col-span-3 lg:col-span-4' : 'md:col-span-2'}>
          <label htmlFor="smsConsent" className={`flex items-start gap-2 ${compact ? 'text-xs' : 'text-sm'} text-gray-700 cursor-pointer`}>
            <input
              type="checkbox"
              id="smsConsent"
              name="smsConsent"
              checked={formData.smsConsent}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-gray-300 accent-primary-500"
            />
            <span>{SMS_CONSENT_TEXT}</span>
          </label>
          {touched.smsConsent && validationErrors.smsConsent && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.smsConsent}</p>
          )}
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start gap-2">
          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div className="text-sm text-blue-800">
            <p className="font-semibold mb-1">Free, no-obligation quote request</p>
            <p>A partner supplier in our network follows up about your request. Pricing is by quote.</p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`${compact ? 'mt-2' : 'mt-8'} w-full ${compact ? 'py-3 h-[50px]' : 'py-4'} rounded-lg font-bold ${compact ? 'text-base' : 'text-lg'} text-white transition-all transform soft-shadow ${
          loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 hover:scale-105'
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        ) : (
          'Submit Quote Request'
        )}
      </button>

      {!compact && (
        <p className="mt-4 text-center text-xs text-gray-500">
          Fields marked with <span className="text-red-500">*</span> are required. Your request is shared with partner suppliers to prepare a quote. See our <a href="/privacy-policy/" className="underline">Privacy Policy</a>.
        </p>
      )}
    </form>
  )
}
