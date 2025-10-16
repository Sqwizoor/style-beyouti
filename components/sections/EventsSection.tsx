import { Sparkles, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function EventsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-spa-white via-spa-beige-50 to-spa-pink-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-lg mb-6">
            <Sparkles className="w-8 h-8 text-spa-white" />
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            Memorable Events
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-3xl mx-auto">
            Celebrate special moments with our curated spa experiences for every occasion
          </p>
        </div>

        {/* Events content would go here */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair font-bold text-3xl text-spa-black dark:text-spa-white mb-4">
              Plan Your Special Event
            </h3>
            <p className="font-lora text-lg text-spa-beige-700 dark:text-spa-beige-300 mb-8 max-w-2xl mx-auto">
              Whether it's a bridal shower, baby shower, or girls' day out, we create unforgettable experiences.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="https://wa.me/27617747378?text=Hi! I'd like to plan a special event at Style & BeYouTi Zone Spa. Can you help me create the perfect experience?" target="_blank" className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Plan Your Event</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
