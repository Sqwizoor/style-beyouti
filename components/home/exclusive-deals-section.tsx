import { Sparkles, MessageCircle, Phone, Star, Clock } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { SpaService } from '@/types/spa'

const EXCLUSIVE_DEALS = [
  {
    id: 1,
    title: 'Garden Massages',
    image: '/outdoor.jpeg',
    currentPrice: 550,
    originalPrice: 700,
    rating: 5.0,
    description: 'New improvements added 👌 Perfect chillout place right @ your doorstep 🏘️',
    features: [
      '🐦🦜 Birds Chirping',
      '🐇🐰 Rabbits running 🐾',
      '💞 Fresh air with a cool breeze',
      '💏 Nothing more relaxing than to be massaged in the garden',
      '💕😍 Adds to the Romance 💯'
    ],
    tags: ['Save R150', 'Garden Setting', 'Romantic Atmosphere'],
    whatsappText: "Hi! I'm interested in the Garden Massage package (R550, was R700). Please let me know about availability."
  },
  // Add other deals here...
]

export default function ExclusiveDealsSection() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {EXCLUSIVE_DEALS.map((deal) => (
            <DealCard key={deal.id} {...deal} />
          ))}
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
                  <Phone className="w-5 h-5" />
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

const DealCard = ({
  title,
  image,
  currentPrice,
  originalPrice,
  rating,
  description,
  features,
  tags,
  whatsappText
}: SpaService) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
      <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-beige-50 to-spa-gold-50 dark:from-slate-700 dark:to-slate-800">
        <div className="relative w-full h-full p-1">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              quality={100}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[70px]">
          <div className="text-center">
            <div className="text-sm font-bold whitespace-nowrap">R{currentPrice}</div>
            <div className="text-xs line-through opacity-80 whitespace-nowrap">R{originalPrice}</div>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-spa-beige-600 dark:text-spa-beige-400">({rating})</span>
        </div>

        <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
          {title}
        </h3>
        
        <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        <div className="mb-4">
          <ul className="space-y-2 text-sm text-spa-beige-600 dark:text-spa-beige-400">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
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
            href={`https://wa.me/27617747378?text=${encodeURIComponent(whatsappText)}`}
            target="_blank"
            className="flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Book {title}
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}