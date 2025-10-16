'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function GoogleReviewsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-spa-beige-50 to-spa-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            Google Reviews
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-2xl mx-auto">
            See what our valued clients are saying about their experiences with Style & Beyouti Zone Spa
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Elfsight Google Reviews Widget */}
          <div className="bg-spa-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-spa-beige-200 dark:border-slate-700">
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div className="elfsight-app-aab3c028-4ed9-414b-92a3-89222b519ce8" data-elfsight-app-lazy></div>
          </div>
        </div>
      </div>
    </section>
  )
}