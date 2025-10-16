import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Client",
      quote: "The attention to detail and level of service is exceptional. Every visit feels like a luxurious escape from daily stress.",
      rating: 5
    },
    {
      name: "Michael & Lisa",
      role: "Couples Package",
      quote: "Our couples massage was amazing! The perfect way to spend quality time together in a peaceful environment.",
      rating: 5
    },
    {
      name: "Emily Thompson",
      role: "First-time Visitor",
      quote: "From the moment I walked in, I felt welcomed and pampered. The facial treatment was exactly what my skin needed.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-spa-beige-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            What Our Clients Say
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300">
            Real experiences from our valued guests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-spa-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-spa-beige-200 dark:border-slate-700"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i}
                    className="w-5 h-5 fill-spa-gold-400 text-spa-gold-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-lora text-lg text-spa-beige-800 dark:text-spa-beige-200 mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-playfair font-semibold text-spa-black dark:text-spa-white">
                  {testimonial.name}
                </div>
                <div className="font-poppins text-sm text-spa-beige-600 dark:text-spa-beige-400">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}