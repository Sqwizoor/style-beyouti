import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { MessageCircle, Phone, Sparkles } from 'lucide-react'
import Image from 'next/image'


export default function Introduction() {
  return (
    <div>
        {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-spa-beige-50 to-spa-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-8">
              Your Personal Spa Experience Awaits
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 leading-relaxed mb-12">
              Experience a personal, private, and affordable spa treatment in the comfort of your own space. 
              We bring professional wellness services directly to you, ensuring complete relaxation and rejuvenation.
            </p>

            {/* Spa Experience Image */}
            <div className="relative max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video">
                <Image
                  src="/tim7.jpeg"
                  alt="Special Occasions and Events"
                  fill
                  quality={100}
                  className="object-cover w-full h-full rounded-2xl"
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/20 to-transparent"></div>
                {/* Image Caption */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="font-poppins text-spa-white text-sm font-medium bg-spa-black/50 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                    Experience the Style & BeYouTi Zone Difference
                  </p>
                </div>
              </div>
            </div>

            {/* Memorable Events Section */}
            <div className="bg-gradient-to-r from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-lg mb-6">
                <Sparkles className="w-8 h-8 text-spa-white" />
              </div>
              
              <h3 className="font-playfair font-bold text-3xl text-spa-black dark:text-spa-white mb-6">
                Memorable Events Celebrated @ Style & BeYouTi Zone
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🎂</span>
                  </div>
                  <h4 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                    Birthdays
                  </h4>
                </div>

                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">👰‍♀️</span>
                  </div>
                  <h4 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                    Bridal Showers
                  </h4>
                </div>

                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">💕</span>
                  </div>
                  <h4 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                    Precious Moments
                  </h4>
                </div>

                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🍼</span>
                  </div>
                  <h4 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                    Baby Showers
                  </h4>
                </div>

                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">👯‍♀️</span>
                  </div>
                  <h4 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                    Girls Pamper Day
                  </h4>
                </div>

                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🧘‍♀️</span>
                  </div>
                  <h4 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                    Chill & Relax
                  </h4>
                </div>
              </div>

              <p className="font-lora text-lg text-spa-beige-700 dark:text-spa-beige-300 mt-8 text-center">
                Whether you're celebrating a special occasion or just finding a reason to unwind, 
                we create memorable experiences tailored to your unique moments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="tel:0617747378" className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Plan Your Event</span>
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Link href="https://wa.me/27617747378?text=Hi! I'd like to plan a memorable event at Style & BeYouTi Zone Spa. Can you help me create the perfect experience?" target="_blank" className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Us</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
