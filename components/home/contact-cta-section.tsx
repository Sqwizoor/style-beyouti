import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MessageCircle, Phone } from 'lucide-react'

export function ContactCtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-spa-pink-400 via-spa-gold-400 to-spa-beige-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-spa-black/10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-white mb-4">
          Ready to Experience Pure Bliss?
        </h2>
        
        <p className="font-lora text-xl text-spa-white/90 mb-10 max-w-2xl mx-auto">
          Contact us today and let us bring the ultimate relaxation experience to your doorstep
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-spa-white hover:bg-spa-white/90 text-spa-pink-600 font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Link href="tel:0617747378" className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-spa-white text-spa-white hover:bg-spa-white/10 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
          >
            <Link 
              href="https://wa.me/27617747378?text=Hi! I'd like to book a spa treatment. Could you help me choose the perfect package?"
              target="_blank" 
              className="flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </Link>
          </Button>
        </div>

        <div className="mt-8">
          <p className="text-spa-white/80 font-poppins text-sm">
            Your journey to relaxation is just a message away
          </p>
        </div>
      </div>
    </section>
  )
}