import { Sparkles } from 'lucide-react'

export default function GallerySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-spa-white via-spa-beige-50 to-spa-pink-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-lg mb-6">
            <Sparkles className="w-8 h-8 text-spa-white" />
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            Gallery Showcase
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-3xl mx-auto">
            Take a look at our beautiful spa environment and the amazing experiences we create
          </p>
        </div>

        {/* Gallery content would go here */}
        <div className="text-center">
          <p className="text-spa-beige-600 dark:text-spa-beige-400">
            Gallery content will be implemented here
          </p>
        </div>
      </div>
    </section>
  )
}
