import { Sparkles, Heart, Shield, Star } from 'lucide-react'

export function ServiceProcessSection() {
  return (
    <section className="py-20 bg-spa-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            How It Works
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-2xl mx-auto">
            Your journey to relaxation is simple and seamless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                <Heart className="w-10 h-10 text-spa-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-spa-pink-500 text-spa-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
            </div>
            <h3 className="font-playfair font-semibold text-xl text-spa-black dark:text-spa-white mb-3">
              Book Your Session
            </h3>
            <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">
              Call or WhatsApp to discuss your needs and schedule your appointment
            </p>
          </div>

          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                <Shield className="w-10 h-10 text-spa-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-spa-pink-500 text-spa-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
            </div>
            <h3 className="font-playfair font-semibold text-xl text-spa-black dark:text-spa-white mb-3">
              Personalize Treatment
            </h3>
            <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">
              We customize your treatment based on your preferences and wellness goals
            </p>
          </div>

          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                <Sparkles className="w-10 h-10 text-spa-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-spa-pink-500 text-spa-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
            </div>
            <h3 className="font-playfair font-semibold text-xl text-spa-black dark:text-spa-white mb-3">
              Enjoy Your Treatment
            </h3>
            <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">
              Relax in your own space while receiving professional spa treatments
            </p>
          </div>

          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                <Star className="w-10 h-10 text-spa-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-spa-pink-500 text-spa-white rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
            </div>
            <h3 className="font-playfair font-semibold text-xl text-spa-black dark:text-spa-white mb-3">
              Feel Renewed
            </h3>
            <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">
              Leave feeling refreshed, rejuvenated, and ready to take on the world
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}