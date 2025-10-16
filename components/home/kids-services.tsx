'use client'

import { Button } from '@/components/ui/button'
import { Star, Heart, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function KidsServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-spa-pink-50 via-spa-beige-50 to-spa-gold-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/kids4.jpeg"
                alt="Kids enjoying spa treatments"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-spa-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-playfair text-spa-black dark:text-spa-white font-semibold text-lg mb-1">
                    "Making wellness fun for kids!"
                  </p>
                  <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 text-sm">
                    - Safe, Fun & Educational
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fadeIn">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-lg mb-6">
              <Star className="w-8 h-8 text-spa-white" />
            </div>
            
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-6">
              Introducing Kids Spa Services
            </h2>
            
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 mb-8 leading-relaxed">
              We've created a special section dedicated to our young clients! Our kids spa services are designed to be 
              safe, fun, and educational - introducing children to wellness and self-care in an age-appropriate way.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-spa-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                    Ages 5-17 Welcome
                  </h3>
                  <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 text-sm">
                    Treatments designed for different age groups and developmental stages
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-spa-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                    100% Safe & Child-Friendly
                  </h3>
                  <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 text-sm">
                    Child-safe products, trained specialists, and parent supervision required
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-spa-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                    Fun & Educational
                  </h3>
                  <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 text-sm">
                    Learning about self-care while having a magical, memorable experience
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/kids">
                  Explore Kids Services
                </Link>
              </Button>

              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
              >
                <Link href="https://wa.me/27617747378?text=Hi, I'm interested in kids spa services. My child is [age] years old. What treatments do you recommend?" target="_blank">
                  Ask About Kids Treatments
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}