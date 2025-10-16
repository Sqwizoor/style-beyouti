import { Sparkles, Phone, Star } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import HeroSlider from '@/components/hero-slider'

export default function HeroSection() {
  return (
    <HeroSlider>
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-2xl mb-6 animate-float">
          <Sparkles className="w-10 h-10 text-spa-white" />
        </div>
      </div>
      
      <h1 className="font-playfair font-bold text-5xl sm:text-6xl lg:text-7xl text-spa-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] mb-6 leading-tight">
        Style & Beyouti Zone Spa
      </h1>

      <p className="font-poppins text-xl sm:text-2xl text-spa-beige-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-4 max-w-2xl mx-auto">
        Personal • Private • Affordable • Relaxing
      </p>

      <p className="font-lora text-lg sm:text-xl text-spa-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] mb-8 max-w-3xl mx-auto leading-relaxed">
        Experience luxury spa treatments in the comfort of your own space. 
        Our professional services bring relaxation and beauty directly to your doorstep.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <Button 
          asChild
          size="lg"
          className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg"
        >
          <Link href="tel:0617747378" className="flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>Book Your Relaxation Today</span>
          </Link>
        </Button>

        <Button 
          asChild
          variant="outline"
          size="lg"
          className="border-2 border-spa-white/30 bg-spa-white/10 backdrop-blur-sm text-spa-white hover:bg-spa-white/20 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
        >
          <Link href="/services" className="flex items-center space-x-2">
            <Star className="w-5 h-5" />
            <span>View Our Services</span>
          </Link>
        </Button>
      </div>

      <div className="inline-block bg-gradient-to-r from-spa-pink-400/30 to-spa-gold-400/30 backdrop-blur-md rounded-full px-8 py-4 border border-spa-white/30 shadow-2xl">
        <p className="font-poppins text-spa-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          ✨ Affordable luxury at your doorstep 💆‍♀️✨
        </p>
      </div>
    </HeroSlider>
  )
}