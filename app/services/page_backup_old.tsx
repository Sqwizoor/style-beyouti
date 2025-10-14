import { Metadata } from "next"
import { Sparkles, Phone, MessageCircle, Star, Clock } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "Our Services - Style & Beyouti Zone Spa | Exclusive Deals & Packages",
  description: "Discover our exclusive spa deals and packages including garden massages, couples packages, facial treatments, and premium spa experiences. Affordable luxury at your doorstep.",
  keywords: "spa services, garden massage, couples spa, facial treatments, spa packages, relaxation treatments, affordable spa, mobile spa, spa deals",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-spa-beige-50 via-spa-pink-50 to-spa-gold-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-lg mb-6">
            <Sparkles className="w-8 h-8 text-spa-white" />
          </div>
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-spa-black dark:text-spa-white mb-6">
            Exclusive Deals & Packages
          </h1>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-3xl mx-auto mb-8">
            Discover our current specials designed to give you exceptional value while experiencing our premium spa treatments
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      "Manicure and pedicure services",
      "Beauty enhancement treatments",
      "Perfect finishing touches"
    ],
    badge: "Beauty Complete"
  }
]

const addOnServices = [
  "Hot stone therapy",
  "Reflexology treatment",
  "Scalp massage",
  "Eye treatment",
  "Hand and foot care",
  "Essential oil blends"
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-spa-pink-50 to-spa-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-2xl mb-8 animate-float">
              <Sparkles className="w-10 h-10 text-spa-white" />
            </div>
            
            <h1 className="font-playfair font-bold text-5xl sm:text-6xl text-spa-black mb-6">
              Our Spa Services
            </h1>
            <p className="font-lora text-xl text-spa-beige-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of professional spa treatments designed to rejuvenate your mind, 
              body, and spirit in the comfort of your own space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="tel:0617747378" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Book Now</span>
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-spa-pink-300 text-spa-pink-600 hover:bg-spa-pink-50 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
              >
                <Link href="/contact">
                  Custom Package
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-spa-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-br from-spa-white to-spa-beige-50 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-spa-pink-500/20 text-spa-pink-700 border border-spa-pink-500/30 font-poppins">
                      {service.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-spa-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <service.icon className="w-6 h-6 text-spa-pink-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-spa-white">
                    <div className="flex items-center space-x-4 text-sm font-poppins">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </span>
                      <span className="text-spa-gold-300 font-semibold text-base">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="font-playfair text-2xl text-spa-black mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="font-poppins text-spa-beige-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-poppins font-semibold text-spa-black mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-spa-beige-600">
                          <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-spa-white text-xs">✓</span>
                          </div>
                          <span className="font-poppins text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      asChild
                      className="flex-1 bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300"
                    >
                      <Link href="tel:0617747378">
                        Book This Service
                      </Link>
                    </Button>
                    <Button 
                      asChild
                      variant="outline"
                      className="flex-1 border-spa-pink-300 text-spa-pink-600 hover:bg-spa-pink-50 font-poppins rounded-full"
                    >
                      <Link href="https://wa.me/0617747378?text=Hi, I would like to know more about the {service.title} service" target="_blank">
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 bg-gradient-to-b from-spa-beige-50 to-spa-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-8">
            Add-On Services
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 mb-12 max-w-2xl mx-auto">
            Enhance your spa experience with our additional treatments and services
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {addOnServices.map((addon, index) => (
              <div 
                key={index}
                className="group p-4 bg-spa-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer animate-slideIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-6 h-6 text-spa-pink-600" />
                  </div>
                  <p className="font-poppins text-sm text-spa-black font-medium">
                    {addon}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Custom Package Design Section */}
          <div className="bg-gradient-to-br from-spa-pink-50 via-spa-white to-spa-gold-50 rounded-3xl p-8 max-w-6xl mx-auto shadow-2xl border-0">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-2xl mb-6">
                <Heart className="w-10 h-10 text-spa-white" />
              </div>
              <h3 className="font-playfair font-bold text-4xl text-spa-black mb-4">
                Custom Spa Packages
              </h3>
              <p className="font-lora text-xl text-spa-beige-700 mb-6 max-w-3xl mx-auto leading-relaxed">
                Create your perfect spa experience tailored just for you! We design personalized packages that match your preferences, budget, and special occasions.
              </p>
              <div className="flex items-center justify-center space-x-2 text-2xl mb-8">
                <span>👌</span>
                <span>🌹</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Package Customization Form */}
              <div className="space-y-8">
                <div className="bg-spa-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-playfair font-bold text-2xl text-spa-black mb-6 text-center">
                    Please provide the following info to customize the perfect package just for you 👌🌹
                  </h4>
                  
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h5 className="font-poppins font-semibold text-lg text-spa-pink-600 flex items-center">
                        📅 Date & Timing
                      </h5>
                      <p className="font-poppins text-spa-beige-600 pl-6">
                        • Preferred date for your spa session<br/>
                        • Time preference (morning, afternoon, evening)<br/>
                        • Any specific scheduling requirements
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-poppins font-semibold text-lg text-spa-pink-600 flex items-center">
                        👥 Number of People
                      </h5>
                      <p className="font-poppins text-spa-beige-600 pl-6">
                        • How many people will be joining?<br/>
                        • Age groups (if including teens/children)<br/>
                        • Any special needs or accommodations
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-poppins font-semibold text-lg text-spa-pink-600 flex items-center">
                        🎉 Special Occasion or Pamper Day
                      </h5>
                      <p className="font-poppins text-spa-beige-600 pl-6">
                        • Birthday celebration<br/>
                        • Bridal shower or bachelorette<br/>
                        • Anniversary or romantic couples session<br/>
                        • Just because you deserve it! ✨
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-poppins font-semibold text-lg text-spa-pink-600 flex items-center">
                        💰 Budget Guideline
                      </h5>
                      <p className="font-poppins text-spa-beige-600 pl-6">
                        • Your comfortable budget range<br/>
                        • Per person or total budget<br/>
                        • We'll maximize value within your range
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-poppins font-semibold text-lg text-spa-pink-600 flex items-center">
                        ✨ Preferences & Suggestions
                      </h5>
                      <p className="font-poppins text-spa-beige-600 pl-6">
                        • Favorite treatments or must-haves<br/>
                        • Essential oil preferences<br/>
                        • Pressure preferences (light, medium, firm)<br/>
                        • Any allergies or sensitivities<br/>
                        • Music or ambiance preferences
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-poppins font-semibold text-lg text-spa-pink-600 flex items-center">
                        🍽️ Meals & Refreshments
                      </h5>
                      <p className="font-poppins text-spa-beige-600 pl-6">
                        • Light refreshments included<br/>
                        • Full meal service available<br/>
                        • Dietary requirements or preferences<br/>
                        • Special celebration treats
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Package Benefits & Booking */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-spa-gold-50 to-spa-pink-50 p-6 rounded-2xl">
                  <h4 className="font-playfair font-bold text-2xl text-spa-black mb-6">
                    Why Choose Custom Packages?
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-spa-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-spa-white text-sm">✓</span>
                      </div>
                      <p className="font-poppins text-spa-beige-700">
                        <strong>Tailored Experience:</strong> Every detail customized to your preferences
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-spa-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-spa-white text-sm">✓</span>
                      </div>
                      <p className="font-poppins text-spa-beige-700">
                        <strong>Better Value:</strong> Optimized packages within your budget
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-spa-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-spa-white text-sm">✓</span>
                      </div>
                      <p className="font-poppins text-spa-beige-700">
                        <strong>Flexible Timing:</strong> Scheduled around your convenience
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-spa-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-spa-white text-sm">✓</span>
                      </div>
                      <p className="font-poppins text-spa-beige-700">
                        <strong>Special Touches:</strong> Perfect for celebrations and special moments
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-spa-white p-6 rounded-2xl shadow-lg text-center">
                  <h4 className="font-playfair font-bold text-2xl text-spa-black mb-4">
                    Ready to Design Your Perfect Package?
                  </h4>
                  <p className="font-poppins text-spa-beige-700 mb-6">
                    Contact us directly to discuss your requirements and receive your personalized package proposal.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      asChild
                      size="lg"
                      className="w-full bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Link href="https://wa.me/0617747378?text=Hi!%20I%27d%20like%20to%20design%20a%20custom%20spa%20package.%20Here%20are%20my%20details:%0A%0ADate:%20%0ANumber%20of%20people:%20%0ASpecial%20occasion:%20%0ABudget%20range:%20%0APreferences:%20%0AMeals%20included:%20%0A%0APlease%20help%20me%20create%20the%20perfect%20package!" className="flex items-center justify-center space-x-2" target="_blank">
                        <MessageCircle className="w-5 h-5" />
                        <span>WhatsApp Custom Package Request</span>
                      </Link>
                    </Button>
                    
                    <Button 
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full border-2 border-spa-pink-300 text-spa-pink-600 hover:bg-spa-pink-50 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
                    >
                      <Link href="tel:0617747378" className="flex items-center justify-center space-x-2">
                        <Phone className="w-5 h-5" />
                        <span>Call Us - 061 774 7378</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-spa-beige-100 to-spa-pink-100 p-6 rounded-2xl text-center">
                  <blockquote className="font-lora text-lg text-spa-black italic mb-4">
                    "My smile is my logo. My personality is my business card. And the way I make my customers feel is my trademark."
                  </blockquote>
                  <cite className="font-poppins font-semibold text-spa-pink-600">- Style & Beyouti Zone Spa</cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food, Drinks & Activities Section */}
      <section className="py-20 bg-gradient-to-b from-spa-white to-spa-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-spa-gold-400 to-spa-pink-400 rounded-full shadow-2xl mb-6">
              <span className="text-4xl">🍽️</span>
            </div>
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-6">
              Food, Drinks & Activities
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 max-w-3xl mx-auto">
              Complete your spa experience with delicious meals, refreshing drinks, and fun activities. 
              Perfect for special occasions and memorable celebrations!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Snacks & Light Options */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-spa-white to-spa-beige-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-pink-400 to-spa-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🍟</span>
                  </div>
                  <CardTitle className="font-playfair text-2xl text-spa-black">Snacks & Light Bites</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-spa-pink-50 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-poppins font-semibold text-spa-black">Snack Basket</h4>
                    <Badge className="bg-spa-pink-500 text-spa-white">R80 pp</Badge>
                  </div>
                  <p className="font-poppins text-spa-beige-600 text-sm">
                    Chips 🍟 with soft drink 🥤 - perfect for light snacking
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Main Meals */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-spa-white to-spa-gold-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-gold-400 to-spa-gold-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🍽️</span>
                  </div>
                  <CardTitle className="font-playfair text-2xl text-spa-black">Main Meals</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-spa-gold-50 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-poppins font-semibold text-spa-black">Meal Options</h4>
                    <Badge className="bg-spa-gold-500 text-spa-white">R150 pp</Badge>
                  </div>
                  <div className="space-y-2 text-sm font-poppins text-spa-beige-600">
                    <p>🌯 <strong>Chicken Wrap</strong> with chips & soft drink</p>
                    <p>🍗 <strong>Quarter Chicken</strong> with chips & roll</p>
                    <p>🥩 <strong>Halaal Meats:</strong> T-Bone Steak with Wors, served with Pap & Chakalaka</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Beverages */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-spa-white to-spa-pink-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-beige-400 to-spa-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🥤</span>
                  </div>
                  <CardTitle className="font-playfair text-2xl text-spa-black">Beverages</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-spa-beige-50 p-3 rounded-lg">
                    <h5 className="font-poppins font-semibold text-spa-black mb-2">Non-Alcoholic</h5>
                    <div className="space-y-1 text-sm font-poppins text-spa-beige-600">
                      <div className="flex justify-between">
                        <span>🍹 Mojito / Juice</span>
                        <span className="font-semibold">R40</span>
                      </div>
                      <div className="flex justify-between">
                        <span>🍹 Jug</span>
                        <span className="font-semibold">R70</span>
                      </div>
                      <div className="flex justify-between">
                        <span>☕ Cappuccino with Truffle Biscuits</span>
                        <span className="font-semibold">R40</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-spa-pink-50 p-3 rounded-lg">
                    <h5 className="font-poppins font-semibold text-spa-black mb-2">Alcoholic</h5>
                    <div className="space-y-1 text-sm font-poppins text-spa-beige-600">
                      <div className="flex justify-between">
                        <span>🍺 Ciders</span>
                        <span className="font-semibold">R40</span>
                      </div>
                      <div className="flex justify-between">
                        <span>🍷 Bottle of Wine</span>
                        <span className="font-semibold">R150</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-spa-blue-50 p-3 rounded-lg">
                    <div className="flex justify-between text-sm font-poppins">
                      <span className="text-spa-black font-semibold">🧊 Bag of Ice</span>
                      <span className="text-spa-beige-600 font-semibold">R40</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Activities */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-spa-white to-spa-gold-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-gold-400 to-spa-beige-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <CardTitle className="font-playfair text-2xl text-spa-black">Fun Activities</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-spa-gold-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-poppins font-semibold text-spa-black">🎨 Paint Session</h5>
                      <Badge className="bg-spa-gold-500 text-spa-white">R280 pp</Badge>
                    </div>
                    <p className="text-sm font-poppins text-spa-beige-600">
                      Canvas, paints & glass of wine included
                    </p>
                  </div>
                  
                  <div className="bg-spa-beige-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-poppins font-semibold text-spa-black">🧶 Tufting/Rug Making</h5>
                      <Badge className="bg-spa-beige-500 text-spa-white">R560 pp</Badge>
                    </div>
                    <p className="text-sm font-poppins text-spa-beige-600">
                      All materials included
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Occasion Add-ons */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-spa-white to-spa-pink-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎈</span>
                  </div>
                  <CardTitle className="font-playfair text-2xl text-spa-black">Special Occasions</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-spa-pink-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-poppins font-semibold text-spa-black">🎈 Basic Balloon Setup</h5>
                      <Badge className="bg-spa-pink-500 text-spa-white">R450</Badge>
                    </div>
                    <p className="text-sm font-poppins text-spa-beige-600">
                      Perfect for birthdays & celebrations
                    </p>
                  </div>
                  
                  <div className="bg-spa-gold-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-poppins font-semibold text-spa-black">🍽️ Table Setup</h5>
                      <Badge className="bg-spa-gold-500 text-spa-white">R50 pp</Badge>
                    </div>
                    <p className="text-sm font-poppins text-spa-beige-600">
                      Elegant table arrangements
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Braai Setup */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-spa-white to-spa-beige-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-spa-beige-400 to-spa-gold-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔥</span>
                  </div>
                  <CardTitle className="font-playfair text-2xl text-spa-black">Braai Setup</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-spa-beige-50 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-poppins font-semibold text-spa-black">🔥 Small Braai Stand</h5>
                    <Badge className="bg-spa-beige-500 text-spa-white">R150</Badge>
                  </div>
                  <p className="text-sm font-poppins text-spa-beige-600">
                    For 2 people, includes made fire & charcoal bag
                  </p>
                </div>
                
                <div className="text-center pt-4">
                  <p className="font-poppins text-spa-beige-600 text-sm italic">
                    Perfect for intimate outdoor spa experiences
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action for Food Services */}
          <div className="mt-16 bg-gradient-to-r from-spa-pink-100 via-spa-white to-spa-gold-100 rounded-3xl p-8 text-center">
            <h3 className="font-playfair font-bold text-3xl text-spa-black mb-4">
              Create Your Complete Experience
            </h3>
            <p className="font-lora text-xl text-spa-beige-700 mb-8 max-w-3xl mx-auto">
              Combine spa treatments with delicious food, refreshing drinks, and fun activities 
              for the ultimate celebration or relaxation day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="https://wa.me/0617747378?text=Hi!%20I%27d%20like%20to%20add%20food%20and%20activities%20to%20my%20spa%20package.%20Please%20send%20me%20the%20full%20menu%20and%20pricing!" className="flex items-center space-x-2" target="_blank">
                  <MessageCircle className="w-5 h-5" />
                  <span>Request Full Menu</span>
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-spa-pink-300 text-spa-pink-600 hover:bg-spa-pink-50 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
              >
                <Link href="tel:0617747378" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Discuss Options</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-spa-pink-400 via-spa-gold-400 to-spa-beige-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-spa-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-white mb-6">
              Ready to Experience Ultimate Relaxation?
            </h2>
            <p className="font-lora text-xl text-spa-white/90 mb-10 max-w-2xl mx-auto">
              Contact us today to book your personalized spa session and discover the luxury of at-home wellness treatments.
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
                <Link href="https://wa.me/0617747378?text=Hi, I would like to book a spa service" className="flex items-center space-x-2" target="_blank">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Booking</span>
                </Link>
              </Button>
            </div>

            <div className="mt-8">
              <p className="font-poppins text-spa-white/80 text-sm">
                💆‍♀️ Personal • Private • Affordable • Relaxing ✨
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}


