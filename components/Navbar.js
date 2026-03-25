'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Scissors } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#barbers', label: 'Our Barbers' },
    { href: '/#work', label: 'Our Work' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/#contact', label: 'Contact' }
  ]

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href.split('#')[0])
  }

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-lg border-b border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-red-600 to-red-800 p-3 rounded-xl">
              <Scissors className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">HERO GENTS</h1>
              <p className="text-xs text-red-500 font-semibold">HAIR CUT</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-red-500 transition-colors text-[15px] font-medium"
              >
                {link.label}
              </Link>
            ))}
            
            <Link
              href="/#barbers"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2.5 rounded-xl font-semibold text-[15px] hover:shadow-lg hover:shadow-red-600/40 transition-all"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-zinc-900 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-zinc-950/95 border-t border-zinc-900/50"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors text-[15px] font-medium"
                >
                  {link.label}
                </Link>
              ))}
              
              <Link
                href="/#barbers"
                onClick={() => setIsOpen(false)}
                className="block bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 rounded-xl text-center font-semibold text-[15px] mt-3"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar