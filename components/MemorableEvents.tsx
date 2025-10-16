import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Phone, Sparkles } from 'lucide-react'
import { Card, CardContent } from './ui/card'

export default function MemorableEvents() {
  return (
    <div>
         {/* Memorable Events Section */}
      <section className="py-20 bg-gradient-to-br from-spa-pink-50 via-spa-beige-50 to-spa-gold-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
              Memorable Events Celebrated @ Style & Beyouti Zone Spa
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-3xl mx-auto">
              Creating unforgettable moments and spending precious time together through our specialized event spa services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Birthdays */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/citing.jpeg"
                  alt="Birthday spa celebrations"
                  fill
                  quality={95}
                  priority
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">
                  🎂
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair font-bold text-2xl text-spa-white mb-1">
                    Birthdays
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Celebrate another year of life with a special birthday spa experience. Perfect for milestone birthdays or intimate celebrations with friends and family.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-spa-pink-100 dark:bg-spa-pink-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Special Occasion
                  </span>
                  <span className="px-3 py-1 bg-spa-gold-100 dark:bg-spa-gold-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    Group Packages
                  </span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'd like to plan a birthday spa celebration. Please tell me about your birthday packages and availability."
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Plan Birthday Spa
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Bridal Showers */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/dayspa2.jpeg"
                  alt="Bridal shower spa treatments"
                  fill
                  quality={95}
                  priority
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">
                  👰‍♀️
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair font-bold text-2xl text-spa-white mb-1">
                    Bridal Showers
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Pamper the bride-to-be and her closest friends with luxurious spa treatments. Create beautiful pre-wedding memories together.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-spa-pink-100 dark:bg-spa-pink-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Bridal Party
                  </span>
                  <span className="px-3 py-1 bg-spa-gold-100 dark:bg-spa-gold-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    Pre-Wedding
                  </span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'm planning a bridal shower and would love to include spa treatments. Can you help me create the perfect package?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Plan Bridal Shower
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Baby Showers */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/dayspa3.jpeg"
                  alt="Baby shower spa celebrations"
                  fill
                  quality={95}
                  priority
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">
                  🍼
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair font-bold text-2xl text-spa-white mb-1">
                    Baby Showers
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Celebrate the upcoming arrival with gentle, relaxing spa treatments perfect for expecting mothers and their loved ones.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-spa-pink-100 dark:bg-spa-pink-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Expecting Mothers
                  </span>
                  <span className="px-3 py-1 bg-spa-gold-100 dark:bg-spa-gold-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    Gentle Treatments
                  </span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'm organizing a baby shower and would like to include spa treatments. What packages do you recommend for expecting mothers?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Plan Baby Shower
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Girls Pamper Day */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/dayspa6.jpeg"
                  alt="Girls pamper day spa session"
                  fill
                  quality={95}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">
                  👯‍♀️
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair font-bold text-2xl text-spa-white mb-1">
                    Girls Pamper Day
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Gather your girlfriends for the ultimate pamper day experience. Bond, laugh, and relax together with customized spa treatments.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-spa-pink-100 dark:bg-spa-pink-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Friendship
                  </span>
                  <span className="px-3 py-1 bg-spa-gold-100 dark:bg-spa-gold-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    Group Fun
                  </span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I want to organize a girls pamper day for my friends. How many people can you accommodate and what packages do you offer?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Plan Pamper Day
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Precious Moments Together */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/hero-main.jpeg"
                  alt="Spending precious moments together"
                  fill
                  quality={95}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">
                  💕
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair font-bold text-2xl text-spa-white mb-1">
                    Precious Moments
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Create meaningful connections and spend quality time together. Perfect for mother-daughter bonding, couples, or close friends.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-spa-pink-100 dark:bg-spa-pink-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Quality Time
                  </span>
                  <span className="px-3 py-1 bg-spa-gold-100 dark:bg-spa-gold-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    Bonding
                  </span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'd like to book a special spa session to spend precious moments together with my loved one. What do you recommend?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book Special Moments
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Chill and Relax */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/pool.jpeg"
                  alt="Just chill and relax spa session"
                  fill
                  quality={95}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">
                  🧘‍♀️
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair font-bold text-2xl text-spa-white mb-1">
                    Chill & Relax
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Sometimes you don't need a special reason - just find a moment to chill and relax. Perfect for stress relief and self-care.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-spa-pink-100 dark:bg-spa-pink-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Self-Care
                  </span>
                  <span className="px-3 py-1 bg-spa-gold-100 dark:bg-spa-gold-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    Stress Relief
                  </span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I just want to chill and relax with a spa session. What treatments do you recommend for ultimate relaxation?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book Relaxation
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <h3 className="font-playfair font-bold text-3xl text-spa-black dark:text-spa-white mb-4">
                Ready to Create Memorable Moments?
              </h3>
              <p className="font-lora text-lg text-spa-beige-700 dark:text-spa-beige-300 mb-8 max-w-2xl mx-auto">
                Let us help you plan the perfect spa event. Whether it's a special celebration or just because, 
                we'll create an unforgettable experience for you and your loved ones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="tel:0617747378" className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call to Plan Your Event</span>
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Link href="https://wa.me/27617747378?text=Hi! I'd like to plan a memorable spa event. Can you help me create a custom package for my special occasion?" target="_blank" className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Plan Custom Event</span>
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
