import { Metadata } from "next"
import { Phone, MessageCircle, Mail, MapPin, Clock, Heart, Send, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "Contact Us - Style & Beyouti Zone Spa | Book Your Spa Session",
  description: "Contact Style & Beyouti Zone Spa to book your personalized spa session. Call 061 774 7378 or WhatsApp for mobile spa services at your location.",
  keywords: "contact spa, book spa appointment, mobile spa contact, spa booking, Style & Beyouti Zone Spa services, at-home spa booking, spa consultation",
}

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Ready to book? Call directly for immediate assistance",
    action: "tel:0617747378",
    display: "061 774 7378",
    color: "from-spa-pink-500 to-spa-pink-600",
    available: "Available 7 days a week"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Booking",
    description: "Quick and easy booking through WhatsApp",
    action: "https://wa.me/0617747378?text=Hi, I would like to book a spa appointment",
    display: "Chat with us",
    color: "from-emerald-500 to-emerald-600",
    available: "Instant responses"
  },
  // --- NEW: FACEBOOK CONTACT METHOD ---
  {
    icon: Facebook, // Lucide Facebook Icon
    title: "Follow on Facebook",
    description: "Connect with us, view updates, and see special offers",
    action: "https://www.facebook.com/p/Style-and-Beyouti-Zone-100063770191373/",
    display: "@Style and Beyouti Zone",
    color: "from-blue-600 to-blue-800",
    available: "See our latest posts"
  },
  // --- NEW: INSTAGRAM CONTACT METHOD ---
  {
    icon: Instagram, // Lucide Instagram Icon
    title: "Follow on Instagram",
    description: "Browse our gallery for inspiration and wellness tips",
    action: "https://www.instagram.com/styleandbeyoutizone/",
    display: "@styleandbeyoutizone",
    color: "from-purple-500 to-pink-500",
    available: "Daily inspiration"
  }
]

