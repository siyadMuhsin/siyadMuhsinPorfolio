'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setScrolled(currentScrollY > 10)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true) // scrolling down → hide
      } else {
        setHidden(false) // scrolling up → show
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
  ]

  const isActive = (href) => {
    if (href.startsWith('#'))
      return pathname === '/' && window.location.hash === href
    return pathname === href
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 transform
      ${scrolled ? 'bg-black/90 border-b border-gray-800' : 'bg-black'}
      ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-500">
            Siyad
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium relative
                    ${active ? 'text-green-400' : 'text-gray-300 hover:text-green-400'}`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-400 rounded-full animate-[fadeIn_0.3s_ease-in-out]" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-gray-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`py-2 transition-colors duration-200 font-medium 
                      ${active ? 'text-green-400' : 'text-gray-300 hover:text-green-400'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
