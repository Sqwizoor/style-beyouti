import { Metadata } from "next"
import { Sparkles, Heart, Shield, DollarSign, Star, Phone, MessageCircle, Clock } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import HeroSlider from '@/components/hero-slider'
import Footer from '@/components/footer'

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

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-spa-beige-50 to-spa-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-8">
              Your Personal Spa Experience Awaits
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 leading-relaxed mb-12">
              Experience a personal, private, and affordable spa treatment in the comfort of your own space. 
              We bring professional wellness services directly to you, ensuring complete relaxation and rejuvenation.
            </p>

            {/* Spa Experience Video */}
            <div className="relative max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/20 dark:to-spa-gold-900/20">
                <video
                  className="w-full h-full object-cover rounded-2xl"
                  controls
                  preload="metadata"
                  poster="/dayspa5.jpeg"
                  playsInline
                  controlsList="nodownload"
                  style={{ 
                    maxHeight: '500px',
                    objectFit: 'cover'
                  }}
                >
                  <source src="/spa-video.mp4" type="video/mp4" />
                  <source src="/spa-video.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video overlay for additional styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/10 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
                
                {/* Play button overlay (will be hidden when video controls are used) */}
                <div className="absolute inset-0 flex items-center justify-center bg-spa-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                  <div className="w-20 h-20 bg-spa-white/90 rounded-full flex items-center justify-center shadow-xl">
                    <div className="w-0 h-0 border-l-[12px] border-l-spa-pink-500 border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              
              {/* Video Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="font-poppins text-spa-white text-sm font-medium bg-spa-black/50 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                  Experience the Style & BeYouTi Zone Difference
                </p>
              </div>
            </div>

            {/* Memorable Events Section */}
            <div className="bg-gradient-to-r from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-lg mb-6">
                <Sparkles className="w-8 h-8 text-spa-white" />
              </div>
              
              <h3 className="font-playfair font-bold text-3xl text-spa-black dark:text-spa-white mb-6">
                Memorable Events Celebrated @ Style & BeYouTi Zone
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🎂</span>
                  </div>
                  <h4 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                    Birthdays
                  </h4>
                </div>

                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">👰‍♀️</span>
                  </div>
                  <h4 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                    Bridal Showers
                  </h4>
                </div>

                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">💕</span>
                  </div>
                  <h4 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                    Precious Moments
                  </h4>
                </div>

                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🍼</span>
                  </div>
                  <h4 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                    Baby Showers
                  </h4>
                </div>

                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">👯‍♀️</span>
                  </div>
                  <h4 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                    Girls Pamper Day
                  </h4>
                </div>

                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🧘‍♀️</span>
                  </div>
                  <h4 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                    Chill & Relax
                  </h4>
                </div>
              </div>

              <p className="font-lora text-lg text-spa-beige-700 dark:text-spa-beige-300 mt-8 text-center">
                Whether you're celebrating a special occasion or just finding a reason to unwind, 
                we create memorable experiences tailored to your unique moments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="tel:0617747378" className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Plan Your Event</span>
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Link href="https://wa.me/27617747378?text=Hi! I'd like to plan a memorable event at Style & BeYouTi Zone Spa. Can you help me create the perfect experience?" target="_blank" className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Us</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Deals & Packages Section */}
      <section className="py-20 bg-gradient-to-br from-spa-beige-50 via-spa-pink-50 to-spa-gold-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-lg mb-6">
              <Sparkles className="w-8 h-8 text-spa-white" />
            </div>
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
              Exclusive Deals & Packages
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-3xl mx-auto">
              Discover our current specials designed to give you exceptional value while experiencing our premium spa treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Kids Pamper */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/new-kids.jpeg"
                  alt="Kids Pamper Package"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Special Deal Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[90px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R350</div>
                    <div className="text-xs whitespace-nowrap">PER CHILD</div>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">45 mins</span>
                </div>

                {/* Deal Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  👧�
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-spa-beige-600 dark:text-spa-beige-400">(5.0)</span>
                </div>

                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                  Kids Pamper
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Hi I can accommodate you @R350 per child - Treatments 45mins
                </p>

                {/* Treatments Included */}
                <div className="mb-4">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                    Treatments Included:
                  </h4>
                  <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                    <li>• Back Neck and Shoulder Massage: 15mins</li>
                    <li>• Express Pedicure: 15mins</li>
                    <li>• Foot Soak 🦶</li>
                    <li>• Foot Scrub 🦶</li>
                    <li>• Buff and Shine</li>
                    <li>• Foot massage 👌: 15mins</li>
                    <li>• Nail polish painted on 👣and💅🏼</li>
                  </ul>
                </div>

                {/* Included Extras */}
                <div className="mb-4 bg-spa-pink-50 dark:bg-spa-pink-900/20 rounded-lg p-3">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                    Included:
                  </h4>
                  <p className="text-sm text-spa-beige-600 dark:text-spa-beige-400">
                    • Welcome drinks 🥂<br/>
                    • Gowns, slippers and headbands provided
                  </p>
                </div>

                {/* Optional Add-ons */}
                <div className="mb-4 bg-spa-gold-50 dark:bg-spa-gold-900/20 rounded-lg p-3">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                    Optional Add-ons:
                  </h4>
                  <p className="text-sm text-spa-beige-600 dark:text-spa-beige-400">
                    • Canvas painting 🎨🖼 (includes canvas and painting) - R250pc<br/>
                    • Light Meals (Chicken wrap & Chips with soft drink) - R100pc
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    45 mins Treatment
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Gowns & Slippers Included
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'm interested in the Kids Pamper package (R350 per child for 45mins). Please let me know about availability and optional add-ons."
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book Kids Pamper
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Couples Combo for 2 people */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/service.png"
                  alt="Couples Combo for 2 people"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R650</div>
                    <div className="text-xs line-through opacity-80 whitespace-nowrap">R900</div>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">4 hours</span>
                </div>

                {/* Love Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  💕
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-spa-beige-600 dark:text-spa-beige-400">(5.0)</span>
                </div>

                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                  Couples Combo for 2 people
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Personal, Private, Affordable and very Relaxing Environment with an Amazing Service @ your doorstep 💯👌Only @ Style and Beyouti Zone Day Spa
                </p>

                {/* Treatments Included */}
                <div className="mb-4">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                    5 Treatments Included:
                  </h4>
                  <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                    <li>• Hot Stones / Swedish Full Body Massage: 50 minutes</li>
                    <li>• Indian Head Massage: 10 minutes</li>
                    <li>• Back Exfoliation: 10 minutes</li>
                    <li>• Express Pedicure: 20 minutes</li>
                    <li>• Half Leg Glow Exfoliation: 10 minutes</li>
                    <li>• Instant Glow Facial (soft, refreshed, glowing skin)</li>
                    <li>• Optional: Nail Polish painted on toes for the Lady</li>
                  </ul>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Save R250
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    For 2 People
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'm interested in the Couples Combo for 2 people (R650). When is your next availability?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book Couples Combo
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Massage Treatments 60mins */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/service2.png"
                  alt="Massage Treatments 60mins"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[70px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R300</div>
                    <div className="text-xs line-through opacity-80 whitespace-nowrap">R400</div>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">60 minutes</span>
                </div>

                {/* Massage Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  💆‍♀️
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-spa-beige-600 dark:text-spa-beige-400">(4.9)</span>
                </div>

                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                  Massage Treatments 60mins
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Massage is not just a luxury. It's a way to a healthier, happier life. 💆‍♂️🥂💆‍♀️🌸
                </p>

                {/* Mission Statement */}
                <div className="mb-4">
                  <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 text-sm leading-relaxed">
                    Results is our passion. Our mission is to offer affordable treatments with the best possible results.
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Save R100
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    60 Minutes
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'm interested in the Massage Treatments 60mins (R300). When is your next availability?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book Massage Treatment
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Just for you @ R500pp Only */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/service3.png"
                  alt="Just for you Special Package"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[70px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R500</div>
                    <div className="text-xs line-through opacity-80 whitespace-nowrap">R650</div>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">1 hour</span>
                </div>

                {/* Special Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  💆‍♀️
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-spa-beige-600 dark:text-spa-beige-400">(4.8)</span>
                </div>

                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                  Just for you @ R500pp Only
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed font-semibold">
                  **Our Special Just for You!**
                </p>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Get a Full Body Hotstone Massage PLUS a Back Exfoliation PLUS a Head Massage for 1hour 👌💯
                </p>

                {/* Includes */}
                <div className="mb-4 bg-spa-gold-50 dark:bg-spa-gold-900/20 rounded-lg p-3">
                  <p className="font-poppins text-spa-beige-700 dark:text-spa-beige-300 text-sm font-medium">
                    Includes a Yummy Snack Platter with a Drink🍹<br/>
                    For Only R500pp💥
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Save R150
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Includes Snacks & Drink
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'm interested in the Just for you @ R500pp package with Hotstone Massage, Back Exfoliation, Head Massage, plus Snack Platter and Drink. When is your next availability?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book Just For You
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Amazing Instant Glow Facial */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/service4.png"
                  alt="Amazing Instant Glow Facial"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Price Badge with Special Offer */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[85px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R200</div>
                    <div className="text-xs line-through opacity-80 whitespace-nowrap">R350</div>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">30 minutes</span>
                </div>

                {/* Facial Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  ✨
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-spa-beige-600 dark:text-spa-beige-400">(4.7)</span>
                </div>

                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                  Amazing Instant Glow Facial 👌
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Instant Glow Facial leaving your skin soft refreshed and Glowing 30mins👌💯
                </p>
                
                <p className="font-poppins text-spa-beige-700 dark:text-spa-beige-300 mb-4 leading-relaxed font-medium">
                  Full Facial @ R200
                </p>

                {/* Bonus */}
                <div className="mb-4 bg-spa-pink-50 dark:bg-spa-pink-900/20 rounded-lg p-3">
                  <p className="font-poppins text-spa-pink-700 dark:text-spa-pink-300 text-sm font-medium">
                    👣Plus a Free 10mins Foot Massage
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-gold-100 to-spa-pink-100 dark:from-spa-gold-900/30 dark:to-spa-pink-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    Save R150
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Free Foot Massage
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'm interested in the Amazing Instant Glow Facial (R200) with Free 10mins Foot Massage. When is your next availability?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book Instant Glow Facial
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* 90mins Hotstones Garden Massage */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/real-massage.jpeg"
                  alt="90mins Hotstones Garden Massage"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[70px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R550</div>
                    <div className="text-xs line-through opacity-80 whitespace-nowrap">R700</div>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">90 minutes</span>
                </div>

                {/* Garden Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  💆‍♀️
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-spa-beige-600 dark:text-spa-beige-400">(4.9)</span>
                </div>

                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                  90mins Hotstones Garden Massage
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Garden Massages - New improvements added 👌🏡 Perfect chillout place right @ your doorstep 🏘️ 
                  Birds Chirping 🐦🦜 Rabbits running 🐇🐰🐾 Fresh air with a cool breeze 💞 Nothing more relaxing than to be massaged in the garden 💏 
                  Not forgetting it adds to the Romance 💕😍💯
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Garden Setting
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Hot Stones
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Romantic Atmosphere
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'd like to book a 90mins Hotstones Massage in the garden (90 min - R550). When is your next availability?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book Garden Massage
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Amazing 5 Treatments at Spa House */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/pool.jpeg"
                  alt="Amazing 5 Treatments with Pool"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[70px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R400</div>
                    <div className="text-xs line-through opacity-80 whitespace-nowrap">R550</div>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Various</span>
                </div>

                {/* Pool Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  🌟
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(4.7) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-spa-beige-600 dark:text-spa-beige-400">(4.7)</span>
                </div>

                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                  Amazing 5 Treatments
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Amazing 5 treatments at our Spa in Jhb South 💆‍♂️💆‍♀️ An indoor swimming pool to cool off and relax 🏖 
                  Perfect for those who want a complete spa experience with pool access.
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    5 Treatments
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Indoor Pool
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Jhb South Location
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'd like to book the Amazing 5 Treatments package (R400). When is your next availability?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book 5 Treatments
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action for Exclusive Deals */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <h3 className="font-playfair font-bold text-3xl text-spa-black dark:text-spa-white mb-4">
                Ready to Take Advantage of These Exclusive Deals?
              </h3>
              <p className="font-lora text-lg text-spa-beige-700 dark:text-spa-beige-300 mb-8 max-w-2xl mx-auto">
                These special packages are designed to give you exceptional value while experiencing our premium spa treatments. 
                Book now to secure your preferred time and package.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="tel:0617747378" className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call to Book Your Deal</span>
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Link href="https://wa.me/27617747378?text=Hi! I'd like to know more about your exclusive deals and packages. Which one would you recommend for me?" target="_blank" className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Ask About Deals</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food, Drinks & Activities Section */}
      <section className="py-20 bg-gradient-to-br from-spa-white via-spa-beige-50 to-spa-pink-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-lg mb-6">
              <Sparkles className="w-8 h-8 text-spa-white" />
            </div>
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
              Food, Drinks & Activities
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-3xl mx-auto">
              Complete your spa experience with our delicious refreshments and fun activities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Snack Basket */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/spa-food.jpeg"
                  alt="Snack Basket with Chips and Drink"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[85px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R80</div>
                    <div className="text-xs whitespace-nowrap">per person</div>
                  </div>
                </div>

                {/* Snack Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  🍟
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                  Snack Basket
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Perfect light snack to enjoy during your spa session. Includes chips 🍟 for one 🍱 with a refreshing soft drink 🥤
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Light Snack
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Includes Drink
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'd like to add a Snack Basket (R80 per person) to my spa booking. Please let me know availability."
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Add to Booking
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Meal Options */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/spa-food2.jpeg"
                  alt="Meal Options - Chicken Wrap or Quarter Chicken"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[85px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R150</div>
                    <div className="text-xs whitespace-nowrap">per person</div>
                  </div>
                </div>

                {/* Meal Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  🍗
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                  Meal Options
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Choose from our delicious meal options to satisfy your appetite during your spa experience.
                </p>

                {/* Meal Options */}
                <div className="mb-4">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                    Choose One:
                  </h4>
                  <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                    <li>• Chicken Wrap served with Chips 🍟 plus soft drink 🧋</li>
                    <li>• Quarter Chicken with Chips and a Roll</li>
                  </ul>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Full Meal
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    2 Options
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'd like to add a Meal Option (R150 per person) to my spa booking. Please let me know the meal choices available."
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Order Meal
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Halaal Meats */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/food3.jpeg"
                  alt="Halaal T-Bone Steak with Wors"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Halaal Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                  <div className="text-center">
                    <div className="text-xs whitespace-nowrap">HALAAL</div>
                    <div className="text-sm font-bold whitespace-nowrap">MEATS</div>
                  </div>
                </div>

                {/* Steak Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  🥩
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                  Halaal Meats
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Premium Halaal meat options for a hearty meal during your spa experience.
                </p>

                {/* Meat Options */}
                <div className="mb-4">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                    Includes:
                  </h4>
                  <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                    <li>• T-Bone Steak with Wors 🧆</li>
                    <li>• Served with Pap and Chakalaka</li>
                  </ul>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Halaal Certified
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Premium Cuts
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'd like to add Halaal Meats (T-Bone Steak with Wors, Pap and Chakalaka) to my spa booking. Please provide pricing and availability."
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Order Halaal Meats
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Drinks Menu */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/drinks.jpeg"
                  alt="Drinks - Mojitos, Wine, Ciders"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Price Range Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[95px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R40-R150</div>
                    <div className="text-xs whitespace-nowrap">DRINKS</div>
                  </div>
                </div>

                {/* Drinks Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  🍹
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                  Drinks Menu
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Refresh yourself with our selection of non-alcoholic and alcoholic beverages.
                </p>

                {/* Drinks Options */}
                <div className="mb-4">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                    Non-Alcoholic:
                  </h4>
                  <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1 mb-3">
                    <li>• Mojito / Juice - R40 (Jug - R70)</li>
                    <li>• Cappuccino with Truffle Biscuits - R40</li>
                  </ul>
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                    Alcoholic:
                  </h4>
                  <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                    <li>• Ciders - R40</li>
                    <li>• Bottle of Wine - R150</li>
                    <li>• Bag of Ice - R40</li>
                  </ul>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Variety Available
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Alcoholic & Non-Alcoholic
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'd like to add drinks to my spa booking. Please let me know what's available from your drinks menu."
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Order Drinks
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Activities */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/spa-fiid.jpeg"
                  alt="Activities - Paint Session and Tufting"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Price Range Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[100px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R280-R560</div>
                    <div className="text-xs whitespace-nowrap">per person</div>
                  </div>
                </div>

                {/* Activities Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  🎨
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                  Optional Activities
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Add some creative fun to your spa experience with our optional activities.
                </p>

                {/* Activities Options */}
                <div className="mb-4">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                    Available Activities:
                  </h4>
                  <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                    <li>• 🎨 Paint Session - R280pp (includes canvas, paints + glass of wine)</li>
                    <li>• Tufting/Rug Making - R560pp (includes all materials)</li>
                  </ul>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    All Materials Included
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Creative Fun
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'm interested in adding activities to my spa booking. Please tell me more about the Paint Session (R280pp) or Tufting/Rug Making (R560pp)."
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book Activities
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Special Occasions & Extras */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/dayspa4.jpeg"
                  alt="Special Occasions Setup"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Services Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[90px]">
                  <div className="text-center">
                    <div className="text-xs whitespace-nowrap">SPECIAL</div>
                    <div className="text-sm font-bold whitespace-nowrap">OCCASIONS</div>
                  </div>
                </div>

                {/* Celebration Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  🎉
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                  Special Occasions & Extras
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Make your celebration extra special with our setup services and additional amenities.
                </p>

                {/* Services Options */}
                <div className="mb-4">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                    Available Services:
                  </h4>
                  <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                    <li>• Birthday/Occasion Basic Balloons Setup - R450</li>
                    <li>• Table Setup - R50 per person</li>
                    <li>• Small Braai Stand for 2 (includes fire + charcoal) - R150</li>
                    <li>• Bag of Ice - R40</li>
                  </ul>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Event Setup
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Celebration Extras
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'd like to add special occasion setup to my spa booking. Please tell me more about your balloon setup, table setup, and braai options."
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Plan Special Occasion
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action for Food & Activities */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <h3 className="font-playfair font-bold text-3xl text-spa-black dark:text-spa-white mb-4">
                Complete Your Spa Experience
              </h3>
              <p className="font-lora text-lg text-spa-beige-700 dark:text-spa-beige-300 mb-8 max-w-2xl mx-auto">
                Enhance your relaxation with delicious food, refreshing drinks, creative activities, and special occasion setups. 
                Let us create the perfect atmosphere for your spa day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="tel:0617747378" className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call for Custom Package</span>
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Link href="https://wa.me/27617747378?text=Hi! I'd like to create a custom spa package with food, drinks, and activities. Can you help me plan the perfect experience?" target="_blank" className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Plan Custom Experience</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kids Services Highlight Section */}
      <section className="py-20 bg-gradient-to-r from-spa-pink-50 via-spa-beige-50 to-spa-gold-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/kids3.jpeg"
                  alt="Kids enjoying spa treatments"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-spa-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-4">
                    <p className="font-playfair text-spa-black dark:text-spa-white font-semibold text-lg mb-1">
                      "Making wellness fun for kids!"
                    </p>
                    <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 text-sm">
                      - Safe, Fun & Educational
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fadeIn">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-lg mb-6">
                <Sparkles className="w-8 h-8 text-spa-white" />
              </div>
              
              <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-6">
                Introducing Kids Spa Services
              </h2>
              
              <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 mb-8 leading-relaxed">
                We've created a special section dedicated to our young clients! Our kids spa services are designed to be 
                safe, fun, and educational - introducing children to wellness and self-care in an age-appropriate way.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-spa-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                      Ages 5-17 Welcome
                    </h3>
                    <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 text-sm">
                      Treatments designed for different age groups and developmental stages
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-spa-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                      100% Safe & Child-Friendly
                    </h3>
                    <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 text-sm">
                      Child-safe products, trained specialists, and parent supervision required
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-spa-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-lg text-spa-black dark:text-spa-white mb-1">
                      Fun & Educational
                    </h3>
                    <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 text-sm">
                      Learning about self-care while having a magical, memorable experience
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/kids">
                    Explore Kids Services
                  </Link>
                </Button>

                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Link href="https://wa.me/27617747378?text=Hi, I'm interested in kids spa services. My child is [age] years old. What treatments do you recommend?" target="_blank">
                    Ask About Kids Treatments
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase Section */}
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
                src="/dayspa5.jpeg"
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
                  src="/dayspa2.jpeg"
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

          {/* Expanded Gallery Sections */}
          
          {/* Kids Spa Section */}
          <div className="mb-12">
            <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-6 text-center">
              Kids Spa Experience
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/dayspa4.jpeg"
                  alt="Kids enjoying spa treatments"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-pink-500/20 group-hover:bg-spa-pink-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Mini Me Massage
                  </p>
                </div>
              </div>

              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/dayspa6.jpeg"
                  alt="Princess spa package for kids"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-gold-500/20 group-hover:bg-spa-gold-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Princess Package
                  </p>
                </div>
              </div>

              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/dayspa2.jpeg"
                  alt="Teen spa treatments"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-beige-500/20 group-hover:bg-spa-beige-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Teen Glow
                  </p>
                </div>
              </div>

              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/hero-main.jpeg"
                  alt="Family bonding spa sessions"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-pink-500/20 group-hover:bg-spa-pink-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Family Bonding
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Food & Refreshments Section */}
          <div className="mb-12">
            <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-6 text-center">
              Delicious Refreshments
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/spa-food.jpeg"
                  alt="Gourmet spa meals"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-gold-500/20 group-hover:bg-spa-gold-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Gourmet Meals
                  </p>
                </div>
              </div>

              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/spa-food2.jpeg"
                  alt="Healthy snack options"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-beige-500/20 group-hover:bg-spa-beige-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Healthy Snacks
                  </p>
                </div>
              </div>

              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/drinks.jpeg"
                  alt="Refreshing beverages"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-pink-500/20 group-hover:bg-spa-pink-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Fresh Beverages
                  </p>
                </div>
              </div>

              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/spa-food3.jpeg"
                  alt="Premium halaal meats"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-gold-500/20 group-hover:bg-spa-gold-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Premium Halaal
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Spa Treatments */}
          <div className="mb-12">
            <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-6 text-center">
              Premium Spa Treatments
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/dayspa3.jpeg"
                  alt="Aromatherapy treatments"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-pink-500/20 group-hover:bg-spa-pink-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Aromatherapy
                  </p>
                </div>
              </div>

              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/outdoor.jpeg"
                  alt="Garden massage setup"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-gold-500/20 group-hover:bg-spa-gold-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Garden Massage
                  </p>
                </div>
              </div>

              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/pool.jpeg"
                  alt="Pool relaxation area"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-beige-500/20 group-hover:bg-spa-beige-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Pool Relaxation
                  </p>
                </div>
              </div>

              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/dayspa6 (2).jpeg"
                  alt="Hot stone therapy"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-pink-500/20 group-hover:bg-spa-pink-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Hot Stone Therapy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Activities & Special Events */}
          <div className="mb-12">
            <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-6 text-center">
              Activities & Special Events
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/spa-fiid.jpeg"
                  alt="Paint and sip activities"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-gold-500/20 group-hover:bg-spa-gold-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Paint & Sip
                  </p>
                </div>
              </div>

              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/hero2.jpeg"
                  alt="Birthday celebrations"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-pink-500/20 group-hover:bg-spa-pink-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Birthday Parties
                  </p>
                </div>
              </div>

              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/hero3.jpeg"
                  alt="Bridal shower events"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-beige-500/20 group-hover:bg-spa-beige-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Bridal Showers
                  </p>
                </div>
              </div>

              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/new-kids.jpeg"
                  alt="Group pamper sessions"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-gold-500/20 group-hover:bg-spa-gold-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Group Sessions
                  </p>
                </div>
              </div>
            </div>
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

      {/* Memorable Events Section */}
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
            {/* Birthdays */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/dayspa5.jpeg"
                  alt="Birthday spa celebrations"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">
                  🎂
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair font-bold text-2xl text-spa-white mb-1">
                    Birthdays
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Celebrate another year of life with a special birthday spa experience. Perfect for milestone birthdays or intimate celebrations with friends and family.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-spa-pink-100 dark:bg-spa-pink-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Special Occasion
                  </span>
                  <span className="px-3 py-1 bg-spa-gold-100 dark:bg-spa-gold-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    Group Packages
                  </span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'd like to plan a birthday spa celebration. Please tell me about your birthday packages and availability."
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Plan Birthday Spa
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Bridal Showers */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/dayspa2.jpeg"
                  alt="Bridal shower spa treatments"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">
                  👰‍♀️
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair font-bold text-2xl text-spa-white mb-1">
                    Bridal Showers
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Pamper the bride-to-be and her closest friends with luxurious spa treatments. Create beautiful pre-wedding memories together.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-spa-pink-100 dark:bg-spa-pink-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Bridal Party
                  </span>
                  <span className="px-3 py-1 bg-spa-gold-100 dark:bg-spa-gold-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    Pre-Wedding
                  </span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'm planning a bridal shower and would love to include spa treatments. Can you help me create the perfect package?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Plan Bridal Shower
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Baby Showers */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/dayspa3.jpeg"
                  alt="Baby shower spa celebrations"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">
                  🍼
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair font-bold text-2xl text-spa-white mb-1">
                    Baby Showers
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Celebrate the upcoming arrival with gentle, relaxing spa treatments perfect for expecting mothers and their loved ones.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-spa-pink-100 dark:bg-spa-pink-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Expecting Mothers
                  </span>
                  <span className="px-3 py-1 bg-spa-gold-100 dark:bg-spa-gold-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    Gentle Treatments
                  </span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'm organizing a baby shower and would like to include spa treatments. What packages do you recommend for expecting mothers?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Plan Baby Shower
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Girls Pamper Day */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/dayspa6.jpeg"
                  alt="Girls pamper day spa session"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">
                  👯‍♀️
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair font-bold text-2xl text-spa-white mb-1">
                    Girls Pamper Day
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Gather your girlfriends for the ultimate pamper day experience. Bond, laugh, and relax together with customized spa treatments.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-spa-pink-100 dark:bg-spa-pink-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Friendship
                  </span>
                  <span className="px-3 py-1 bg-spa-gold-100 dark:bg-spa-gold-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    Group Fun
                  </span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I want to organize a girls pamper day for my friends. How many people can you accommodate and what packages do you offer?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Plan Pamper Day
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Precious Moments Together */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/hero-main.jpeg"
                  alt="Spending precious moments together"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">
                  💕
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair font-bold text-2xl text-spa-white mb-1">
                    Precious Moments
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Create meaningful connections and spend quality time together. Perfect for mother-daughter bonding, couples, or close friends.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-spa-pink-100 dark:bg-spa-pink-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Quality Time
                  </span>
                  <span className="px-3 py-1 bg-spa-gold-100 dark:bg-spa-gold-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    Bonding
                  </span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'd like to book a special spa session to spend precious moments together with my loved one. What do you recommend?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book Special Moments
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Chill and Relax */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/pool.jpeg"
                  alt="Just chill and relax spa session"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">
                  🧘‍♀️
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair font-bold text-2xl text-spa-white mb-1">
                    Chill & Relax
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Sometimes you don't need a special reason - just find a moment to chill and relax. Perfect for stress relief and self-care.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-spa-pink-100 dark:bg-spa-pink-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Self-Care
                  </span>
                  <span className="px-3 py-1 bg-spa-gold-100 dark:bg-spa-gold-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    Stress Relief
                  </span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I just want to chill and relax with a spa session. What treatments do you recommend for ultimate relaxation?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book Relaxation
                  </Link>
                </Button>
              </CardContent>
            </Card>
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
                    <Phone className="w-5 h-5" />
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

      {/* Service Process Section */}
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
                  <Phone className="w-10 h-10 text-spa-white" />
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
                  <Heart className="w-10 h-10 text-spa-white" />
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

      {/* Special Offers Section */}
      <section className="py-20 bg-gradient-to-r from-spa-pink-100 via-spa-beige-50 to-spa-gold-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
              Special Offers
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-2xl mx-auto">
              Limited-time packages designed to give you the best value for your wellness investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="relative overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-3xl transition-all duration-300">
              <div className="absolute top-4 right-4 bg-spa-pink-500 text-spa-white px-3 py-1 rounded-full text-sm font-bold">
                NEW CLIENT
              </div>
              <CardContent className="p-8">
                <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-4">
                  First Visit Special
                </h3>
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-6">
                  Experience our signature relaxation package at a special introductory price. Includes full-body massage and mini facial.
                </p>
                <div className="flex items-center mb-6">
                  <span className="font-playfair text-3xl font-bold text-spa-pink-600 dark:text-spa-pink-400">R299</span>
                  <span className="font-poppins text-spa-beige-500 line-through ml-3">R450</span>
                  <span className="bg-spa-gold-100 dark:bg-spa-gold-900/30 text-spa-gold-700 dark:text-spa-gold-400 px-2 py-1 rounded text-sm ml-3">Save R151</span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold rounded-full"
                >
                  <Link href="tel:0617747378">
                    Book Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-3xl transition-all duration-300">
              <div className="absolute top-4 right-4 bg-spa-gold-500 text-spa-white px-3 py-1 rounded-full text-sm font-bold">
                COUPLES
              </div>
              <CardContent className="p-8">
                <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-4">
                  Couples Retreat Package
                </h3>
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-6">
                  Share the relaxation experience with your partner. Side-by-side massages in the comfort of your home.
                </p>
                <div className="flex items-center mb-6">
                  <span className="font-playfair text-3xl font-bold text-spa-gold-600 dark:text-spa-gold-400">R599</span>
                  <span className="font-poppins text-spa-beige-500 line-through ml-3">R750</span>
                  <span className="bg-spa-pink-100 dark:bg-spa-pink-900/30 text-spa-pink-700 dark:text-spa-pink-400 px-2 py-1 rounded text-sm ml-3">Save R151</span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-gold-500 to-spa-pink-500 hover:from-spa-gold-600 hover:to-spa-pink-600 text-spa-white font-poppins font-semibold rounded-full"
                >
                  <Link href="https://wa.me/0617747378?text=Hi, I'm interested in the Couples Retreat Package" target="_blank">
                    WhatsApp to Book
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

