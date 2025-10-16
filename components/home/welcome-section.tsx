import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Clock, MessageCircle, Phone, UserCheck } from 'lucide-react'

export function WelcomeSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-spa-beige-50 to-spa-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <h1 className="font-playfair font-bold text-5xl sm:text-6xl text-spa-black dark:text-spa-white mb-6 leading-tight">
              Experience Pure <span className="text-transparent bg-clip-text bg-gradient-to-r from-spa-pink-500 to-spa-gold-500">Bliss</span> and Relaxation
            </h1>
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 mb-8">
              Discover a sanctuary of tranquility where every treatment is crafted to rejuvenate your body, mind, and spirit. Let us guide you on a journey to ultimate relaxation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                asChild
                className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-medium text-lg rounded-full py-6 transition-all duration-300 hover:shadow-lg"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Book Your Session
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium text-lg rounded-full py-6 transition-all duration-300"
              >
                <Link href="/services" className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5" />
                  View Services
                </Link>
              </Button>
            </div>

            {/* Contact Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-spa-pink-500 dark:text-spa-pink-400" />
                <Link href="tel:0617747378" className="font-poppins text-spa-black dark:text-spa-white hover:text-spa-pink-500 dark:hover:text-spa-pink-400 transition-colors">
                  061 774 7378
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-spa-pink-500 dark:text-spa-pink-400" />
                <Link 
                  href="https://wa.me/0617747378?text=Hi, I'm interested in your spa services. Could you provide more information?"
                  target="_blank"
                  className="font-poppins text-spa-black dark:text-spa-white hover:text-spa-pink-500 dark:hover:text-spa-pink-400 transition-colors"
                >
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/hero-main.jpeg"
                  alt="Spa treatment room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/massage.jpeg"
                  alt="Massage service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/facials.jpeg"
                  alt="Facial treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/couple.jpeg"
                  alt="Couple spa experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}