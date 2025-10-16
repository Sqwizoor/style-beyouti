import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Star, MessageCircle } from 'lucide-react'

export function DealsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-spa-beige-50 via-spa-pink-50 to-spa-gold-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-lg mb-6">
            <span className="w-8 h-8 text-spa-white">✨</span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            Exclusive Deals & Packages
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-3xl mx-auto">
            Discover our current specials designed to give you exceptional value while experiencing our premium spa treatments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Garden Massages - NEW */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-beige-50 to-spa-gold-50 dark:from-slate-700 dark:to-slate-800">
              <div className="relative w-full h-full p-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/outdoor.jpeg"
                    alt="Garden Massages"
                    fill
                    quality={100}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* NEW Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[70px]">
                <div className="text-center">
                  <div className="text-sm font-bold whitespace-nowrap">R550</div>
                  <div className="text-xs line-through opacity-80 whitespace-nowrap">R700</div>
                </div>
              </div>
              
              {/* NEW Badge Icon */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-spa-pink-600 to-spa-gold-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                NEW! 💆‍♀️
              </div>

              {/* Garden Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                🏡
              </div>
            </div>
            
            <CardContent className="p-6">
              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-spa-beige-600 dark:text-spa-beige-400">(5.0)</span>
              </div>

              <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                Garden Massages 🏡
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                New improvements added 👌 Perfect chillout place right @ your doorstep 🏘️
              </p>

              {/* Features List */}
              <div className="mb-4">
                <ul className="space-y-2 text-sm text-spa-beige-600 dark:text-spa-beige-400">
                  <li className="flex items-start">
                    <span className="mr-2">🐦🦜</span>
                    <span>Birds Chirping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🐇🐰</span>
                    <span>Rabbits running 🐾</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💞</span>
                    <span>Fresh air with a cool breeze</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💏</span>
                    <span>Nothing more relaxing than to be massaged in the garden</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💕😍</span>
                    <span>Adds to the Romance 💯</span>
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Save R150
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Garden Setting
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Romantic Atmosphere
                </span>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'm interested in the Garden Massage package (R550, was R700). Please let me know about availability."
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Garden Massage
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Add more package cards here... */}
        </div>

        {/* Call to Action for Exclusive Deals */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair font-bold text-3xl text-spa-black dark:text-spa-white mb-4">
              Ready to Take Advantage of These Exclusive Deals?
            </h3>
            <p className="font-lora text-lg text-spa-beige-700 dark:text-spa-beige-300 mb-8 max-w-2xl mx-auto">
              These special packages are designed to give you exceptional value while experiencing our premium spa treatments. 
              Book now to secure your preferred time and package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="tel:0617747378" className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Call to Book Your Deal</span>
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
              >
                <Link href="https://wa.me/27617747378?text=Hi! I'd like to know more about your exclusive deals and packages. Which one would you recommend for me?" target="_blank" className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Ask About Deals</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}