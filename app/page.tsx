import { Metadata } from "next"
import { Sparkles, Heart, Shield, DollarSign, Star, Phone, MessageCircle, Clock } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import HeroSlider from '@/components/hero-slider'
import Footer from '@/components/footer'
import MealOptions from '@/components/meal-options'
import MemorableEvents from "@/components/MemorableEvents"
import DealAndPackages from "@/components/DealAndPackages"
import { MemorableEventsSection } from "@/components/home/memorable-events"
import { KidsServicesSection } from "@/components/home/kids-services"
import GallarySection from "@/components/GallarySection"
import KidsSection from "@/components/kidsSection"
import Introduction from "@/components/Introduction"

export const metadata: Metadata = {
  title: "Style & Beyouti Zone Spa | Personal • Private • Affordable • Relaxing",
  description: "Experience luxury spa treatments in the comfort of your own space. Style & Beyouti Zone Spa offers personal, private, and affordable relaxation services. Book your at-home spa session today!",
  keywords: "spa services, at-home spa, massage therapy, facials, relaxation treatments, affordable spa, private spa, mobile spa, aromatherapy, personal spa treatments",
  openGraph: {
    title: "Style & Beyouti Zone Spa | Personal • Private • Affordable • Relaxing",
    description: "Luxury spa treatments delivered to your doorstep. Experience personalized, private, and affordable relaxation services.",
    type: "website",
    images: [
      { url: "/day-spa.jpeg", width: 1200, height: 630, alt: "Style & Beyouti Zone Spa - Relaxation and Beauty Services" },
    ],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
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
<Introduction/>
      <DealAndPackages/>
<MemorableEvents/>
<KidsSection/>
      <GallarySection/>


      {/* Opening Hours Section */}
      <section className="py-20 bg-spa-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
              Opening Hours
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300">
              We're here to serve you with flexible appointment times
            </p>
          </div>

          <div className="bg-gradient-to-br from-spa-beige-50 to-spa-pink-50 dark:from-slate-700 dark:to-slate-800 rounded-2xl shadow-xl p-8 border border-spa-beige-200 dark:border-slate-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Days of the Week */}
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-spa-beige-200 dark:border-slate-600">
                  <span className="font-poppins font-medium text-spa-black dark:text-spa-white">Monday</span>
                  <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-spa-beige-200 dark:border-slate-600">
                  <span className="font-poppins font-medium text-spa-black dark:text-spa-white">Tuesday</span>
                  <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-spa-beige-200 dark:border-slate-600">
                  <span className="font-poppins font-medium text-spa-black dark:text-spa-white">Wednesday</span>
                  <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-spa-beige-200 dark:border-slate-600">
                  <span className="font-poppins font-medium text-spa-black dark:text-spa-white">Thursday</span>
                  <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">9:00 AM - 7:00 PM</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-spa-beige-200 dark:border-slate-600">
                  <span className="font-poppins font-medium text-spa-black dark:text-spa-white">Friday</span>
                  <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-spa-beige-200 dark:border-slate-600">
                  <span className="font-poppins font-medium text-spa-black dark:text-spa-white">Saturday</span>
                  <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-spa-beige-200 dark:border-slate-600">
                  <span className="font-poppins font-medium text-spa-black dark:text-spa-white">Sunday</span>
                  <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-poppins font-medium text-spa-black dark:text-spa-white">Public Holidays</span>
                  <span className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">By Appointment</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-spa-beige-200 dark:border-slate-600">
              <div className="bg-spa-pink-50 dark:bg-spa-pink-900/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-spa-pink-600 dark:text-spa-pink-400" />
                  <h3 className="font-playfair font-semibold text-xl text-spa-black dark:text-spa-white">
                    Flexible Scheduling Available
                  </h3>
                </div>
                <p className="font-poppins text-spa-beige-700 dark:text-spa-beige-300 mb-4">
                  We understand that everyone has different schedules. Evening and weekend appointments are available upon request. 
                  Contact us to discuss your preferred time.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                  >
                    <Link href="tel:0617747378" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call to Schedule
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium rounded-full transition-all duration-300"
                  >
                    <Link href="https://wa.me/0617747378?text=Hi, I'd like to schedule an appointment. What times are available?" target="_blank" className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-spa-pink-400 via-spa-gold-400 to-spa-beige-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-spa-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-white mb-6">
            Ready to Begin Your Spa Journey?
          </h2>
          <p className="font-lora text-xl text-spa-white/90 mb-10 max-w-2xl mx-auto">
            Contact us today and let us bring the ultimate relaxation experience to your doorstep
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-spa-white text-spa-pink-600 hover:bg-spa-beige-50 font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="tel:0617747378" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Now - 061 774 7378</span>
              </Link>
            </Button>

            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-spa-white bg-transparent text-spa-white hover:bg-spa-white hover:text-spa-pink-600 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
            >
              <Link href="https://wa.me/0617747378?text=Hi, I would like to book a spa appointment" className="flex items-center space-x-2" target="_blank">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </Link>
            </Button>
          </div>

          <div className="mt-8">
            <p className="font-poppins text-spa-white/80 text-sm">
              💖 Thank you for your support 💖
            </p>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
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

      <Footer />
    </div>
  )
}
