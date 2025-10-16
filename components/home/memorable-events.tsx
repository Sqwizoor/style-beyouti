'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function MemorableEventsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-spa-pink-50 via-spa-beige-50 to-spa-gold-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            Memorable Events Celebrated @ Style & Beyouti Zone Spa
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-3xl mx-auto">
            Creating unforgettable moments and spending precious time together through our specialized event spa services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event cards (Birthdays, Bridal Showers, etc.) */}
          {[
            {
              title: "Birthdays",
              image: "/dayspa5.jpeg",
              icon: "🎂",
              description: "Celebrate another year of life with a special birthday spa experience. Perfect for milestone birthdays or intimate celebrations with friends and family.",
              features: ["Special Occasion", "Group Packages"],
              whatsappText: "Hi! I'd like to plan a birthday spa celebration. Please tell me about your birthday packages and availability."
            },
            {
              title: "Bridal Showers",
              image: "/dayspa2.jpeg",
              icon: "👰‍♀️",
              description: "Pamper the bride-to-be and her closest friends with luxurious spa treatments. Create beautiful pre-wedding memories together.",
              features: ["Bridal Party", "Pre-Wedding"],
              whatsappText: "Hi! I'm planning a bridal shower and would love to include spa treatments. Can you help me create the perfect package?"
            },
            {
              title: "Baby Showers",
              image: "/dayspa3.jpeg",
              icon: "🍼",
              description: "Celebrate the upcoming arrival with gentle, relaxing spa treatments perfect for expecting mothers and their loved ones.",
              features: ["Expecting Mothers", "Gentle Treatments"],
              whatsappText: "Hi! I'm organizing a baby shower and would like to include spa treatments. What packages do you recommend for expecting mothers?"
            },
            // Add more events as needed
          ].map((event, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image}
                  alt={`${event.title} spa celebrations`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">
                  {event.icon}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair font-bold text-2xl text-spa-white mb-1">
                    {event.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Link 
                    href={`https://wa.me/27617747378?text=${encodeURIComponent(event.whatsappText)}`}
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Plan {event.title}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair font-bold text-3xl text-spa-black dark:text-spa-white mb-4">
              Ready to Create Memorable Moments?
            </h3>
            <p className="font-lora text-lg text-spa-beige-700 dark:text-spa-beige-300 mb-8 max-w-2xl mx-auto">
              Let us help you plan the perfect spa event. Whether it's a special celebration or just because, 
              we'll create an unforgettable experience for you and your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="tel:0617747378" className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Call to Plan Your Event</span>
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
              >
                <Link href="https://wa.me/27617747378?text=Hi! I'd like to plan a memorable spa event. Can you help me create a custom package for my special occasion?" target="_blank" className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Plan Custom Event</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}