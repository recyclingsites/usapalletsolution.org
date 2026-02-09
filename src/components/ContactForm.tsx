'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

interface ContactFormProps {
  productType?: string
  className?: string
  compact?: boolean // For modal view - more compact layout
}

interface ValidationErrors {
  [key: string]: string
}

export function ContactForm({ productType = '', className = '', compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    quantity: '',
    productType: productType,
    selectService: '',
    grade: '',
    honeypot: '', // Bot trap field
  })

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

  const validateName = (name: string): boolean => {
    // Only letters, spaces, hyphens, apostrophes. Min 2 chars.
    return /^[a-zA-Z\s'-]{2,50}$/.test(name)
  }

  const validateCity = (city: string): boolean => {
    // Only letters, spaces, hyphens, apostrophes
    return /^[a-zA-Z\s'-]{2,50}$/.test(city)
  }

  const validateState = (state: string): boolean => {
    // 2-letter state code or full state/province name
    return /^[a-zA-Z\s]{2,50}$/.test(state)
  }

  const validateQuantity = (quantity: string): boolean => {
    const num = parseInt(quantity)
    return !isNaN(num) && num > 0 && num <= 1000000
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
        if (!validateName(value)) return 'Please enter a valid first name (letters only)'
        return ''

      case 'email':
        if (!value.trim()) return 'Email is required'
        if (!validateEmail(value)) return 'Please enter a valid email address (e.g., name@company.com)'
        return ''

      case 'phone':
        if (!value.trim()) return 'Phone number is required'
        if (!validatePhone(value)) return 'Please enter a valid phone number (e.g., (555) 123-4567)'
        return ''

      case 'postalCode':
        if (!value.trim()) return 'Postal/ZIP code is required'
        if (!validatePostalCode(value)) return 'Please enter a valid ZIP code (e.g., 12345 or 12345-6789) or Canadian postal code (e.g., A1A 1A1)'
        return ''

      case 'city':
        if (value && !validateCity(value)) return 'Please enter a valid city name (letters only)'
        return ''

      case 'stateProvince':
        if (value && !validateState(value)) return 'Please enter a valid state/province'
        return ''

      case 'quantity':
        if (!value.trim()) return 'Quantity is required'
        if (!validateQuantity(value)) return 'Please enter a valid quantity (1-1,000,000)'
        return ''

      case 'productType':
        if (!value) return 'Please select a product type'
        return ''

      case 'company':
        if (value && value.length < 2) return 'Company name must be at least 2 characters'
        return ''

      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

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
    errors.email = validateField('email', formData.email)
    errors.phone = validateField('phone', formData.phone)
    errors.postalCode = validateField('postalCode', formData.postalCode)
    errors.quantity = validateField('quantity', formData.quantity)
    errors.productType = validateField('productType', formData.productType)

    // Validate optional fields if filled
    if (formData.city) errors.city = validateField('city', formData.city)
    if (formData.stateProvince) errors.stateProvince = validateField('stateProvince', formData.stateProvince)
    if (formData.company) errors.company = validateField('company', formData.company)

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    // Check honeypot (bot trap)
    if (formData.honeypot) {
      setError('Invalid submission detected.')
      return
    }

    // Validate all fields
    if (!validateForm()) {
      setError('Please fix all errors before submitting the form.')
      return
    }

    setLoading(true)

    try {
      const sourceUrl = typeof window !== 'undefined' ? window.location.href : ''

      const response = await fetch(
        process.env.NEXT_PUBLIC_1DB_API_URL || 'https://gallant-goshawk-513.convex.site/v1/leads',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': process.env.NEXT_PUBLIC_1DB_API_KEY || '1db_e8adb977e0e3251da026416a6775674a',
          },
          body: JSON.stringify({
            formSlug: process.env.NEXT_PUBLIC_FORM_SLUG || 'usapalletsolution-org-contact',
            firstName: formData.firstName,
            lastName: formData.lastName,
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
            sourceUrl: sourceUrl,
          }),
        }
      )

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Submission failed')
      }

      setSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        city: '',
        stateProvince: '',
        postalCode: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        quantity: '',
        productType: productType,
        selectService: '',
        grade: '',
        honeypot: '',
      })
      setValidationErrors({})
      setTouched({})

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
          Your inquiry has been received. Our team will contact you within 2 hours during business hours.
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
          className={`bg-red-50 border border-red-300 text-red-700 p-3 rounded-lg ${compact ? 'mb-3 text-xs' : 'mb-6 text-sm'}`}
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

      <div className={`grid grid-cols-1 ${compact ? 'md:grid-cols-3 gap-3' : 'md:grid-cols-2 gap-6'}`}>
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
            placeholder="John"
          />
          {touched.firstName && validationErrors.firstName && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-4 py-3 h-[50px] bg-white border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-gray-800"
            placeholder="Smith"
          />
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
            placeholder="john.smith@company.com"
          />
          {touched.email && validationErrors.email && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
          )}
          {!compact && !validationErrors.email && (
            <p className="mt-1 text-xs text-gray-500">Enter a valid business email address</p>
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
            placeholder="(555) 123-4567"
            maxLength={14}
          />
          {touched.phone && validationErrors.phone && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
          )}
          {!compact && !validationErrors.phone && (
            <p className="mt-1 text-xs text-gray-500">US/Canada format: (555) 123-4567</p>
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
            placeholder="Los Angeles"
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
            placeholder="CA or California"
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
            placeholder="12345 or A1A 1A1"
            maxLength={10}
          />
          {touched.postalCode && validationErrors.postalCode && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.postalCode}</p>
          )}
          {!compact && !validationErrors.postalCode && (
            <p className="mt-1 text-xs text-gray-500">US: 12345 or 12345-6789 | Canada: A1A 1A1</p>
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
            placeholder="Company Name"
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
            <option value="Wooden Pallets">Wooden Pallets</option>
            <option value="Plastic Pallets">Plastic Pallets</option>
            <option value="Metal Pallets">Metal Pallets</option>
            <option value="Custom Pallets">Custom Pallets</option>
            <option value="Pallet Accessories">Pallet Accessories</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
          {touched.productType && validationErrors.productType && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.productType}</p>
          )}
        </div>

        {/* Select Service */}
        <div>
          <label htmlFor="selectService" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            Service Needed
          </label>
          <select
            id="selectService"
            name="selectService"
            value={formData.selectService}
            onChange={handleChange}
            className="w-full px-4 py-3 h-[50px] bg-white border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-gray-800"
          >
            <option value="">Select Service (Optional)</option>
            <option value="Buying">Buying Pallets</option>
            <option value="Selling">Selling Pallets</option>
            <option value="Recycling">Recycling</option>
            <option value="Transportation">Transportation</option>
            <option value="Repair">Repair</option>
            <option value="Disposal">Disposal</option>
          </select>
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
            <option value="Premium A">Premium A - Like New</option>
            <option value="Grade B">Grade B - Good Condition</option>
            <option value="Recycled">Recycled - Refurbished</option>
            <option value="New">New - Never Used</option>
          </select>
        </div>

        {/* Message */}
        <div className={compact ? 'md:col-span-3' : 'md:col-span-2'}>
          <label htmlFor="message" className={`block ${compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-700 ${compact ? 'mb-1' : 'mb-2'}`}>
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={1}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 h-[50px] bg-white border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-gray-800 resize-none"
            placeholder="Tell us more about your pallet requirements, delivery location, timeline, or any special needs..."
          ></textarea>
          <p className="mt-1 text-xs text-gray-500">Optional: Provide any additional information that helps us serve you better</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start gap-2">
          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div className="text-sm text-blue-800">
            <p className="font-semibold mb-1">Quick Response Guarantee</p>
            <p>Our team will respond within 2 hours during business hours (Monday-Friday, 8 AM - 6 PM EST)</p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`${compact ? 'mt-4' : 'mt-8'} w-full ${compact ? 'py-3 h-[50px]' : 'py-4'} rounded-lg font-bold ${compact ? 'text-base' : 'text-lg'} text-white transition-all transform soft-shadow ${
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
          Fields marked with <span className="text-red-500">*</span> are required. We respect your privacy and will never share your information.
        </p>
      )}
    </form>
  )
}
