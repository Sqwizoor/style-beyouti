"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sparkles, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-spa-pink-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-28 h-28 group-hover:scale-110 transition-all duration-700 ease-out">
              <Image
                src="/main-logo.png"
                alt="Style & Beyouti Zone Spa Logo"
                fill
                sizes="(max-width: 768px) 112px, 112px"
                quality={100}
                className="object-contain drop-shadow-2xl filter brightness-110 contrast-110 saturate-110 hue-rotate-0 transition-all duration-500 group-hover:brightness-125 group-hover:contrast-115 group-hover:saturate-125 group-hover:drop-shadow-[0_0_25px_rgba(236,72,153,0.6)]"
                priority
                style={{ 
                  imageRendering: 'crisp-edges',
                  WebkitFontSmoothing: 'antialiased'
                }}
              />
              {/* Enhanced glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-spa-pink-400/40 to-spa-gold-400/40 blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-700 animate-pulse -z-10"></div>
              {/* Additional quality enhancement layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-spa-pink-100/5 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              {/* Enhanced sparkle effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-3 right-5 w-2 h-2 bg-spa-gold-400 rounded-full animate-ping shadow-lg shadow-spa-gold-300/50"></div>
                <div className="absolute bottom-5 left-3 w-1.5 h-1.5 bg-spa-pink-400 rounded-full animate-ping shadow-lg shadow-spa-pink-300/50" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-6 left-7 w-1 h-1 bg-spa-gold-300 rounded-full animate-ping shadow-md shadow-spa-gold-200/50" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-poppins font-medium text-spa-white hover:text-spa-pink-400 transition-all duration-500 relative group transform hover:scale-105 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 transition-all duration-500 group-hover:w-full"></span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-spa-pink-400/10 to-spa-gold-400/10 opacity-0 group-hover:opacity-100 transition-all duration-300 -m-2"></div>
              </Link>
            ))}
          </div>

          {/* Book Now Button, Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button 
              asChild
              className="hidden sm:flex bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 animate-pulse hover:animate-glow"
            >
              <Link href="tel:0617747378" className="flex items-center space-x-2 relative">
                <Phone className="w-4 h-4 animate-wiggle" />
                <span>Book Now</span>
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-spa-white hover:text-spa-pink-400 hover:bg-spa-pink-900/20"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-spa-pink-800 animate-fadeIn">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block font-poppins font-medium text-spa-white hover:text-spa-pink-400 transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-spa-pink-800">
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="tel:0617747378" className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Book Now - 061 774 7378</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
