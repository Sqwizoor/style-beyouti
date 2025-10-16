'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'

export function MainCta() {
  return (
    <section className="py-20 bg-gradient-to-r from-spa-pink-400 via-spa-gold-400 to-spa-beige-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-spa-black/10"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-white mb-6">
          Ready to Begin Your Spa Journey?
        </h2>
        <p className="font-lora text-xl text-spa-white/90 mb-10 max-w-2xl mx-auto">
          Contact us today and let us bring the ultimate relaxation experience to your doorstep
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="bg-spa-white text-spa-pink-600 hover:bg-spa-beige-50 font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Link href="tel:0617747378" className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call Now - 061 774 7378</span>
            </Link>
          </Button>

          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-spa-white bg-transparent text-spa-white hover:bg-spa-white hover:text-spa-pink-600 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
          >
            <Link href="https://wa.me/0617747378?text=Hi, I would like to book a spa appointment" className="flex items-center space-x-2" target="_blank">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </Link>
          </Button>
        </div>

        <div className="mt-8">
          <p className="font-poppins text-spa-white/80 text-sm">
            💖 Thank you for your support 💖
          </p>
        </div>
      </div>
    </section>
  )
}