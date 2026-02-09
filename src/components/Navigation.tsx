'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  {
    label: 'Products',
    href: '/products',
    submenu: [
      { href: '/products/wooden-pallets', label: 'Wooden Pallets' },
      { href: '/products/plastic-pallets', label: 'Plastic Pallets' },
      { href: '/products/metal-pallets', label: 'Metal Pallets' },
      { href: '/products/custom-pallets', label: 'Custom Pallets' },
      { href: '/products/accessories', label: 'Accessories' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    submenu: [
      { href: '/services/buying', label: 'Pallet Buying' },
      { href: '/services/selling', label: 'Pallet Selling' },
      { href: '/services/recycling', label: 'Pallet Recycling' },
      { href: '/services/transportation', label: 'Transportation' },
      { href: '/services/repair', label: 'Pallet Repair' },
      { href: '/services/disposal', label: 'Disposal Services' },
    ],
  },
  { href: '/locations', label: 'Locations' },
  { href: '/sizes', label: 'Size Guide' },
  { href: '/resources', label: 'Resources & Articles' },
  { href: '/contact', label: 'Contact Us' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleSubmenu = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label)
  }

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md soft-shadow' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Menu Button - Left Side */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 px-4 py-2 rounded-xl border border-primary-200 hover:border-primary-400 bg-white/50 transition-all group"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-6">
                <span
                  className={`block h-0.5 bg-primary-500 transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-primary-500 transition-all duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-primary-500 transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
              <span className="text-primary-600 font-semibold group-hover:text-secondary-600 transition-colors">
                Menu
              </span>
            </button>

            {/* Logo - Center */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 soft-shadow">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-xl font-bold hidden md:block">
                <span className="text-primary-600">USA</span>
                <span className="text-secondary-600"> Pallet Solution</span>
              </span>
            </Link>

            {/* Right side placeholder for balance */}
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-50"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-white border-r border-primary-100 z-50 overflow-y-auto soft-shadow"
            >
              <div className="p-6">
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-lg border border-primary-200 hover:border-primary-400 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Logo */}
                <div className="mb-8">
                  <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center soft-shadow">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <span className="font-bold text-lg">
                      <span className="text-primary-600">USA</span>
                      <span className="text-secondary-600"> Pallet</span>
                    </span>
                  </Link>
                </div>

                {/* Menu Items */}
                <nav className="space-y-2">
                  {menuItems.map((item, index) => (
                    <div key={index}>
                      {item.submenu ? (
                        <div>
                          <button
                            onClick={() => toggleSubmenu(item.label)}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary-50 transition-colors group"
                          >
                            <span className="text-gray-700 group-hover:text-primary-600 transition-colors font-medium">
                              {item.label}
                            </span>
                            <svg
                              className={`w-4 h-4 text-gray-500 transition-transform ${
                                expandedMenu === item.label ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          <AnimatePresence>
                            {expandedMenu === item.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 py-2 space-y-1">
                                  {item.submenu.map((subItem, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      href={subItem.href}
                                      onClick={() => setIsOpen(false)}
                                      className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-secondary-600 hover:bg-secondary-50 transition-colors"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-3 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors font-medium"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