const serviceAreas = [
  "Johannesburg South"
]

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-spa-pink-50 to-spa-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h1 className="font-playfair font-bold text-5xl sm:text-6xl text-spa-black mb-6">
                Get In Touch
              </h1>
              <p className="font-lora text-xl text-spa-beige-700 mb-8 leading-relaxed">
                Ready to experience ultimate relaxation? Contact us to book your personalized 
                spa session and discover the luxury wellness treatments.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-spa-white" />
                  </div>
                  <span className="font-poppins text-spa-beige-700">Direct line to spa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-spa-white" />
                  </div>
                  <span className="font-poppins text-spa-beige-700">Flexible scheduling available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-spa-white" />
                  </div>
                  <span className="font-poppins text-spa-beige-700">Personalized service guarantee</span>
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
                    <span>Call Now</span>
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-spa-pink-300 text-spa-pink-600 hover:bg-spa-pink-50 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Link href="https://wa.me/0617747378?text=Hi, I would like to book a spa appointment" target="_blank">
                    WhatsApp
                  </Link>
                </Button>
              </div>
              
              {/* --- NEW: Social Icons in Hero Section --- */}
              <div className="mt-6 flex items-center space-x-4">
                <span className="font-poppins text-spa-beige-700 font-medium">Follow Us:</span>
                <Link 
                  href="https://www.facebook.com/p/Style-and-Beyouti-Zone-100063770191373/" 
                  target="_blank" 
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </Link>
                <Link 
                  href="https://www.instagram.com/styleandbeyoutizone/" 
                  target="_blank" 
                  className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </Link>
              </div>
              {/* --- END NEW --- */}

            </div>
            
            <div className="relative animate-slideIn">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/imgx9.jpeg"
                  alt="Contact us for spa services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <Badge className="bg-spa-white/90 text-spa-pink-600 font-poppins px-4 py-2">
                    Book Your Relaxation Today
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-spa-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-4">
              How to Reach Us & Follow Our Journey
            </h2> {/* Updated Title */}
            <p className="font-lora text-xl text-spa-beige-700 max-w-3xl mx-auto">
              Choose your preferred way to connect with us and book your perfect spa experience, 
              or follow us on social media for exclusive content and offers.
            </p> {/* Updated Description */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Updated to lg:grid-cols-4 for 4 cards */}
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-b from-spa-white to-spa-beige-50 animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center pb-3">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="font-playfair text-2xl text-spa-black mb-2">
                    {method.title}
                  </CardTitle>
                  <p className="font-poppins text-spa-beige-600">
                    {method.description}
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <p className="font-poppins font-semibold text-spa-black text-lg">
                      {method.display}
                    </p>
                    <p className="font-poppins text-spa-beige-500 text-sm">
                      {method.available}
                    </p>
                  </div>
                  <Button 
                    asChild
                    className={`w-full bg-gradient-to-r ${method.color} hover:shadow-lg text-white font-poppins font-medium rounded-full transition-all duration-300`}
                  >
                    <Link href={method.action} target={method.action.startsWith('http') ? '_blank' : undefined}>
                      {method.title.includes('Follow') ? 'Go to Page' : 'Contact Now'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-spa-beige-50 to-spa-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-4">
              Send Us a Message
            </h2>
            <p className="font-lora text-xl text-spa-beige-700">
              Tell us about your spa preferences and we'll create the perfect experience for you
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-gradient-to-b from-spa-white to-spa-beige-50">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-poppins font-medium text-spa-black mb-2">
                      Your Name *
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Enter your full name"
                      className="border-spa-beige-200 focus:border-spa-pink-400 focus:ring-spa-pink-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins font-medium text-spa-black mb-2">
                      Phone Number *
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="Your contact number"
                      className="border-spa-beige-200 focus:border-spa-pink-400 focus:ring-spa-pink-200 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-poppins font-medium text-spa-black mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="border-spa-beige-200 focus:border-spa-pink-400 focus:ring-spa-pink-200 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block font-poppins font-medium text-spa-black mb-2">
                    Preferred Service *
                  </label>
                  <Input 
                    type="text" 
                    placeholder="E.g., Full Body Massage, Facial Treatment, Custom Package"
                    className="border-spa-beige-200 focus:border-spa-pink-400 focus:ring-spa-pink-200 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block font-poppins font-medium text-spa-black mb-2">
                    Your Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your preferences, any special requirements, preferred appointment time, or questions you may have..."
                    className="border-spa-beige-200 focus:border-spa-pink-400 focus:ring-spa-pink-200 rounded-lg h-32 resize-none"
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                  <p className="font-poppins text-spa-beige-600 text-sm mt-3">
                    We'll respond within 2 hours during business hours
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-spa-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-4">
              Service Coverage Areas
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 max-w-2xl mx-auto">
              We bring our mobile spa services to these areas and beyond
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceAreas.map((area, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-gradient-to-b from-spa-pink-50 to-spa-beige-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-slideIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MapPin className="w-8 h-8 text-spa-pink-600 mx-auto mb-3" />
                <p className="font-poppins text-spa-black font-medium text-sm">
                  {area}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-poppins text-spa-beige-600 mb-4">
              Don't see your area? No problem! We travel to many locations.
            </p>
            <Button 
              asChild
              variant="outline"
              className="border-spa-pink-300 text-spa-pink-600 hover:bg-spa-pink-50 font-poppins rounded-full"
            >
              <Link href="https://wa.me/0617747378?text=Hi, I'm located in [Your Area] and would like to book a spa service" target="_blank">
                Ask About Your Area
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-spa-pink-400 via-spa-gold-400 to-spa-beige-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-spa-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-white mb-6">
              Your Relaxation is Just a Call Away
            </h2>
            <p className="font-lora text-xl text-spa-white/90 mb-10 max-w-2xl mx-auto">
              Don't wait to treat yourself to the luxury spa experience you deserve. 
              Contact us now and let the journey to wellness begin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-spa-white text-spa-pink-600 hover:bg-spa-beige-50 font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="tel:0617747378" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Us - 061 774 7378</span>
                </Link>
              </Button>
            </div>

            <div className="mt-8">
              <p className="font-poppins text-spa-white/80 text-sm">
                💖 Thank you for choosing Style & Beyouti Zone Spa 💖
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}