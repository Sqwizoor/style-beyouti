import { Metadata } from "next"
import { Sparkles, Heart, Waves, Home, Leaf, Clock, Phone, MessageCircle, Star } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "Spa Services - Style & Beyouti Zone Spa | Mobile Spa Treatments",
  description: "Discover our comprehensive spa services including full body massage, luxury facials, aromatherapy, at-home spa packages, and relaxation rituals. Professional mobile spa treatments at affordable prices.",
  keywords: "spa services, mobile massage, home facials, aromatherapy treatments, at-home spa, relaxation packages, beauty treatments, wellness services, nail treatments",
}

const services = [
  {
    title: "Full Body Massage",
    description: "Experience ultimate relaxation with our professional full body massage therapy, tailored to release tension and restore your natural balance.",
    icon: Heart,
    image: "/spa1.jpeg",
    price: "From R350",
    duration: "60-90 minutes",
    benefits: [
      "Stress relief and deep relaxation",
      "Improved blood circulation",
      "Muscle tension release",
      "Enhanced sleep quality"
    ],
    badge: "Most Popular"
  },
  {
    title: "Luxury Facials & Skin Treatments",
    description: "Rejuvenate your skin with our customized facial treatments using premium products designed for your unique skin type.",
    icon: Sparkles,
    image: "/dayspa2.jpeg",
    price: "From R280",
    duration: "45-75 minutes",
    benefits: [
      "Deep cleansing and purification",
      "Anti-aging and brightening",
      "Customized for your skin type",
      "Hydration and nourishment"
    ],
    badge: "Skin Specialist"
  },
  {
    title: "Aromatherapy Sessions",
    description: "Immerse yourself in the healing power of essential oils with our therapeutic aromatherapy treatments for mind, body, and spirit.",
    icon: Leaf,
    image: "/dayspa3.jpeg",
    price: "From R320",
    duration: "60 minutes",
    benefits: [
      "Natural healing with essential oils",
      "Mood enhancement and balance",
      "Respiratory and circulation benefits",
      "Customized scent selection"
    ],
    badge: "Natural Healing"
  },
  {
    title: "At-Home Spa Packages",
    description: "Complete spa experience delivered to your doorstep, combining multiple treatments for the ultimate luxury wellness day.",
    icon: Home,
    image: "/day-spa.jpeg",
    price: "From R600",
    duration: "2-3 hours",
    benefits: [
      "Complete spa experience at home",
      "Multiple treatment combination",
      "Personalized service package",
      "Ultimate convenience and privacy"
    ],
    badge: "Premium Experience"
  },
  {
    title: "Relaxation Rituals",
    description: "Specially designed sequences of treatments to create deep relaxation and restore your inner peace and harmony.",
    icon: Waves,
    image: "/dayspa4.jpeg",
    price: "From R420",
    duration: "90 minutes",
    benefits: [
      "Holistic approach to wellness",
      "Stress reduction techniques",
      "Mind-body connection",
      "Inner peace and harmony"
    ],
    badge: "Holistic Wellness"
  },
  {
    title: "Nail & Beauty Treatments",
    description: "Professional nail care and beauty treatments to complete your spa experience with perfect finishing touches.",
    icon: Star,
    image: "/dayspa5.jpeg",
    price: "From R150",
    duration: "30-60 minutes",
    benefits: [
      "Professional nail care",
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
          
          <div className="bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair font-bold text-3xl text-spa-black mb-4">
              Custom Spa Packages
            </h3>
            <p className="font-poppins text-spa-beige-700 mb-6 text-lg">
              Create your perfect spa experience by combining multiple services. We'll design a custom package that meets your specific needs and preferences.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Design Your Package</span>
              </Link>
            </Button>
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
              Contact Kumarie today to book your personalized spa session and discover the luxury of at-home wellness treatments.
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


