import { Metadata } from "next"
import { Heart, Sparkles, Phone, Home, Star } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "Thank You - Style & Beyouti Zone Spa | Your Wellness Journey Awaits",
  description: "Thank you for choosing Style & Beyouti Zone Spa. Your journey to relaxation and wellness begins with Kumarie's personalized mobile spa services.",
  keywords: "spa thank you, wellness journey, mobile spa booking, Kumarie spa services, relaxation experience",
}

const benefits = [
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Every treatment is customized to your unique needs and preferences"
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description: "High-quality products and professional techniques for ultimate relaxation"
  },
  {
    icon: Home,
    title: "Comfort & Convenience",
    description: "Enjoy luxury spa services in the comfort of your own space"
  }
]

export default function ThankYouPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Main Thank You Section */}
      <section className="relative py-20 bg-gradient-to-br from-spa-pink-50 via-spa-beige-50 to-spa-gold-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fadeIn">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-xl">
                  <Heart className="w-10 h-10 text-spa-white animate-pulse" />
                </div>
                <Badge className="mb-4 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-spa-white font-poppins px-6 py-2 text-lg">
                  Welcome to Wellness
                </Badge>
              </div>

              <h1 className="font-playfair font-bold text-5xl sm:text-6xl text-spa-black mb-6 leading-tight">
                Thank You for Choosing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-spa-pink-500 to-spa-gold-500">
                  Style & Beyouti Zone Spa
                </span>
              </h1>
              
              <p className="font-lora text-xl text-spa-beige-700 mb-8 leading-relaxed">
                Your decision to prioritize self-care and wellness is truly admirable. 
                We're honored that you've chosen Kumarie and our mobile spa services 
                to be part of your relaxation journey.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 rounded-full"></div>
                  <span className="font-poppins text-spa-beige-700">Your wellness journey begins now</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 rounded-full"></div>
                  <span className="font-poppins text-spa-beige-700">Professional, personalized care awaits</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 rounded-full"></div>
                  <span className="font-poppins text-spa-beige-700">Relaxation in the comfort of your space</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="tel:0617747378" className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call Kumarie</span>
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-spa-pink-300 text-spa-pink-600 hover:bg-spa-pink-50 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Link href="/">
                    <Home className="w-5 h-5 mr-2" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slideIn">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/dayspa6.jpeg"
                  alt="Thank you for choosing our spa"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-spa-white/95 backdrop-blur-sm rounded-xl p-4 text-center">
                    <p className="font-poppins text-spa-black font-semibold mb-1">
                      Ready to Begin?
                    </p>
                    <p className="font-poppins text-spa-beige-600 text-sm">
                      Your relaxation experience awaits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-20 bg-spa-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-4">
              What Makes Your Experience Special
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 max-w-2xl mx-auto">
              Every detail is designed with your comfort and satisfaction in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-b from-spa-white to-spa-beige-50 animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <benefit.icon className="w-8 h-8 text-spa-white" />
                  </div>
                  <h3 className="font-playfair font-bold text-2xl text-spa-black mb-4">
                    {benefit.title}
                  </h3>
                  <p className="font-poppins text-spa-beige-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gratitude Message */}
      <section className="py-20 bg-gradient-to-b from-spa-beige-50 to-spa-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <div className="w-24 h-24 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Sparkles className="w-12 h-12 text-spa-white animate-bounce" />
            </div>

            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-8">
              From Kumarie's Heart to Yours
            </h2>
            
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-spa-white to-spa-pink-50">
              <CardContent className="p-8 sm:p-12">
                <blockquote className="font-lora text-2xl text-spa-black leading-relaxed mb-8 italic">
                  "Thank you for trusting me with your wellness journey. There's nothing that brings me more joy 
                  than seeing my clients leave feeling refreshed, renewed, and truly cared for. Your decision to 
                  prioritize self-care inspires me every day to deliver the very best spa experience possible."
                </blockquote>
                
                <div className="flex items-center justify-center space-x-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-spa-gold-400 fill-current" />
                  ))}
                </div>
                
                <div className="border-t border-spa-beige-200 pt-6">
                  <p className="font-playfair font-semibold text-2xl text-spa-black mb-2">
                    Kumarie
                  </p>
                  <p className="font-poppins text-spa-beige-600">
                    Founder & Lead Spa Therapist
                  </p>
                  <p className="font-poppins text-spa-beige-600">
                    Style & Beyouti Zone Spa
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-spa-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-4">
              Let's Begin Your Wellness Journey
            </h2>
            <p className="font-lora text-xl text-spa-beige-700">
              Contact us to schedule your personalized spa experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-spa-pink-50 to-spa-beige-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-spa-pink-500 to-spa-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Phone className="w-8 h-8 text-spa-white" />
                </div>
                <h3 className="font-playfair font-bold text-2xl text-spa-black mb-4">
                  Call Directly
                </h3>
                <p className="font-poppins text-spa-beige-700 mb-6">
                  Speak with Kumarie personally to discuss your preferences and schedule your session
                </p>
                <p className="font-poppins font-bold text-2xl text-spa-black mb-6">
                  061 774 7378
                </p>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-spa-pink-500 to-spa-pink-600 hover:from-spa-pink-600 hover:to-spa-pink-700 text-spa-white font-poppins font-medium rounded-full"
                >
                  <Link href="tel:0617747378">
                    Call Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-gradient-to-br from-emerald-50 to-spa-beige-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                  </svg>
                </div>
                <h3 className="font-playfair font-bold text-2xl text-spa-black mb-4">
                  WhatsApp Chat
                </h3>
                <p className="font-poppins text-spa-beige-700 mb-6">
                  Quick and easy booking through WhatsApp for instant responses
                </p>
                <p className="font-poppins font-bold text-lg text-spa-black mb-6">
                  Chat with us instantly
                </p>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-spa-white font-poppins font-medium rounded-full"
                >
                  <Link href="https://wa.me/0617747378?text=Hi, thank you for the warm welcome! I'd like to book a spa session." target="_blank">
                    Chat Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 bg-gradient-to-r from-spa-pink-400 via-spa-gold-400 to-spa-beige-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-spa-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-white mb-6">
              Your Relaxation Awaits
            </h2>
            <p className="font-lora text-xl text-spa-white/90 mb-10 max-w-2xl mx-auto">
              Take the first step towards ultimate relaxation and wellness. 
              Your personalized spa experience is just one call away.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-6 h-6 text-spa-white/80 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                ))}
              </div>
              <p className="font-poppins text-spa-white/90 text-lg">
                Thank you for choosing wellness. Thank you for choosing us.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-poppins text-spa-white/80 text-sm">
                💖 Style & Beyouti Zone Spa - Where Wellness Meets Luxury 💖
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}