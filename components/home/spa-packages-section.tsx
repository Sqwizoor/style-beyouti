import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Star, Clock, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const packages = [
  {
    id: 'garden-massage',
    title: 'Garden Massages',
    image: '/outdoor.jpeg',
    price: 550,
    oldPrice: 700,
    duration: '90 minutes',
    isNew: true,
    rating: 5.0,
    description: 'New improvements added 👌 Perfect chillout place right @ your doorstep 🏘️',
    features: [
      { icon: '🐦🦜', text: 'Birds Chirping' },
      { icon: '🐇🐰', text: 'Rabbits running 🐾' },
      { icon: '💞', text: 'Fresh air with a cool breeze' },
      { icon: '💏', text: 'Nothing more relaxing than to be massaged in the garden' },
      { icon: '💕😍', text: 'Adds to the Romance 💯' }
    ],
    tags: ['Save R150', 'Garden Setting', 'Romantic Atmosphere']
  },
  {
    id: 'five-treatments',
    title: '2 Hour 5 Treatments Package',
    image: '/2hour-treatments.png',
    price: 650,
    oldPrice: 950,
    duration: '2 Hours',
    rating: 5.0,
    description: 'Memorable Events Celebrated @ Style and BeYouTi Zone',
    features: [
      'Hotstones / Swedish Full Body Massage: 60-mins',
      'Indian head massage: 10-mins',
      'Back Exfoliation: 10mins',
      'Express Pedicure: 20-mins',
      'Leg Glow Exfoliation: 10mins',
      'Nail Polish painted on toes for the Lady (optional included) 🌹'
    ],
    tags: ['Save R300', '5 Treatments', '2 Hours']
  },
  {
    id: 'couples-deluxe',
    title: 'Couples Deluxe Love Package',
    image: '/couples-love.jpeg',
    price: 1950,
    oldPrice: 2500,
    rating: 5.0,
    isDeluxe: true,
    description: 'Personal, Private, Affordable and very Relaxing Environment with an Amazing Service @ your doorstep 💯👌',
    features: [
      { icon: '✨', text: 'Personal & Private environment' },
      { icon: '💆‍♀️', text: 'Premium deluxe treatments for couples' },
      { icon: '🏠', text: 'Amazing service @ your doorstep' },
      { icon: '💕', text: 'Perfect for romantic moments together' },
      { icon: '🌟', text: 'Very relaxing & affordable luxury' }
    ],
    tags: ['Save R550', 'Deluxe Package', 'For Couples']
  }
]

export function SpaPackagesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-spa-beige-50 via-spa-pink-50 to-spa-gold-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            Featured Spa Packages
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-3xl mx-auto">
            Discover our most popular spa packages designed for ultimate relaxation and rejuvenation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-spa-beige-50 to-spa-pink-50 dark:from-slate-700 dark:to-slate-800">
                <div className="relative w-full h-full p-1">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      quality={100}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[90px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R{pkg.price.toLocaleString()}</div>
                    {pkg.oldPrice && (
                      <div className="text-xs line-through opacity-80 whitespace-nowrap">
                        R{pkg.oldPrice.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Special Badge */}
                {(pkg.isNew || pkg.isDeluxe) && (
                  <div className={`absolute top-4 left-4 ${
                    pkg.isDeluxe 
                      ? 'bg-gradient-to-r from-spa-pink-600 to-spa-gold-600'
                      : 'bg-gradient-to-r from-spa-pink-600 to-spa-gold-600'
                  } text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg ${pkg.isNew ? 'animate-pulse' : ''}`}>
                    {pkg.isDeluxe ? '💎 DELUXE' : 'NEW! 💆‍♀️'}
                  </div>
                )}

                {/* Duration Badge */}
                {pkg.duration && (
                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{pkg.duration}</span>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${i < pkg.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-spa-beige-600 dark:text-spa-beige-400">({pkg.rating})</span>
                </div>

                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                  {pkg.title}
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Features */}
                {Array.isArray(pkg.features) && (
                  <div className="mb-4">
                    <ul className="space-y-2 text-sm text-spa-beige-600 dark:text-spa-beige-400">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          {typeof feature === 'object' ? (
                            <>
                              <span className="mr-2">{feature.icon}</span>
                              <span>{feature.text}</span>
                            </>
                          ) : (
                            <span>• {feature}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href={`https://wa.me/27617747378?text=Hi! I'm interested in the ${pkg.title} (R${pkg.price.toLocaleString()}, was R${pkg.oldPrice.toLocaleString()}). When is your next availability?`}
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book {pkg.title}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}