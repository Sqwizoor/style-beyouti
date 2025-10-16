'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function GalleryShowcaseSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-spa-beige-50 to-spa-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            Experience the Serenity
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-2xl mx-auto">
            Take a glimpse into our world of relaxation and wellness
          </p>
        </div>

        {/* Modern Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Large Featured Image */}
          <div className="md:col-span-2 lg:col-span-2 relative h-96 rounded-2xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500">
            <Image
              src="/youth4.jpeg"
              alt="Luxury spa treatment room"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-spa-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-playfair text-2xl font-bold text-spa-white mb-2">
                Serene Treatment Spaces
              </h3>
              <p className="font-poppins text-spa-beige-100 text-sm">
                Every session is crafted for your ultimate comfort and relaxation
              </p>
            </div>
          </div>

          {/* Gallery Grid Items */}
          <div className="space-y-6">
            <div className="relative h-44 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src="/spa1.jpeg"
                alt="Massage therapy session"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-spa-black/20 group-hover:bg-spa-black/40 transition-all duration-300"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-poppins text-spa-white text-sm font-medium">
                  Professional Massage Therapy
                </p>
              </div>
            </div>

            <div className="relative h-44 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src="/facial.jpeg"
                alt="Facial treatment setup"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-spa-black/20 group-hover:bg-spa-black/40 transition-all duration-300"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-poppins text-spa-white text-sm font-medium">
                  Rejuvenating Facial Treatments
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Sections */}
        <div className="space-y-12 mb-12">
          {/* Kids Spa Section */}
          <div>
            <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-6 text-center">
              Kids Spa Experience
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Gallery items */}
              {[
                { src: "/dayspa4.jpeg", title: "Mini Me Massage" },
                { src: "/dayspa6.jpeg", title: "Princess Package" },
                { src: "/dayspa2.jpeg", title: "Teen Glow" },
                { src: "/hero-main.jpeg", title: "Family Bonding" },
              ].map((item, index) => (
                <div key={index} className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-spa-pink-500/20 group-hover:bg-spa-pink-500/40 transition-all duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="font-poppins text-spa-white text-xs font-medium">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional gallery sections... */}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/gallery">
              View Full Gallery
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}