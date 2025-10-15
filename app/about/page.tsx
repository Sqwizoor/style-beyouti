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
                  src="/tim.jpeg"
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

      {/* Founder Story Section */}
      <section className="py-20 bg-spa-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-8">
              Meet Our Founder
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/owner.jpeg"
                  alt="Founder of Style & Beyouti Zone Spa"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/20 to-transparent"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4 text-lg font-lora text-spa-beige-700 leading-relaxed">
                <p>
                  Our passionate founder is the hands-on director of Style & Beyouti Zone Spa, 
                  established in <strong className="text-spa-pink-600">July 2019</strong>. With a natural flair for beauty and a heart for wellness, 
                  we have created a space where self-care is more than just a treatment — it's a lifestyle.
                </p>
                <p>
                  Our journey into the beauty industry began with a deep love for enhancing natural beauty and a desire 
                  to provide every client with a personalized, luxurious experience. Over our <strong className="text-spa-pink-600">5+ years</strong> in the industry, 
                  we have mastered expertise in rejuvenating facials, relaxing massages, precision nail care, and tailored spa packages.
                </p>
                <p>
                  Under our leadership, Style & Beyouti Zone Spa has become <strong className="text-spa-gold-600">Top 20 in Gauteng</strong>, 
                  known for its welcoming atmosphere, meticulous attention to detail, and unwavering commitment to high-quality service.
                </p>
              </div>

              <div className="bg-gradient-to-r from-spa-pink-50 to-spa-gold-50 p-6 rounded-xl border-l-4 border-spa-pink-400">
                <blockquote className="font-lora text-xl text-spa-black italic mb-4">
                  "Beauty starts the moment you decide to take care of yourself."
                </blockquote>
                <cite className="font-poppins font-semibold text-spa-pink-600">- Style & Beyouti Zone Spa</cite>
              </div>
            </div>
          </div>

          {/* Philosophy & Mission */}
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="font-playfair font-bold text-3xl text-spa-black mb-6">Our Philosophy</h3>
              <div className="max-w-4xl mx-auto space-y-4 text-lg font-lora text-spa-beige-700 leading-relaxed">
                <p>
                  Our philosophy is simple: <strong className="text-spa-black">every client deserves to leave looking beautiful and feeling empowered</strong>. 
                  Our vision is to provide an experience of total relaxation and rejuvenation to all generations.
                </p>
                <p>
                  Our business caters for everyone - from busy moms to professional individuals, teens, and just about everyone 
                  that appreciates the comfort of experiencing relaxation and a sense of peace. Whether it's an awesome Girl's day out 
                  at the Spa or a solo retreat, everyone is welcome.
                </p>
              </div>
            </div>

            <div className="bg-spa-beige-50 p-8 rounded-2xl">
              <h3 className="font-playfair font-bold text-3xl text-spa-black mb-6 text-center">Our Mission</h3>
              <p className="text-xl font-lora text-spa-beige-700 text-center mb-8 leading-relaxed">
                To offer <strong className="text-spa-pink-600">affordable treatments with the best possible results</strong> in a 
                <strong className="text-spa-gold-600"> personal, private, and relaxing environment</strong>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-8 h-8 text-spa-white" />
                  </div>
                  <h4 className="font-poppins font-semibold text-spa-black">Personal</h4>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-spa-gold-400 to-spa-gold-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-spa-white" />
                  </div>
                  <h4 className="font-poppins font-semibold text-spa-black">Private</h4>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-spa-beige-400 to-spa-beige-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-spa-white font-bold text-lg">$</span>
                  </div>
                  <h4 className="font-poppins font-semibold text-spa-black">Affordable</h4>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-spa-pink-300 to-spa-gold-300 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-8 h-8 text-spa-white" />
                  </div>
                  <h4 className="font-poppins font-semibold text-spa-black">Relaxing</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events Section */}
      <section className="py-20 bg-gradient-to-b from-spa-beige-50 to-spa-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-6">
              Memorable Events @ Style & Beyouti Zone Spa
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 max-w-3xl mx-auto">
              Create unforgettable moments with our specialized event packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Birthdays", icon: "🎂", description: "Celebrate another year of beauty" },
              { title: "Bridal Showers", icon: "👰", description: "Pamper the bride-to-be" },
              { title: "Baby Showers", icon: "👶", description: "Relaxation for expecting mothers" },
              { title: "Girls' Pamper Day", icon: "💅", description: "Ultimate friendship bonding" },
              { title: "Special Occasions", icon: "🎉", description: "Any reason to celebrate you" },
              { title: "Solo Retreat", icon: "🧘", description: "Personal time to unwind" }
            ].map((event, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-spa-white to-spa-pink-50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{event.icon}</div>
                  <h3 className="font-playfair font-semibold text-xl text-spa-black mb-2">{event.title}</h3>
                  <p className="font-poppins text-spa-beige-600">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="py-20 bg-spa-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-6">
              Opening Hours
            </h2>
            <p className="font-lora text-xl text-spa-beige-700">
              Flexible scheduling to fit your lifestyle
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-gradient-to-br from-spa-white to-spa-beige-50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-spa-beige-200">
                    <span className="font-poppins font-semibold text-spa-black">Monday</span>
                    <span className="font-poppins text-spa-beige-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-spa-beige-200">
                    <span className="font-poppins font-semibold text-spa-black">Tuesday</span>
                    <span className="font-poppins text-spa-beige-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-spa-beige-200">
                    <span className="font-poppins font-semibold text-spa-black">Wednesday</span>
                    <span className="font-poppins text-spa-beige-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-spa-beige-200">
                    <span className="font-poppins font-semibold text-spa-black">Thursday</span>
                    <span className="font-poppins text-spa-beige-600">9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-spa-beige-200">
                    <span className="font-poppins font-semibold text-spa-black">Friday</span>
                    <span className="font-poppins text-spa-beige-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-spa-beige-200">
                    <span className="font-poppins font-semibold text-spa-black">Saturday</span>
                    <span className="font-poppins text-spa-beige-600">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-spa-beige-200">
                    <span className="font-poppins font-semibold text-spa-black">Sunday</span>
                    <span className="font-poppins text-spa-beige-600">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="font-poppins font-semibold text-spa-pink-600">Emergency/Special</span>
                    <span className="font-poppins text-spa-pink-600">By Appointment</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-spa-pink-50 to-spa-gold-50 rounded-xl">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-spa-pink-600 mr-2" />
                  <h3 className="font-playfair font-semibold text-xl text-spa-black">Flexible Booking</h3>
                </div>
                <p className="font-poppins text-spa-beige-700 text-center">
                  We understand life gets busy! Contact us for early morning, late evening, or weekend appointments 
                  to fit your schedule. Your convenience is our priority.
                </p>
              </div>
            </CardContent>
          </Card>
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
                  src="/massage.jpeg"
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
