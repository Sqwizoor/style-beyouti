import { Heart, Sparkles, Phone, Mail, MapPin, MessageCircle, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
  ]

  const supportLinks = [
    { name: "Contact", href: "/contact" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Thank You", href: "/thank-you" },
    { name: "Book Now", href: "tel:0617747378" },
  ]

  const serviceAreas = [
    "Johannesburg Central",
    "Sandton & Surrounds", 
    "Pretoria Areas",
    "East Rand",
    "West Rand",
    "Midrand & Centurion"
  ]

  return (
    <footer className="bg-gradient-to-b from-spa-beige-50 to-spa-white dark:from-slate-900 dark:to-slate-800 border-t border-spa-pink-100 dark:border-spa-pink-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/pink-logo.png"
                  alt="Style & Beyouti Zone Spa Logo"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl text-spa-black dark:text-spa-white">
                  Style & Beyouti Zone
                </h3>
                <p className="font-poppins text-sm text-spa-pink-600 dark:text-spa-pink-400">
                  Spa
                </p>
              </div>
            </div>
            
            <p className="font-lora text-spa-beige-700 dark:text-spa-beige-300 mb-6 leading-relaxed">
              Experience luxury spa treatments in the comfort of your own space. Personal, private, and affordable wellness services delivered to your doorstep.
            </p>

            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-spa-gold-400 fill-current" />
                ))}
              </div>
              <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 text-sm">
                200+ Happy Clients
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-lg text-spa-black dark:text-spa-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 hover:text-spa-pink-600 dark:hover:text-spa-pink-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-playfair font-bold text-lg text-spa-black dark:text-spa-white mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 hover:text-spa-pink-600 dark:hover:text-spa-pink-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-bold text-lg text-spa-black dark:text-spa-white mb-6">
              Get In Touch
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center shadow-md">
                  <Phone className="w-5 h-5 text-spa-white" />
                </div>
                <div>
                  <p className="font-poppins font-medium text-spa-black dark:text-spa-white">
                    Call Kumarie
                  </p>
                  <Link
                    href="tel:0617747378"
                    className="font-poppins text-spa-pink-600 dark:text-spa-pink-400 hover:text-spa-gold-600 dark:hover:text-spa-gold-400 transition-colors"
                  >
                    061 774 7378
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
                  <MessageCircle className="w-5 h-5 text-spa-white" />
                </div>
                <div>
                  <p className="font-poppins font-medium text-spa-black dark:text-spa-white">
                    WhatsApp
                  </p>
                  <Link
                    href="https://wa.me/0617747378?text=Hi, I would like to book a spa appointment"
                    target="_blank"
                    className="font-poppins text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                    Chat with us
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-spa-gold-500 to-spa-gold-600 rounded-full flex items-center justify-center shadow-md mt-1">
                  <Mail className="w-5 h-5 text-spa-white" />
                </div>
                <div>
                  <p className="font-poppins font-medium text-spa-black dark:text-spa-white">
                    Email Us
                  </p>
                  <Link
                    href="mailto:info@stylebeyoutizone.co.za"
                    className="font-poppins text-spa-gold-600 dark:text-spa-gold-400 hover:text-spa-gold-700 dark:hover:text-spa-gold-300 transition-colors text-sm"
                  >
                    info@stylebeyoutizone.co.za
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas Section */}
        <div className="mt-16 pt-8 border-t border-spa-pink-100 dark:border-spa-pink-800">
          <div className="text-center mb-8">
            <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-4">
              We Serve These Areas
            </h3>
            <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">
              Mobile spa services available in your location
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {serviceAreas.map((area, index) => (
              <div 
                key={index}
                className="text-center p-3 bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <MapPin className="w-5 h-5 text-spa-pink-600 dark:text-spa-pink-400 mx-auto mb-2" />
                <p className="font-poppins text-spa-beige-700 dark:text-spa-beige-300 text-sm">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gradient-to-r from-spa-pink-400 via-spa-gold-400 to-spa-beige-400 dark:from-spa-pink-800 dark:via-spa-gold-800 dark:to-spa-beige-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-spa-white animate-pulse" />
              <p className="font-poppins text-spa-white text-sm">
                © {currentYear} Style & Beyouti Zone Spa. Made with love for your wellness.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex items-center space-x-4">
              <p className="font-poppins text-spa-white/90 text-sm">
                Ready to relax?
              </p>
              <Link
                href="tel:0617747378"
                className="bg-spa-white text-spa-pink-600 hover:bg-spa-beige-50 font-poppins font-semibold px-4 py-2 rounded-full text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

