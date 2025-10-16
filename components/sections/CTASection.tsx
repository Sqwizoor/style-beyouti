import { Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-spa-pink-500 via-spa-gold-500 to-spa-pink-600 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-white mb-6">
            Ready to Experience Ultimate Relaxation?
          </h2>
          <p className="font-lora text-xl text-spa-white/90 max-w-3xl mx-auto mb-8">
            Book your personalized spa experience today and discover the luxury of at-home relaxation. 
            Our professional therapists are ready to bring tranquility to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-spa-white text-spa-pink-600 hover:bg-spa-white/90 font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="tel:0617747378" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Now: 061 774 7378</span>
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-spa-white text-spa-white hover:bg-spa-white/10 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
            >
              <Link href="https://wa.me/27617747378?text=Hi! I'm interested in booking a spa session. Can you tell me more about your services?" target="_blank" className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
