import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle } from 'lucide-react'

export function FoodDrinksSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-spa-white via-spa-beige-50 to-spa-pink-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-lg mb-6">
            <span className="w-8 h-8 text-spa-white">✨</span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            Food, Drinks & Activities
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-3xl mx-auto">
            Complete your spa experience with our delicious refreshments and fun activities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Snack Basket */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/underfood.jpeg"
                alt="Snack Basket with Chips and Drink"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[85px]">
                <div className="text-center">
                  <div className="text-sm font-bold whitespace-nowrap">R80</div>
                  <div className="text-xs whitespace-nowrap">per person</div>
                </div>
              </div>

              {/* Snack Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                🍟
              </div>
            </div>
            
            <CardContent className="p-6">
              <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                Snack Basket
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                Perfect light snack to enjoy during your spa session. Includes chips 🍟 for one 🍱 with a refreshing soft drink 🥤
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Light Snack
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Includes Drink
                </span>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'd like to add a Snack Basket (R80 per person) to my spa booking. Please let me know availability."
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Add to Booking
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Add more food/drink cards here... */}
        </div>
      </div>
    </section>
  )
}