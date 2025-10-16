import { Sparkles, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-spa-white via-spa-beige-50 to-spa-pink-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-lg mb-6">
            <Sparkles className="w-8 h-8 text-spa-white" />
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            Our Service Process
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-3xl mx-auto">
            Simple steps to book and enjoy your personalized spa experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-spa-white">1</span>
            </div>
            <h3 className="font-playfair font-semibold text-xl text-spa-black dark:text-spa-white mb-2">
              Book Your Session
            </h3>
            <p className="text-spa-beige-600 dark:text-spa-beige-400">
              Call or WhatsApp us to schedule your preferred time and package
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-spa-white">2</span>
            </div>
            <h3 className="font-playfair font-semibold text-xl text-spa-black dark:text-spa-white mb-2">
              We Come to You
            </h3>
            <p className="text-spa-beige-600 dark:text-spa-beige-400">
              Our professional therapists arrive with all equipment and supplies
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-spa-white">3</span>
            </div>
            <h3 className="font-playfair font-semibold text-xl text-spa-black dark:text-spa-white mb-2">
              Relax & Enjoy
            </h3>
            <p className="text-spa-beige-600 dark:text-spa-beige-400">
              Unwind and enjoy your personalized spa treatment in the comfort of your space
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair font-bold text-3xl text-spa-black dark:text-spa-white mb-4">
              Ready to Book Your Spa Experience?
            </h3>
            <p className="font-lora text-lg text-spa-beige-700 dark:text-spa-beige-300 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule your personalized spa treatment. We're here to make your relaxation dreams come true.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
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
                className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
              >
                <Link href="https://wa.me/27617747378?text=Hi! I'd like to book a spa session. What packages do you have available?" target="_blank" className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
