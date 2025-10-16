import { Clock, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HoursSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-spa-white via-spa-beige-50 to-spa-pink-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-lg mb-6">
            <Clock className="w-8 h-8 text-spa-white" />
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            Opening Hours
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-3xl mx-auto">
            We're available to bring relaxation to your doorstep at your convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-r from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8">
            <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-6">
              Regular Hours
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-poppins font-medium text-spa-beige-700 dark:text-spa-beige-300">Monday - Friday</span>
                <span className="font-poppins font-semibold text-spa-pink-600 dark:text-spa-pink-400">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-poppins font-medium text-spa-beige-700 dark:text-spa-beige-300">Saturday</span>
                <span className="font-poppins font-semibold text-spa-pink-600 dark:text-spa-pink-400">8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-poppins font-medium text-spa-beige-700 dark:text-spa-beige-300">Sunday</span>
                <span className="font-poppins font-semibold text-spa-pink-600 dark:text-spa-pink-400">By Appointment</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8">
            <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-spa-pink-600 dark:text-spa-pink-400" />
                <span className="font-poppins font-medium text-spa-beige-700 dark:text-spa-beige-300">061 774 7378</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-spa-pink-600 dark:text-spa-pink-400" />
                <span className="font-poppins font-medium text-spa-beige-700 dark:text-spa-beige-300">WhatsApp Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair font-bold text-3xl text-spa-black dark:text-spa-white mb-4">
              Ready to Schedule Your Spa Session?
            </h3>
            <p className="font-lora text-lg text-spa-beige-700 dark:text-spa-beige-300 mb-8 max-w-2xl mx-auto">
              Contact us during our business hours to book your personalized spa experience. We're flexible and can accommodate your schedule.
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
                <Link href="https://wa.me/27617747378?text=Hi! I'd like to book a spa session. What times are you available?" target="_blank" className="flex items-center space-x-2">
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
