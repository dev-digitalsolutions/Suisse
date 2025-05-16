import React, { useState, useEffect } from 'react'
import { Flag, Menu, X } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <Flag className={`h-6 w-6 ${isScrolled ? 'text-swiss-red' : 'text-white'}`} />
            <span className={`font-serif text-xl font-bold ${isScrolled ? 'text-alpine-blue' : 'text-white'}`}>
              Histoire Suisse
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#timeline" className={`font-medium hover:text-swiss-red transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Chronologie
            </a>
            <a href="#periodes" className={`font-medium hover:text-swiss-red transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Périodes
            </a>
            <a href="#figures" className={`font-medium hover:text-swiss-red transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Personnages
            </a>
            <a href="#cantons" className={`font-medium hover:text-swiss-red transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Cantons
            </a>
            <a href="#galerie" className={`font-medium hover:text-swiss-red transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Galerie
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-swiss-red"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#timeline" 
                className="font-medium text-gray-700 hover:text-swiss-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Chronologie
              </a>
              <a 
                href="#periodes" 
                className="font-medium text-gray-700 hover:text-swiss-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Périodes
              </a>
              <a 
                href="#figures" 
                className="font-medium text-gray-700 hover:text-swiss-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Personnages
              </a>
              <a 
                href="#cantons" 
                className="font-medium text-gray-700 hover:text-swiss-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cantons
              </a>
              <a 
                href="#galerie" 
                className="font-medium text-gray-700 hover:text-swiss-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Galerie
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
