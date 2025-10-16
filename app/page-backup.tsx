import { Metadata } from "next"
import HeroSection from "@/components/home/hero-section"
import IntroductionSection from "@/components/home/introduction-section"
import ExclusiveDealsSection from "@/components/home/exclusive-deals-section"
import FoodDrinksSection from "@/components/home/food-drinks-section"
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
      <HeroSection />
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

            {/* Spa Experience Image */}
            <div className="relative max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video">
                <Image
                  src="/tim7.jpeg"
                  alt="Special Occasions and Events"
                  fill
                  quality={100}
                  className="object-cover w-full h-full rounded-2xl"
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/20 to-transparent"></div>
                {/* Image Caption */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="font-poppins text-spa-white text-sm font-medium bg-spa-black/50 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                    Experience the Style & BeYouTi Zone Difference
                  </p>
                </div>
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
            {/* Garden Massages - NEW */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-beige-50 to-spa-gold-50 dark:from-slate-700 dark:to-slate-800">
                <div className="relative w-full h-full p-1">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src="/outdoor.jpeg"
                      alt="Garden Massages"
                      fill
                      quality={100}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* NEW Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[70px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R550</div>
                    <div className="text-xs line-through opacity-80 whitespace-nowrap">R700</div>
                  </div>
                </div>
                
                {/* NEW Badge Icon */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-spa-pink-600 to-spa-gold-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                  NEW! 💆‍♀️
                </div>

                {/* Garden Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  🏡
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
                  Garden Massages 🏡
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  New improvements added 👌 Perfect chillout place right @ your doorstep 🏘️
                </p>

                {/* Features List */}
                <div className="mb-4">
                  <ul className="space-y-2 text-sm text-spa-beige-600 dark:text-spa-beige-400">
                    <li className="flex items-start">
                      <span className="mr-2">🐦🦜</span>
                      <span>Birds Chirping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">🐇🐰</span>
                      <span>Rabbits running 🐾</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">💞</span>
                      <span>Fresh air with a cool breeze</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">💏</span>
                      <span>Nothing more relaxing than to be massaged in the garden</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">💕😍</span>
                      <span>Adds to the Romance 💯</span>
                    </li>
                  </ul>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Save R150
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Garden Setting
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
                    href="https://wa.me/27617747378?text=Hi! I'm interested in the Garden Massage package (R550, was R700). Please let me know about availability."
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book Garden Massage
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Crazy In-Store Specials - NEW */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-pink-50 to-spa-gold-50 dark:from-slate-700 dark:to-slate-800">
                <div className="relative w-full h-full p-1">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src="/ximg2.jpeg"
                      alt="Crazy In-Store Specials"
                      fill
                      quality={100}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Special Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[70px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R1.00</div>
                    <div className="text-xs line-through opacity-80 whitespace-nowrap">R2.00</div>
                  </div>
                </div>
                
                {/* CRAZY SPECIAL Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                  🔥 CRAZY!
                </div>

                {/* Special Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  🎉
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
                  Crazy In-Store Specials 🎉
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Don't miss out on our incredible in-store specials! Limited time offers that you won't believe.
                </p>

                {/* Special Highlight */}
                <div className="mb-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-4 border-2 border-dashed border-red-300 dark:border-red-700">
                  <p className="font-poppins text-red-700 dark:text-red-300 text-center font-bold text-lg mb-2">
                    🔥 CRAZY DEALS! 🔥
                  </p>
                  <p className="font-poppins text-spa-beige-700 dark:text-spa-beige-300 text-sm text-center">
                    Visit our spa to discover amazing specials starting from just R1.00!
                  </p>
                </div>

                {/* Call Out */}
                <div className="mb-4">
                  <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 text-sm leading-relaxed">
                    📍 Available exclusively at our spa location<br/>
                    ⏰ Limited time only - while stocks last!<br/>
                    💎 Premium treatments at unbelievable prices
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 text-red-600 dark:text-red-400 rounded-full text-xs font-medium">
                    Limited Time
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    In-Store Only
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-gold-100 to-spa-pink-100 dark:from-spa-gold-900/30 dark:to-spa-pink-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    Amazing Value
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'd like to know more about the Crazy In-Store Specials. What deals are currently available?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Ask About Specials
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* 2 Hour 5 Treatments Package */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-beige-50 to-spa-pink-50 dark:from-slate-700 dark:to-slate-800">
                <div className="relative w-full h-full p-1">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src="/2hour-treatments.png"
                      alt="2 Hour 5 Treatments Package"
                      fill
                      quality={100}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R650</div>
                    <div className="text-xs line-through opacity-80 whitespace-nowrap">R950</div>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">2 Hours</span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  🧖‍♀️
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
                  2 Hour 5 Treatments Package
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Memorable Events Celebrated @ Style and BeYouTi Zone
                </p>

                {/* Highlight */}
                <div className="mb-4 bg-spa-pink-50 dark:bg-spa-pink-900/20 rounded-lg p-3">
                  <p className="font-poppins text-spa-pink-700 dark:text-spa-pink-300 text-sm font-medium text-center">
                    Making Memories 🧖‍♀️🧖‍♂️👣👭👩‍❤️‍👨<br/>
                    Spending Precious Moments together
                  </p>
                </div>

                {/* Treatments Included */}
                <div className="mb-4">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                    The Pamper Package Includes: 5 Treatments
                  </h4>
                  <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                    <li>• Hotstones / Swedish Full Body Massage: 60-mins</li>
                    <li>• Indian head massage: 10-mins</li>
                    <li>• Back Exfoliation: 10mins</li>
                    <li>• Express Pedicure: 20-mins</li>
                    <li>• Leg Glow Exfoliation: 10mins</li>
                    <li>• Nail Polish painted on toes for the Lady (optional included) 🌹</li>
                  </ul>
                  <p className="text-sm text-spa-beige-700 dark:text-spa-beige-300 mt-2 font-medium">
                    Treatment time: 2 hours
                  </p>
                </div>

                {/* Pricing Info */}
                <div className="mb-4 bg-spa-gold-50 dark:bg-spa-gold-900/20 rounded-lg p-3">
                  <p className="text-sm text-spa-beige-700 dark:text-spa-beige-300 font-medium text-center">
                    <span className="line-through text-spa-beige-500">Was R950</span> → <span className="text-spa-pink-600 dark:text-spa-pink-400 font-bold">Now R650</span>
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Save R300
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    5 Treatments
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    2 Hours
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'm interested in the 2 Hour 5 Treatments Package (R650, was R950). This includes 5 treatments over 2 hours. When is your next availability?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book 5 Treatments Package
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Couples Deluxe Love Package */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-gold-50 to-spa-pink-50 dark:from-slate-700 dark:to-slate-800">
                <div className="relative w-full h-full p-1">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src="/couples-love.jpeg"
                      alt="Couples Deluxe Love Package"
                      fill
                      quality={100}
                      className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[90px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R1,950</div>
                    <div className="text-xs line-through opacity-80 whitespace-nowrap">R2,500</div>
                  </div>
                </div>
                
                {/* DELUXE Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-spa-pink-600 to-spa-gold-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  💎 DELUXE
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
                  Couples Deluxe Love Package 💕
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Personal, Private, Affordable and very Relaxing Environment with an Amazing Service @ your doorstep 💯👌
                </p>

                {/* Exclusive Highlight */}
                <div className="mb-4 bg-gradient-to-r from-spa-pink-50 to-spa-gold-50 dark:from-spa-pink-900/20 dark:to-spa-gold-900/20 rounded-lg p-4 border-2 border-spa-gold-300 dark:border-spa-gold-700">
                  <p className="font-poppins text-spa-gold-700 dark:text-spa-gold-300 text-center font-bold text-base mb-1">
                    💎 Exclusive Deluxe Experience 💎
                  </p>
                  <p className="font-poppins text-spa-beige-700 dark:text-spa-beige-300 text-sm text-center">
                    Only Style and Beyouti Zone Day Spa
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                    What Makes This Package Special:
                  </h4>
                  <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">✨</span>
                      <span>Personal & Private environment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">💆‍♀️</span>
                      <span>Premium deluxe treatments for couples</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">🏠</span>
                      <span>Amazing service @ your doorstep</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">💕</span>
                      <span>Perfect for romantic moments together</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">🌟</span>
                      <span>Very relaxing & affordable luxury</span>
                    </li>
                  </ul>
                </div>

                {/* Pricing Info */}
                <div className="mb-4 bg-spa-pink-50 dark:bg-spa-pink-900/20 rounded-lg p-3">
                  <p className="text-sm text-spa-beige-700 dark:text-spa-beige-300 font-medium text-center">
                    <span className="line-through text-spa-beige-500">Was R2,500</span> → <span className="text-spa-pink-600 dark:text-spa-pink-400 font-bold">Now R1,950</span>
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Save R550
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-gold-100 to-spa-pink-100 dark:from-spa-gold-900/30 dark:to-spa-pink-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    Deluxe Package
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    For Couples
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'm interested in the Couples Deluxe Love Package (R1,950, was R2,500). Please tell me more about this exclusive deluxe experience for couples."
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book Deluxe Love Package
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Come Relax - Call to Action */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-beige-50 to-spa-gold-50 dark:from-slate-700 dark:to-slate-800">
                <div className="relative w-full h-full p-1">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src="/ximg3.jpeg"
                      alt="Facials at Style and Beyouti Spa"
                      fill
                      quality={100}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* BOOK NOW Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg animate-pulse">
                  <div className="text-center">
                    <div className="text-xs whitespace-nowrap">📲 BOOK NOW</div>
                  </div>
                </div>
                
                {/* Relax Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  ✨ RELAX
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  🧖‍♀️
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
                  Come Relax at Style & Beyouti Spa
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed text-lg font-medium">
                  Come Relax your Mind 🖼️🎨🪷 Body 🧖🏻‍♀️🧖🏻‍♂️ Tummy 🍱🍾🥂
                </p>

                {/* Urgent Call to Action */}
                <div className="mb-4 bg-gradient-to-r from-spa-pink-50 via-spa-gold-50 to-spa-beige-50 dark:from-spa-pink-900/20 dark:via-spa-gold-900/20 dark:to-spa-beige-900/20 rounded-lg p-4 border-2 border-spa-pink-300 dark:border-spa-pink-700">
                  <p className="font-poppins text-spa-pink-700 dark:text-spa-pink-300 text-center font-bold text-xl mb-2">
                    Don't Delay! 📲
                  </p>
                  <p className="font-poppins text-spa-beige-700 dark:text-spa-beige-300 text-center text-base">
                    Book your appointment today
                  </p>
                </div>

                {/* What We Relax */}
                <div className="mb-4">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2 text-center">
                    Complete Relaxation Experience:
                  </h4>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-spa-beige-50 dark:bg-spa-beige-900/10 rounded-lg p-3">
                      <div className="text-2xl mb-1">🖼️🎨</div>
                      <p className="text-xs text-spa-beige-600 dark:text-spa-beige-400 font-medium">Mind</p>
                    </div>
                    <div className="bg-spa-pink-50 dark:bg-spa-pink-900/10 rounded-lg p-3">
                      <div className="text-2xl mb-1">🧖‍♀️🧖‍♂️</div>
                      <p className="text-xs text-spa-beige-600 dark:text-spa-beige-400 font-medium">Body</p>
                    </div>
                    <div className="bg-spa-gold-50 dark:bg-spa-gold-900/10 rounded-lg p-3">
                      <div className="text-2xl mb-1">🍱🥂</div>
                      <p className="text-xs text-spa-beige-600 dark:text-spa-beige-400 font-medium">Tummy</p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mb-4 bg-spa-gold-50 dark:bg-spa-gold-900/20 rounded-lg p-3">
                  <p className="text-sm text-spa-beige-700 dark:text-spa-beige-300 font-bold text-center">
                    📲 Call/WhatsApp: 061 774 7378
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Mind • Body • Tummy
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-gold-100 to-spa-pink-100 dark:from-spa-gold-900/30 dark:to-spa-pink-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    Book Now
                  </span>
                </div>

                {/* Booking Buttons */}
                <div className="space-y-2">
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <Link 
                      href="https://wa.me/27617747378?text=Hi! I'd like to relax my mind, body, and tummy at Style & Beyouti Spa. Please help me book an appointment!"
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Book via WhatsApp
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium rounded-full transition-all duration-300"
                  >
                    <Link 
                      href="tel:0617747378"
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Call 061 774 7378
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Massage with Facial - Revive and Instant Glow Package */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden p-4 bg-gradient-to-br from-spa-gold-50 to-spa-beige-50 dark:from-slate-700 dark:to-slate-800">
                <div className="relative h-full w-full rounded-xl overflow-hidden shadow-inner">
                  <Image
                    src="/treat-yourself.png"
                    alt="Massage with Facial - Revive and Instant Glow"
                    fill
                    quality={100}
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R650</div>
                    <div className="text-xs line-through opacity-80 whitespace-nowrap">R780</div>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">1hr 30mins</span>
                </div>

                {/* Icon */}
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
                  <span className="text-sm text-spa-beige-600 dark:text-spa-beige-400">(5.0)</span>
                </div>

                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                  Massage with Facial ✨
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed font-semibold">
                  Revive and Instant Glow Package
                </p>

                {/* Package Highlight */}
                <div className="mb-4 bg-gradient-to-r from-spa-gold-50 to-spa-pink-50 dark:from-spa-gold-900/20 dark:to-spa-pink-900/20 rounded-lg p-3 border-2 border-spa-gold-300 dark:border-spa-gold-700">
                  <p className="font-poppins text-spa-gold-700 dark:text-spa-gold-300 text-center font-bold text-base">
                    ✨ Includes: 4 Treatments ✨
                  </p>
                  <p className="font-poppins text-spa-beige-700 dark:text-spa-beige-300 text-sm text-center mt-1">
                    R650pp
                  </p>
                </div>

                {/* Treatments Included */}
                <div className="mb-4">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                    Package Includes:
                  </h4>
                  <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                    <li>• Hotstones / Swedish Full Body Massage: 50-mins</li>
                    <li>• Indian head massage: 5-mins</li>
                    <li>• Back Exfoliation: 5mins</li>
                    <li>• Instant Glow Facial leaving your skin soft refreshed and Glowing: 30mins 👌💯</li>
                  </ul>
                  <p className="text-sm text-spa-beige-700 dark:text-spa-beige-300 mt-2 font-medium">
                    Treatment time: 1hr 30mins
                  </p>
                </div>

                {/* Glow Highlight */}
                <div className="mb-4 bg-spa-pink-50 dark:bg-spa-pink-900/20 rounded-lg p-3">
                  <p className="font-poppins text-spa-pink-700 dark:text-spa-pink-300 text-sm font-medium text-center">
                    💆‍♀️ Full Body Massage + Glowing Facial 💯<br/>
                    <span className="text-xs">Perfect combination for ultimate relaxation & beauty</span>
                  </p>
                </div>

                {/* Pricing Info */}
                <div className="mb-4 bg-spa-gold-50 dark:bg-spa-gold-900/20 rounded-lg p-3">
                  <p className="text-sm text-spa-beige-700 dark:text-spa-beige-300 font-medium text-center">
                    <span className="line-through text-spa-beige-500">Was R780</span> → <span className="text-spa-pink-600 dark:text-spa-pink-400 font-bold">Now R650</span>
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Save R130
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-gold-100 to-spa-pink-100 dark:from-spa-gold-900/30 dark:to-spa-pink-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    4 Treatments
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Instant Glow
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'm interested in the Revive and Instant Glow Package (R650pp). It includes massage, facial, and 4 treatments for 1hr 30mins. When is your next availability?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book Revive & Glow Package
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Treat Yourself Package */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-96 overflow-hidden bg-gradient-to-br from-spa-pink-50 to-spa-gold-50 dark:from-slate-700 dark:to-slate-800">
                <div className="relative w-full h-full p-1">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src="/ximg.jpeg"
                      alt="Treat Yourself Package"
                      fill
                      quality={100}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R399</div>
                    <div className="text-xs line-through opacity-80 whitespace-nowrap">R550</div>
                  </div>
                </div>
                
                {/* CRAZILY LOW Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                  🔥 CRAZILY LOW!
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  💅
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
                  Treat Yourself Package 💅
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Great news 👩‍👩‍👧‍👦👫👭👨‍👧 crazily low Specials @ Style and BeYouti Zone Day Spa 👌💅👣🧖‍♂️🧖‍♀️
                </p>

                {/* Special Highlight */}
                <div className="mb-4 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 dark:from-red-900/20 dark:via-orange-900/20 dark:to-yellow-900/20 rounded-lg p-4 border-2 border-dashed border-red-300 dark:border-red-700">
                  <p className="font-poppins text-red-700 dark:text-red-300 text-center font-bold text-lg mb-2">
                    🔥 CRAZILY LOW SPECIAL! 🔥
                  </p>
                  <p className="font-poppins text-spa-beige-700 dark:text-spa-beige-300 text-sm text-center">
                    Limited time only - Don't miss out!
                  </p>
                </div>

                {/* Mission Statement */}
                <div className="mb-4 bg-spa-pink-50 dark:bg-spa-pink-900/20 rounded-lg p-3">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2 text-center">
                    Our Mission:
                  </h4>
                  <p className="font-poppins text-spa-pink-700 dark:text-spa-pink-300 text-sm text-center">
                    We want to be able to add to your care of Body 👌 Mind 🧠 and Spirit 🤗👌
                  </p>
                </div>

                {/* Body Mind Spirit Grid */}
                <div className="mb-4">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-spa-pink-50 dark:bg-spa-pink-900/10 rounded-lg p-3">
                      <div className="text-2xl mb-1">👌</div>
                      <p className="text-xs text-spa-beige-600 dark:text-spa-beige-400 font-medium">Body</p>
                    </div>
                    <div className="bg-spa-gold-50 dark:bg-spa-gold-900/10 rounded-lg p-3">
                      <div className="text-2xl mb-1">🧠</div>
                      <p className="text-xs text-spa-beige-600 dark:text-spa-beige-400 font-medium">Mind</p>
                    </div>
                    <div className="bg-spa-beige-50 dark:bg-spa-beige-900/10 rounded-lg p-3">
                      <div className="text-2xl mb-1">🤗</div>
                      <p className="text-xs text-spa-beige-600 dark:text-spa-beige-400 font-medium">Spirit</p>
                    </div>
                  </div>
                </div>

                {/* For Everyone */}
                <div className="mb-4 bg-spa-gold-50 dark:bg-spa-gold-900/20 rounded-lg p-3">
                  <p className="font-poppins text-spa-gold-700 dark:text-spa-gold-300 text-sm font-medium text-center">
                    👩‍👩‍👧‍👦 Perfect for families, friends & couples 👫👭
                  </p>
                </div>

                {/* Pricing Info */}
                <div className="mb-4 bg-spa-beige-50 dark:bg-spa-beige-900/20 rounded-lg p-3">
                  <p className="text-sm text-spa-beige-700 dark:text-spa-beige-300 font-medium text-center">
                    <span className="line-through text-spa-beige-500">Was R550</span> → <span className="text-spa-pink-600 dark:text-spa-pink-400 font-bold">Now R399</span>
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  <span className="px-3 py-1 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 text-red-600 dark:text-red-400 rounded-full text-xs font-medium">
                    Save R151
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Body • Mind • Spirit
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-gold-100 to-spa-pink-100 dark:from-spa-gold-900/30 dark:to-spa-pink-900/30 text-spa-gold-600 dark:text-spa-gold-400 rounded-full text-xs font-medium">
                    For Everyone
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'm interested in the Treat Yourself Package (R399, was R550). This crazily low special sounds perfect for body, mind and spirit! When is your next availability?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book Treat Yourself Package
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Kids Pamper */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden p-4 bg-gradient-to-br from-spa-pink-50 to-spa-gold-50 dark:from-slate-700 dark:to-slate-800">
                <div className="relative h-full w-full rounded-xl overflow-hidden shadow-inner">
                  <Image
                    src="/kids6.jpeg"
                    alt="Kids Pamper Package"
                    fill
                    quality={100}
                    priority
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
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
              <div className="relative h-80 overflow-hidden p-4 bg-gradient-to-br from-spa-gold-50 to-spa-beige-50 dark:from-slate-700 dark:to-slate-800">
                <div className="relative h-full w-full rounded-xl overflow-hidden shadow-inner">
                  <Image
                    src="/couples.jpeg"
                    alt="Couples Combo for 2 people"
                    fill
                    quality={100}
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
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
                  <span className="text-sm font-medium">60 minutes</span>
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
                  Personal, Private, Affordable and very Relaxing Environment. The Pamper Package for 2 people.
                </p>

                {/* Treatments Included */}
                <div className="mb-4">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                    Treatments Included:
                  </h4>
                  <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                    <li>• Hotstones / Swedish Full Body Massage: 50 mins</li>
                    <li>• Indian Head Massage: 10 mins</li>
                  </ul>
                  <p className="text-sm text-spa-beige-600 dark:text-spa-beige-400 mt-2 font-medium">
                    Treatment time: 1 Hour
                  </p>
                </div>

                {/* Pricing Info */}
                <div className="mb-4 bg-spa-gold-50 dark:bg-spa-gold-900/20 rounded-lg p-3">
                  <p className="text-sm text-spa-beige-700 dark:text-spa-beige-300 font-medium">
                    <span className="line-through text-spa-beige-500">Was R900</span> → <span className="text-spa-pink-600 dark:text-spa-pink-400 font-bold">Now R650</span>
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Save R250
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    For 2 People
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

            {/* Aromatherapy Pamper Package for 2 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden p-4 bg-gradient-to-br from-spa-beige-50 to-spa-pink-50 dark:from-slate-700 dark:to-slate-800">
                <div className="relative h-full w-full rounded-xl overflow-hidden shadow-inner">
                  <Image
                    src="/deal-two.jpeg"
                    alt="Aromatherapy Pamper Package for 2 People"
                    fill
                    quality={100}
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[90px]">
                  <div className="text-center">
                    <div className="text-sm font-bold whitespace-nowrap">R550</div>
                    <div className="text-xs whitespace-nowrap">FOR 2 PEOPLE</div>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">40 minutes</span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  🌞
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
                  Aromatherapy Pamper for 2
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  You only pay R550 for 2 People. Perfect pamper session with aromatherapy and relaxation treatments.
                </p>

                {/* Treatments Included */}
                <div className="mb-4">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                    Treatments Included:
                  </h4>
                  <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1">
                    <li>🌞 20mins Aromatherapy Neck, Back and Shoulder Massage</li>
                    <li>• Back Exfoliation: 5 mins</li>
                    <li>• Indian Head Massage: 5 mins 👌💯</li>
                  </ul>
                  <p className="text-sm text-spa-beige-600 dark:text-spa-beige-400 mt-2 font-medium">
                    Treatment time: 40 minutes
                  </p>
                </div>

                {/* Bonus */}
                <div className="mb-4 bg-spa-pink-50 dark:bg-spa-pink-900/20 rounded-lg p-3">
                  <p className="font-poppins text-spa-pink-700 dark:text-spa-pink-300 text-sm font-medium">
                    🦶 Plus a Free 10mins Foot Massage
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    For 2 People
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    40 Minutes
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
                    href="https://wa.me/27617747378?text=Hi! I'm interested in the Aromatherapy Pamper for 2 (R550 for 2 people, 40 mins). When is your next availability?"
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book Aromatherapy Pamper
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Massage Treatments 60mins */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden p-4 bg-gradient-to-br from-spa-beige-50 to-spa-pink-50 dark:from-slate-700 dark:to-slate-800">
                <div className="relative h-full w-full rounded-xl overflow-hidden shadow-inner">
                  <Image
                    src="/service2.png"
                    alt="Massage Treatments 60mins"
                    fill
                    quality={100}
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
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
              <div className="relative h-80 overflow-hidden p-4 bg-gradient-to-br from-spa-pink-50 to-spa-gold-50 dark:from-slate-700 dark:to-slate-800">
                <div className="relative h-full w-full rounded-xl overflow-hidden shadow-inner">
                  <Image
                    src="/service3.png"
                    alt="Just for you Special Package"
                    fill
                    quality={100}
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
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
              <div className="relative h-80 overflow-hidden p-4 bg-gradient-to-br from-spa-gold-50 to-spa-beige-50 dark:from-slate-700 dark:to-slate-800">
                <div className="relative h-full w-full rounded-xl overflow-hidden shadow-inner">
                  <Image
                    src="/facials.jpeg"
                    alt="Amazing Instant Glow Facial"
                    fill
                    quality={100}
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
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
              <div className="relative h-80 overflow-hidden p-4 bg-gradient-to-br from-spa-beige-50 to-spa-gold-50 dark:from-slate-700 dark:to-slate-800">
                <div className="relative h-full w-full rounded-xl overflow-hidden shadow-inner">
                  <Image
                    src="/massage-combo.png"
                    alt="90mins Hotstones Garden Massage"
                    fill
                    quality={100}
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
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
              <div className="relative h-80 overflow-hidden p-4 bg-gradient-to-br from-spa-pink-50 to-spa-beige-50 dark:from-slate-700 dark:to-slate-800">
                <div className="relative h-full w-full rounded-xl overflow-hidden shadow-inner">
                  <Image
                    src="/5amazing.jpeg"
                    alt="Amazing 5 Treatments with Pool"
                    fill
                    quality={100}
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
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
                  src="/underfood.jpeg"
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
                  src="/new-kids.jpeg"
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

            {/* Group Meals */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:scale-105 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/food3.jpeg"
                  alt="Group Meals - Chicken Biryani and Wraps"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                
                {/* Group Meals Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[80px]">
                  <div className="text-center">
                    <div className="text-xs whitespace-nowrap">GROUP</div>
                    <div className="text-sm font-bold whitespace-nowrap">MEALS</div>
                  </div>
                </div>

                {/* Group Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">
                  👭
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                  Group Meals
                </h3>
                
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                  Lunch will be served in Style with Fancy Decor 🍽️ Food in food warmers and will be displayed with Glassware, Crockery, Cutlery and Table Cloths. Stylishly decorated and set up to enjoy the well prepared meal 👌 with a Soft Drink/Juice to quench the thirst 🍹
                </p>

                {/* Group Meals Highlight */}
                <div className="mb-4 bg-spa-gold-50 dark:bg-spa-gold-900/20 rounded-lg p-3">
                  <p className="font-poppins text-spa-gold-700 dark:text-spa-gold-300 text-sm font-medium">
                    💡 The Biryani is recommended for Groups as it is Cost effective and are generous portions - ideal meal for groups 👭👨‍👩‍👦‍👦💑👌
                  </p>
                </div>

                {/* Menu Options */}
                <div className="mb-4">
                  <h4 className="font-playfair font-semibold text-sm text-spa-black dark:text-spa-white mb-2">
                    Menu Options:
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-spa-beige-50 dark:bg-spa-beige-900/10 rounded-lg p-3">
                      <p className="font-poppins font-semibold text-spa-black dark:text-spa-white text-sm mb-1">
                        🍛 Chicken Biryani (Recommended for Groups)
                      </p>
                      <ul className="text-sm text-spa-beige-600 dark:text-spa-beige-400 space-y-1 ml-4">
                        <li>• Cucumber Sourmilk Salad</li>
                        <li>• Plus Carrot Salad</li>
                        <li>• Pickles</li>
                      </ul>
                    </div>
                    
                    <div className="bg-spa-beige-50 dark:bg-spa-beige-900/10 rounded-lg p-3">
                      <p className="font-poppins font-semibold text-spa-black dark:text-spa-white text-sm">
                        🌯 Or Chicken Wrap
                      </p>
                      <p className="text-sm text-spa-beige-600 dark:text-spa-beige-400 ml-4">
                        Served with Chips 🍟 and a soft drink
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Stylish Setup
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Generous Portions
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium">
                    Cost Effective
                  </span>
                </div>

                {/* Booking Button */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link 
                    href="https://wa.me/27617747378?text=Hi! I'd like to order Group Meals for my spa booking. I'm interested in the Chicken Biryani or Chicken Wrap options with stylish setup. Please provide pricing and availability."
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Order Group Meals
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

      {/* Interactive Meal Options Section */}
      <section className="py-20 bg-gradient-to-b from-spa-white via-spa-beige-50 to-spa-pink-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-lg mb-6">
              <Sparkles className="w-8 h-8 text-spa-white" />
            </div>
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
              Order Your Meal & Extras
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-3xl mx-auto">
              Select from our delicious meal options, drinks, activities, and special occasion extras. 
              Your selections will be sent directly via WhatsApp for easy ordering!
            </p>
          </div>

          <MealOptions />
        </div>
      </section>

      {/* Kids Services Highlight Section */}
      <section className="py-20 bg-gradient-to-r from-spa-pink-50 via-spa-beige-50 to-spa-gold-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/kids4.jpeg"
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

              <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/xnew-kids.jpeg"
                  alt="Kids spa fun activities"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-gold-500/20 group-hover:bg-spa-gold-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Kids Fun Activities
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
                  alt="Group meals with stylish setup"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-spa-gold-500/20 group-hover:bg-spa-gold-500/40 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="font-poppins text-spa-white text-xs font-medium">
                    Group Meals
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
