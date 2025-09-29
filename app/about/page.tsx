import { Metadata } from "next"
import { Heart, Star, Shield, Sparkles, Phone, Award, Users, Clock, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "About Us - Style & Beyouti Zone Spa | Personal Spa Services",
  description: "Learn about Style & Beyouti Zone Spa's mission to bring comfort, beauty, and relaxation directly to our clients in a safe and welcoming environment. Experience our story of personalized spa services.",
  keywords: "about spa services, mobile spa story, personal spa treatments, private spa experience, affordable luxury spa, spa mission, wellness at home",
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Personal Touch",
      description: "Every treatment is customized to meet your individual needs and preferences, ensuring a truly personal spa experience."
    },
    {
      icon: Shield,
      title: "Privacy & Comfort",
      description: "Enjoy complete privacy and comfort in your own familiar environment, away from crowded spa facilities."
    },
    {
      icon: Users,
      title: "Professional Care",
      description: "Our experienced therapists bring professional expertise and genuine care to every appointment."
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "We use only premium products and maintain the highest standards of service delivery."
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-spa-beige-50 to-spa-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h1 className="font-playfair font-bold text-5xl sm:text-6xl text-spa-black mb-6">
                About Style & 
                <span className="text-spa-pink-600"> Beyouti Zone</span>
              </h1>
              <p className="font-lora text-xl text-spa-beige-700 mb-8 leading-relaxed">
                Your wellness and relaxation are our priority. We believe everyone deserves to experience luxury spa treatments 
                in the comfort and privacy of their own space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/services" className="flex items-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Our Services</span>
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-spa-pink-300 text-spa-pink-600 hover:bg-spa-pink-50 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Link href="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slideIn">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/dayspa4.jpeg"
                  alt="Spa treatment environment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-spa-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-8">
            Our Story
          </h2>
          <div className="space-y-6 text-lg font-lora text-spa-beige-700 leading-relaxed">
            <p>
              Style & Beyouti Zone Spa was born from a simple belief: everyone deserves access to 
              professional spa treatments without compromising on quality, privacy, or affordability.
            </p>
            <p>
              We recognized that many people struggle to find time for self-care or feel uncomfortable 
              in traditional spa settings. That's why we created a mobile spa service that brings the 
              luxury spa experience directly to your doorstep.
            </p>
            <p>
              Our journey began with Kumarie's passion for wellness and beauty. With years of experience 
              in the spa industry, she understood the transformative power of professional treatments 
              and wanted to make them accessible to everyone.
            </p>
            <p>
              Today, we're proud to offer a range of personalized spa services that prioritize your 
              comfort, privacy, and individual needs. Every treatment is an opportunity for you to 
              reconnect with yourself and experience the rejuvenation you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-gradient-to-b from-spa-beige-50 to-spa-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-6">
              Our Mission
            </h2>
            <div className="max-w-3xl mx-auto">
              <blockquote className="text-2xl font-lora text-spa-beige-700 italic leading-relaxed border-l-4 border-spa-pink-400 pl-6">
                "To bring comfort, beauty, and relaxation directly to our clients in a safe and 
                welcoming environment, making luxury spa treatments accessible, personal, and affordable."
              </blockquote>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-spa-white to-spa-beige-50 animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-6">
                    <value.icon className="w-8 h-8 text-spa-pink-600" />
                  </div>
                  <h3 className="font-playfair font-semibold text-2xl text-spa-black mb-4">
                    {value.title}
                  </h3>
                  <p className="font-poppins text-spa-beige-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-spa-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slideIn">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/dayspa5.jpeg"
                  alt="Professional spa treatment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-pink-400/20 to-transparent"></div>
              </div>
            </div>
            <div className="animate-fadeIn">
              <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-8">
                Why Choose Our Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center">
                    <span className="text-spa-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-spa-black mb-2">
                      Convenience at Your Doorstep
                    </h3>
                    <p className="font-poppins text-spa-beige-600">
                      No need to travel or wait in crowded spas. We come to you at your preferred time and location.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center">
                    <span className="text-spa-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-spa-black mb-2">
                      Personalized Attention
                    </h3>
                    <p className="font-poppins text-spa-beige-600">
                      One-on-one service tailored to your specific needs and preferences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center">
                    <span className="text-spa-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-spa-black mb-2">
                      Affordable Luxury
                    </h3>
                    <p className="font-poppins text-spa-beige-600">
                      Premium spa services at competitive prices that make luxury accessible.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center">
                    <span className="text-spa-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-spa-black mb-2">
                      Complete Privacy
                    </h3>
                    <p className="font-poppins text-spa-beige-600">
                      Enjoy your treatments in the comfort and privacy of your own space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gratitude Section */}
      <section className="py-20 bg-gradient-to-r from-spa-pink-400 via-spa-gold-400 to-spa-beige-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-spa-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-spa-white rounded-full shadow-2xl mb-8">
              <Heart className="w-10 h-10 text-spa-pink-600" />
            </div>
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-white mb-6">
              Thank You for Choosing Us
            </h2>
            <p className="font-lora text-xl text-spa-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Your trust and support mean the world to us. We're honored to be part of your wellness 
              journey and committed to providing you with exceptional spa experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-spa-white text-spa-pink-600 hover:bg-spa-beige-50 font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="tel:0617747378" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Book Your Session</span>
                </Link>
              </Button>

              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-spa-white bg-transparent text-spa-white hover:bg-spa-white hover:text-spa-pink-600 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
              >
                <Link href="https://wa.me/0617747378?text=Hi, I would like to know more about your services" className="flex items-center space-x-2" target="_blank">
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat with Us</span>
                </Link>
              </Button>
            </div>

            <div className="mt-8">
              <p className="font-poppins text-spa-white/80 text-lg">
                💖 Thank you for your support 💖
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
