import { Star } from 'lucide-react'

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-spa-white via-spa-beige-50 to-spa-pink-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            What Our Clients Say
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-3xl mx-auto">
            Read the experiences of our satisfied clients who have enjoyed our personalized spa services
          </p>
        </div>

        <div className="bg-spa-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-spa-beige-200 dark:border-slate-700">
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div className="elfsight-app-aab3c028-4ed9-414b-92a3-89222b519ce8" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  )
}
