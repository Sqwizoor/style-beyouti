'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function FoodAndDrinksSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-spa-white via-spa-beige-50 to-spa-pink-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            Food, Drinks & Activities
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-3xl mx-auto">
            Enhance your spa experience with our delicious refreshments and engaging activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Snack Basket */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/food2.jpeg"
                alt="Snack Basket with Assorted Treats"
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
                🧺
              </div>
            </div>
            
            <CardContent className="p-6">
              <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                Snack Basket
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                Enjoy a variety of sweet and savory snacks during your spa experience.
              </p>

              {/* Snack Options */}
              <div className="mb-4">
                <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                  Included:
                </h4>
                <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                  <li>• Chips 🥔</li>
                  <li>• Chocolates 🍫</li>
                  <li>• Sweet & Savory Mix 🍿</li>
                  <li>• Juice/Soft Drink 🥤</li>
                </ul>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Assorted Snacks
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

          {/* Meal Options */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/cool-food2.jpeg"
                alt="Meal Options - Chicken Wrap or Quarter Chicken"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[85px]">
                <div className="text-center">
                  <div className="text-sm font-bold whitespace-nowrap">R150</div>
                  <div className="text-xs whitespace-nowrap">per person</div>
                </div>
              </div>

              {/* Meal Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                🍗
              </div>
            </div>
            
            <CardContent className="p-6">
              <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                Meal Options
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                Choose from our delicious meal options to satisfy your appetite during your spa experience.
              </p>

              {/* Meal Options */}
              <div className="mb-4">
                <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                  Choose One:
                </h4>
                <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                  <li>• Chicken Wrap served with Chips 🍟 plus soft drink 🧋</li>
                  <li>• Quarter Chicken with Chips and a Roll</li>
                </ul>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Full Meal
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  2 Options
                </span>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'd like to add a Meal Option (R150 per person) to my spa booking. Please let me know the meal choices available."
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order Meal
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Group Meals */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/new-kids.jpeg"
                alt="Group Meals - Chicken Biryani and Wraps"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* Group Meals Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                <div className="text-center">
                  <div className="text-xs whitespace-nowrap">GROUP</div>
                  <div className="text-sm font-bold whitespace-nowrap">MEALS</div>
                </div>
              </div>

              {/* Group Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                👭
              </div>
            </div>
            
            <CardContent className="p-6">
              <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                Group Meals
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                Lunch will be served in Style with Fancy Decor 🍽️ Food in food warmers and will be displayed with Glassware, Crockery, Cutlery and Table Cloths. Stylishly decorated and set up to enjoy the well prepared meal 👌 with a Soft Drink/Juice to quench the thirst 🍹
              </p>

              {/* Group Meals Highlight */}
              <div className="mb-4 bg-spa-gold-50 dark:bg-spa-gold-900/20 rounded-lg p-3">
                <p className="font-poppins text-spa-gold-700 dark:text-spa-gold-300 text-sm font-medium">
                  💡 The Biryani is recommended for Groups as it is Cost effective and are generous portions - ideal meal for groups 👭👨‍👩‍👦‍👦💑👌
                </p>
              </div>

              {/* Menu Options */}
              <div className="mb-4">
                <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                  Menu Options:
                </h4>
                <div className="space-y-3">
                  <div className="bg-spa-beige-50 dark:bg-spa-beige-900/10 rounded-lg p-3">
                    <p className="font-poppins font-semibold text-spa-black dark:text-spa-white text-sm mb-1">
                      🍛 Chicken Biryani (Recommended for Groups)
                    </p>
                    <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1 ml-4">
                      <li>• Cucumber Sourmilk Salad</li>
                      <li>• Plus Carrot Salad</li>
                      <li>• Pickles</li>
                    </ul>
                  </div>
                  
                  <div className="bg-spa-beige-50 dark:bg-spa-beige-900/10 rounded-lg p-3">
                    <p className="font-poppins font-semibold text-spa-black dark:text-spa-white text-sm">
                      🌯 Or Chicken Wrap
                    </p>
                    <p className="text-sm text-spa-beige-600 dark:text-spa-beige-400 ml-4">
                      Served with Chips 🍟 and a soft drink
                    </p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Stylish Setup
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Generous Portions
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Cost Effective
                </span>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'd like to order Group Meals for my spa booking. I'm interested in the Chicken Biryani or Chicken Wrap options with stylish setup. Please provide pricing and availability."
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order Group Meals
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action for Food & Activities */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair font-bold text-3xl text-spa-black dark:text-spa-white mb-4">
              Complete Your Spa Experience
            </h3>
            <p className="font-lora text-lg text-spa-beige-700 dark:text-spa-beige-300 mb-8 max-w-2xl mx-auto">
              Enhance your relaxation with delicious food, refreshing drinks, creative activities, and special occasion setups. 
              Let us create the perfect atmosphere for your spa day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="tel:0617747378" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call for Custom Package</span>
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
              >
                <Link href="https://wa.me/27617747378?text=Hi! I'd like to create a custom spa package with food, drinks, and activities. Can you help me plan the perfect experience?" target="_blank" className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Plan Custom Experience</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}