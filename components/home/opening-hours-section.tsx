import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Clock, Phone, MessageCircle } from 'lucide-react'

export function OpeningHoursSection() {
  return (
    <section className="py-20 bg-spa-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            Opening Hours
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300">
            We're here to serve you with flexible appointment times
          </p>
        </div>

        <div className="bg-gradient-to-br from-spa-beige-50 to-spa-pink-50 dark:from-slate-700 dark:to-slate-800 rounded-2xl shadow-xl p-8 border border-spa-beige-200 dark:border-slate-600">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Days of the Week */}
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-spa-beige-200 dark:border-slate-600">
                <span className="font-poppins font-medium text-spa-black dark:text-spa-white">Monday</span>
                <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-spa-beige-200 dark:border-slate-600">
                <span className="font-poppins font-medium text-spa-black dark:text-spa-white">Tuesday</span>
                <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-spa-beige-200 dark:border-slate-600">
                <span className="font-poppins font-medium text-spa-black dark:text-spa-white">Wednesday</span>
                <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-spa-beige-200 dark:border-slate-600">
                <span className="font-poppins font-medium text-spa-black dark:text-spa-white">Thursday</span>
                <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">9:00 AM - 7:00 PM</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-spa-beige-200 dark:border-slate-600">
                <span className="font-poppins font-medium text-spa-black dark:text-spa-white">Friday</span>
                <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-spa-beige-200 dark:border-slate-600">
                <span className="font-poppins font-medium text-spa-black dark:text-spa-white">Saturday</span>
                <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-spa-beige-200 dark:border-slate-600">
                <span className="font-poppins font-medium text-spa-black dark:text-spa-white">Sunday</span>
                <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">10:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="font-poppins font-medium text-spa-black dark:text-spa-white">Public Holidays</span>
                <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">By Appointment</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-spa-beige-200 dark:border-slate-600">
            <div className="bg-spa-pink-50 dark:bg-spa-pink-900/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-spa-pink-600 dark:text-spa-pink-400" />
                <h3 className="font-playfair font-semibold text-xl text-spa-black dark:text-spa-white">
                  Flexible Scheduling Available
                </h3>
              </div>
              <p className="font-poppins text-spa-beige-700 dark:text-spa-beige-300 mb-4">
                We understand that everyone has different schedules. Evening and weekend appointments are available upon request. 
                Contact us to discuss your preferred time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Link href="tel:0617747378" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call to Schedule
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium rounded-full transition-all duration-300"
                >
                  <Link href="https://wa.me/0617747378?text=Hi, I'd like to schedule an appointment. What times are available?" target="_blank" className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}