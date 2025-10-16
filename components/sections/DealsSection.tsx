import { Sparkles, MessageCircle, Star, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import DealsGrid from '@/components/deals-grid'

export default function DealsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-spa-beige-50 via-spa-pink-50 to-spa-gold-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-lg mb-6">
            <Sparkles className="w-8 h-8 text-spa-white" />
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            Exclusive Deals & Packages
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-3xl mx-auto">
            Discover our current specials designed to give you exceptional value while experiencing our premium spa treatments
          </p>
        </div>

        <DealsGrid />

        {/* All Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* 2 Hour 5 Treatments Package */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-beige-50 to-spa-pink-50 dark:from-slate-700 dark:to-slate-800">
              <div className="relative w-full h-full p-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/2hour-treatments.png"
                    alt="2 Hour 5 Treatments Package"
                    fill
                    quality={100}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                <div className="text-center">
                  <div className="text-sm font-bold whitespace-nowrap">R650</div>
                  <div className="text-xs line-through opacity-80 whitespace-nowrap">R950</div>
                </div>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">2 Hours</span>
              </div>

              {/* Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                🧖‍♀️
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
                2 Hour 5 Treatments Package
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                Memorable Events Celebrated @ Style and BeYouTi Zone
              </p>

              {/* Highlight */}
              <div className="mb-4 bg-spa-pink-50 dark:bg-spa-pink-900/20 rounded-lg p-3">
                <p className="font-poppins text-spa-pink-700 dark:text-spa-pink-300 text-sm font-medium text-center">
                  Making Memories 🧖‍♀️🧖‍♂️👣👭👩‍❤️‍👨<br/>
                  Spending Precious Moments together
                </p>
              </div>

              {/* Treatments Included */}
              <div className="mb-4">
                <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                  The Pamper Package Includes: 5 Treatments
                </h4>
                <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                  <li>• Hotstones / Swedish Full Body Massage: 60-mins</li>
                  <li>• Indian head massage: 10-mins</li>
                  <li>• Back Exfoliation: 10mins</li>
                  <li>• Express Pedicure: 20-mins</li>
                  <li>• Leg Glow Exfoliation: 10mins</li>
                  <li>• Nail Polish painted on toes for the Lady (optional included) 🌹</li>
                </ul>
                <p className="text-sm text-spa-beige-700 dark:text-spa-beige-300 mt-2 font-medium">
                  Treatment time: 2 hours
                </p>
              </div>

              {/* Pricing Info */}
              <div className="mb-4 bg-spa-gold-50 dark:bg-spa-gold-900/20 rounded-lg p-3">
                <p className="text-sm text-spa-beige-700 dark:text-spa-beige-300 font-medium text-center">
                  <span className="line-through text-spa-beige-500">Was R950</span> → <span className="text-spa-pink-600 dark:text-spa-pink-400 font-bold">Now R650</span>
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Save R300
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  5 Treatments
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  2 Hours
                </span>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'm interested in the 2 Hour 5 Treatments Package (R650, was R950). This includes 5 treatments over 2 hours. When is your next availability?"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book 5 Treatments Package
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Couples Deluxe Love Package */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-gold-50 to-spa-pink-50 dark:from-slate-700 dark:to-slate-800">
              <div className="relative w-full h-full p-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/couples-love.jpeg"
                    alt="Couples Deluxe Love Package"
                    fill
                    quality={100}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[90px]">
                <div className="text-center">
                  <div className="text-sm font-bold whitespace-nowrap">R1,950</div>
                  <div className="text-xs line-through opacity-80 whitespace-nowrap">R2,500</div>
                </div>
              </div>
              
              {/* DELUXE Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-spa-pink-600 to-spa-gold-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                💎 DELUXE
              </div>

              {/* Love Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                💕
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
                Couples Deluxe Love Package 💕
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                Personal, Private, Affordable and very Relaxing Environment with an Amazing Service @ your doorstep 💯👌
              </p>

              {/* Exclusive Highlight */}
              <div className="mb-4 bg-gradient-to-r from-spa-pink-50 to-spa-gold-50 dark:from-spa-pink-900/20 dark:to-spa-gold-900/20 rounded-lg p-4 border-2 border-spa-gold-300 dark:border-spa-gold-700">
                <p className="font-poppins text-spa-gold-700 dark:text-spa-gold-300 text-center font-bold text-base mb-1">
                  💎 Exclusive Deluxe Experience 💎
                </p>
                <p className="font-poppins text-spa-beige-700 dark:text-spa-beige-300 text-sm text-center">
                  Only Style and Beyouti Zone Day Spa
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                  What Makes This Package Special:
                </h4>
                <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✨</span>
                    <span>Personal & Private environment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💆‍♀️</span>
                    <span>Premium deluxe treatments for couples</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🏠</span>
                    <span>Amazing service @ your doorstep</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💕</span>
                    <span>Perfect for romantic moments together</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🌟</span>
                    <span>Very relaxing & affordable luxury</span>
                  </li>
                </ul>
              </div>

              {/* Pricing Info */}
              <div className="mb-4 bg-spa-pink-50 dark:bg-spa-pink-900/20 rounded-lg p-3">
                <p className="text-sm text-spa-beige-700 dark:text-spa-beige-300 font-medium text-center">
                  <span className="line-through text-spa-beige-500">Was R2,500</span> → <span className="text-spa-pink-600 dark:text-spa-pink-400 font-bold">Now R1,950</span>
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Save R550
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Couples
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Deluxe
                </span>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'm interested in the Couples Deluxe Love Package (R1,950, was R2,500). This is an exclusive deluxe experience for couples. When is your next availability?"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Deluxe Love Package
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Come Relax - Call to Action */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-beige-50 to-spa-pink-50 dark:from-slate-700 dark:to-slate-800">
              <div className="relative w-full h-full p-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/ximg3.jpeg"
                    alt="Facials at Style and Beyouti Spa"
                    fill
                    quality={100}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* BOOK NOW Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg animate-pulse">
                <div className="text-center">
                  <div className="text-xs whitespace-nowrap">📲 BOOK NOW</div>
                </div>
              </div>
              
              {/* Relax Badge */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                ✨ RELAX
              </div>

              {/* Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                🧖‍♀️
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
                Come Relax at Style & Beyouti Spa
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed text-lg font-medium">
                Come Relax your Mind 🖼️🎨🪷 Body 🧖🏻‍♀️🧖🏻‍♂️ Tummy 🍱🍾🥂
              </p>

              {/* Urgent Call to Action */}
              <div className="mb-4 bg-gradient-to-r from-spa-pink-50 via-spa-gold-50 to-spa-beige-50 dark:from-spa-pink-900/20 dark:via-spa-gold-900/20 dark:to-spa-beige-900/20 rounded-lg p-4 border-2 border-spa-pink-300 dark:border-spa-pink-700">
                <p className="font-poppins text-spa-pink-700 dark:text-spa-pink-300 text-center font-bold text-xl mb-2">
                  Don't Delay! 📲
                </p>
                <p className="font-poppins text-spa-beige-700 dark:text-spa-beige-300 text-center text-base">
                  Book your appointment today
                </p>
              </div>

              {/* What We Relax */}
              <div className="mb-4">
                <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2 text-center">
                  Complete Relaxation Experience:
                </h4>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-spa-beige-50 dark:bg-spa-beige-900/10 rounded-lg p-3">
                    <div className="text-2xl mb-1">🖼️🎨</div>
                    <p className="text-xs text-spa-beige-600 dark:text-spa-beige-400 font-medium">Mind</p>
                  </div>
                  <div className="bg-spa-pink-50 dark:bg-spa-pink-900/10 rounded-lg p-3">
                    <div className="text-2xl mb-1">🧖‍♀️🧖‍♂️</div>
                    <p className="text-xs text-spa-beige-600 dark:text-spa-beige-400 font-medium">Body</p>
                  </div>
                  <div className="bg-spa-gold-50 dark:bg-spa-gold-900/10 rounded-lg p-3">
                    <div className="text-2xl mb-1">🍱🥂</div>
                    <p className="text-xs text-spa-beige-600 dark:text-spa-beige-400 font-medium">Tummy</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mb-4 bg-spa-gold-50 dark:bg-spa-gold-900/20 rounded-lg p-3">
                <p className="text-sm text-spa-beige-700 dark:text-spa-beige-300 font-bold text-center">
                  📲 Call/WhatsApp: 061 774 7378
                </p>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'd like to book a relaxing spa session. What services do you offer?"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Relaxation Session
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Massage with Facial - Revive and Instant Glow Package */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-gold-50 to-spa-pink-50 dark:from-slate-700 dark:to-slate-800">
              <div className="relative w-full h-full p-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/massage-facial.jpeg"
                    alt="Massage with Facial - Revive and Instant Glow Package"
                    fill
                    quality={100}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                <div className="text-center">
                  <div className="text-sm font-bold whitespace-nowrap">R450</div>
                  <div className="text-xs line-through opacity-80 whitespace-nowrap">R600</div>
                </div>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">90 mins</span>
              </div>

              {/* Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                ✨
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
                Massage with Facial - Revive and Instant Glow Package
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                Revive your skin and body with our premium massage and facial treatment
              </p>

              {/* Treatments Included */}
              <div className="mb-4">
                <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                  Package Includes:
                </h4>
                <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                  <li>• Full Body Massage: 60-mins</li>
                  <li>• Revive Facial Treatment: 30-mins</li>
                  <li>• Instant Glow Treatment</li>
                </ul>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Save R150
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Revive
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Glow
                </span>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'm interested in the Massage with Facial - Revive and Instant Glow Package (R450, was R600). This includes massage and facial treatment. When is your next availability?"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Revive Package
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Treat Yourself Package */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-pink-50 to-spa-gold-50 dark:from-slate-700 dark:to-slate-800">
              <div className="relative w-full h-full p-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/treat-yourself.jpeg"
                    alt="Treat Yourself Package"
                    fill
                    quality={100}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                <div className="text-center">
                  <div className="text-sm font-bold whitespace-nowrap">R350</div>
                  <div className="text-xs line-through opacity-80 whitespace-nowrap">R500</div>
                </div>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">60 mins</span>
              </div>

              {/* Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                💆‍♀️
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
                Treat Yourself Package
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                You deserve to be pampered! Treat yourself to our signature relaxation package
              </p>

              {/* Treatments Included */}
              <div className="mb-4">
                <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                  Package Includes:
                </h4>
                <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                  <li>• Swedish Massage: 45-mins</li>
                  <li>• Express Facial: 15-mins</li>
                  <li>• Aromatherapy</li>
                </ul>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Save R150
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Pamper
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Relax
                </span>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'm interested in the Treat Yourself Package (R350, was R500). This includes massage and facial. When is your next availability?"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Treat Yourself
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Kids Pamper */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-pink-50 to-spa-gold-50 dark:from-slate-700 dark:to-slate-800">
              <div className="relative w-full h-full p-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/kids-pamper.jpeg"
                    alt="Kids Pamper"
                    fill
                    quality={100}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                <div className="text-center">
                  <div className="text-sm font-bold whitespace-nowrap">R200</div>
                  <div className="text-xs line-through opacity-80 whitespace-nowrap">R300</div>
                </div>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">30 mins</span>
              </div>

              {/* Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                👶
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
                Kids Pamper
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                Special pampering treatments designed just for kids! Safe, gentle, and fun
              </p>

              {/* Treatments Included */}
              <div className="mb-4">
                <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                  Package Includes:
                </h4>
                <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                  <li>• Gentle Massage: 20-mins</li>
                  <li>• Mini Facial: 10-mins</li>
                  <li>• Safe, kid-friendly products</li>
                </ul>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Save R100
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Kids
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Safe
                </span>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'm interested in the Kids Pamper package (R200, was R300). This is for my child. When is your next availability?"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Kids Pamper
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Couples Combo for 2 people */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-gold-50 to-spa-pink-50 dark:from-slate-700 dark:to-slate-800">
              <div className="relative w-full h-full p-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/couples-combo.jpeg"
                    alt="Couples Combo for 2 people"
                    fill
                    quality={100}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                <div className="text-center">
                  <div className="text-sm font-bold whitespace-nowrap">R800</div>
                  <div className="text-xs line-through opacity-80 whitespace-nowrap">R1000</div>
                </div>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">2 Hours</span>
              </div>

              {/* Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                💑
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
                Couples Combo for 2 people
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                Perfect for couples who want to relax together. Side-by-side treatments
              </p>

              {/* Treatments Included */}
              <div className="mb-4">
                <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                  Package Includes (for 2 people):
                </h4>
                <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                  <li>• Couples Massage: 60-mins each</li>
                  <li>• Side-by-side treatments</li>
                  <li>• Romantic atmosphere</li>
                </ul>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Save R200
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Couples
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Together
                </span>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'm interested in the Couples Combo for 2 people (R800, was R1000). This is for my partner and me. When is your next availability?"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Couples Combo
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Aromatherapy Pamper Package for 2 */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-beige-50 to-spa-pink-50 dark:from-slate-700 dark:to-slate-800">
              <div className="relative w-full h-full p-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/aromatherapy.jpeg"
                    alt="Aromatherapy Pamper Package for 2"
                    fill
                    quality={100}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                <div className="text-center">
                  <div className="text-sm font-bold whitespace-nowrap">R700</div>
                  <div className="text-xs line-through opacity-80 whitespace-nowrap">R900</div>
                </div>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">90 mins</span>
              </div>

              {/* Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                🌸
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
                Aromatherapy Pamper Package for 2
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                Indulge in the healing power of aromatherapy with your loved one
              </p>

              {/* Treatments Included */}
              <div className="mb-4">
                <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                  Package Includes (for 2 people):
                </h4>
                <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                  <li>• Aromatherapy Massage: 60-mins each</li>
                  <li>• Essential Oil Selection</li>
                  <li>• Relaxing atmosphere</li>
                </ul>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Save R200
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Aromatherapy
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Healing
                </span>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'm interested in the Aromatherapy Pamper Package for 2 (R700, was R900). This includes aromatherapy massage for couples. When is your next availability?"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Aromatherapy Package
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Massage Treatments 60mins */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-beige-50 to-spa-pink-50 dark:from-slate-700 dark:to-slate-800">
              <div className="relative w-full h-full p-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/massage-60mins.jpeg"
                    alt="Massage Treatments 60mins"
                    fill
                    quality={100}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                <div className="text-center">
                  <div className="text-sm font-bold whitespace-nowrap">R300</div>
                  <div className="text-xs line-through opacity-80 whitespace-nowrap">R400</div>
                </div>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">60 mins</span>
              </div>

              {/* Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                💆‍♀️
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
                Massage Treatments 60mins
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                Professional massage therapy to relieve stress and tension
              </p>

              {/* Treatments Included */}
              <div className="mb-4">
                <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                  Treatment Options:
                </h4>
                <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                  <li>• Swedish Massage</li>
                  <li>• Deep Tissue Massage</li>
                  <li>• Hot Stone Massage</li>
                  <li>• Aromatherapy Massage</li>
                </ul>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Save R100
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Professional
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Relaxing
                </span>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'm interested in the Massage Treatments 60mins (R300, was R400). What types of massage do you offer?"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Massage
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Just for you @ R500pp Only */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-pink-50 to-spa-gold-50 dark:from-slate-700 dark:to-slate-800">
              <div className="relative w-full h-full p-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/just-for-you.jpeg"
                    alt="Just for you @ R500pp Only"
                    fill
                    quality={100}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                <div className="text-center">
                  <div className="text-sm font-bold whitespace-nowrap">R500</div>
                  <div className="text-xs line-through opacity-80 whitespace-nowrap">R700</div>
                </div>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">75 mins</span>
              </div>

              {/* Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                💖
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
                Just for you @ R500pp Only
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                A special package designed just for you! Personalized treatments at an amazing price
              </p>

              {/* Treatments Included */}
              <div className="mb-4">
                <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                  Package Includes:
                </h4>
                <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                  <li>• Full Body Massage: 45-mins</li>
                  <li>• Express Facial: 30-mins</li>
                  <li>• Personalized treatment</li>
                </ul>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Save R200
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Special
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Personalized
                </span>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'm interested in the Just for you package (R500pp, was R700). This is a special personalized package. When is your next availability?"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Special Package
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Amazing Instant Glow Facial */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-gold-50 to-spa-pink-50 dark:from-slate-700 dark:to-slate-800">
              <div className="relative w-full h-full p-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/instant-glow-facial.jpeg"
                    alt="Amazing Instant Glow Facial"
                    fill
                    quality={100}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                <div className="text-center">
                  <div className="text-sm font-bold whitespace-nowrap">R250</div>
                  <div className="text-xs line-through opacity-80 whitespace-nowrap">R350</div>
                </div>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">45 mins</span>
              </div>

              {/* Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                ✨
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
                Amazing Instant Glow Facial
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                Get that instant glow! Professional facial treatment for radiant skin
              </p>

              {/* Treatments Included */}
              <div className="mb-4">
                <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                  Treatment Includes:
                </h4>
                <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                  <li>• Deep Cleansing</li>
                  <li>• Exfoliation</li>
                  <li>• Hydrating Mask</li>
                  <li>• Instant Glow Treatment</li>
                </ul>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Save R100
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Instant Glow
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Radiant
                </span>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'm interested in the Amazing Instant Glow Facial (R250, was R350). This gives instant glow results. When is your next availability?"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Glow Facial
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* 90mins Hotstones Garden Massage */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-beige-50 to-spa-pink-50 dark:from-slate-700 dark:to-slate-800">
              <div className="relative w-full h-full p-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/hotstones-garden.jpeg"
                    alt="90mins Hotstones Garden Massage"
                    fill
                    quality={100}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                <div className="text-center">
                  <div className="text-sm font-bold whitespace-nowrap">R400</div>
                  <div className="text-xs line-through opacity-80 whitespace-nowrap">R550</div>
                </div>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">90 mins</span>
              </div>

              {/* Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                🔥
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
                90mins Hotstones Garden Massage
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                Experience the healing power of hot stones in a peaceful garden setting
              </p>

              {/* Treatments Included */}
              <div className="mb-4">
                <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                  Treatment Includes:
                </h4>
                <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                  <li>• Hot Stone Massage: 90-mins</li>
                  <li>• Garden Setting</li>
                  <li>• Deep Muscle Relief</li>
                  <li>• Aromatherapy</li>
                </ul>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Save R150
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Hot Stones
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Garden
                </span>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'm interested in the 90mins Hotstones Garden Massage (R400, was R550). This is a hot stone massage in a garden setting. When is your next availability?"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Hot Stones Massage
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Amazing 5 Treatments at Spa House */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-pink-50 to-spa-gold-50 dark:from-slate-700 dark:to-slate-800">
              <div className="relative w-full h-full p-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/5-treatments-spa-house.jpeg"
                    alt="Amazing 5 Treatments at Spa House"
                    fill
                    quality={100}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                <div className="text-center">
                  <div className="text-sm font-bold whitespace-nowrap">R600</div>
                  <div className="text-xs line-through opacity-80 whitespace-nowrap">R800</div>
                </div>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">2.5 Hours</span>
              </div>

              {/* Icon */}
              <div className="absolute bottom-4 left-4 text-3xl z-10">
                🏠
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
                Amazing 5 Treatments at Spa House
              </h3>
              
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                Experience our signature 5-treatment package in the comfort of your own home
              </p>

              {/* Treatments Included */}
              <div className="mb-4">
                <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                  Package Includes:
                </h4>
                <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                  <li>• Full Body Massage: 60-mins</li>
                  <li>• Facial Treatment: 30-mins</li>
                  <li>• Foot Massage: 20-mins</li>
                  <li>• Head Massage: 15-mins</li>
                  <li>• Aromatherapy: 15-mins</li>
                </ul>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  Save R200
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  5 Treatments
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                  At Home
                </span>
              </div>

              {/* Booking Button */}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link 
                  href="https://wa.me/27617747378?text=Hi! I'm interested in the Amazing 5 Treatments at Spa House (R600, was R800). This includes 5 treatments at home. When is your next availability?"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book 5 Treatments
                </Link>
              </Button>
            </CardContent>
          </Card>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="tel:0617747378" className="flex items-center space-x-2">
                  <span>Call Now: 061 774 7378</span>
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
