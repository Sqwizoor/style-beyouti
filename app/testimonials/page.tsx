import { Metadata } from "next"
import { Star, Heart, Quote, Sparkles, Phone } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "Client Testimonials - Style & Beyouti Zone Spa | Real Reviews",
  description: "Read genuine testimonials from satisfied clients who experienced Kumarie's exceptional spa services. Discover why Style & Beyouti Zone Spa is trusted for mobile wellness treatments.",
  keywords: "spa testimonials, client reviews, spa feedback, mobile spa reviews, Kumarie spa reviews, satisfied customers, wellness testimonials",
}

const testimonials = [
  {
    name: "Sarah M.",
    location: "Sandton",
    service: "Full Body Massage & Facial",
    rating: 5,
    text: "Kumarie's mobile spa service exceeded all my expectations! She transformed my living room into a serene spa oasis. The massage was absolutely divine, and the facial left my skin glowing. I felt completely renewed and relaxed. This is luxury at its finest!",
    image: "/dayspa3.jpeg",
    date: "2 weeks ago"
  },
  {
    name: "Nomsa K.",
    location: "Johannesburg Central",
    service: "Hot Stone Massage",
    rating: 5,
    text: "I've been to many spas, but nothing compares to the personalized attention Kumarie provides. The hot stone massage was incredible - she knew exactly where I carried tension. The convenience of having this service at home is unmatched. Highly recommend!",
    image: "/spa1.jpeg",
    date: "1 month ago"
  },
  {
    name: "Thandiwe L.",
    location: "Pretoria",
    service: "Wellness Package",
    rating: 5,
    text: "Kumarie is a true professional with a gift for healing. Her wellness package was exactly what I needed after a stressful month. The aromatherapy, massage, and reflexology combination left me feeling like a new person. Thank you for bringing peace to my home!",
    image: "/dayspa5.jpeg",
    date: "3 weeks ago"
  },
  {
    name: "Michelle R.",
    location: "Midrand",
    service: "Couples Massage",
    rating: 5,
    text: "My husband and I booked a couples massage for our anniversary, and it was magical! Kumarie created such a romantic and relaxing atmosphere. We both felt so connected and relaxed afterward. This will definitely become our monthly tradition!",
    image: "/dayspa6.jpeg",
    date: "2 months ago"
  },
  {
    name: "Grace N.",
    location: "Centurion",
    service: "Deep Tissue Massage",
    rating: 5,
    text: "As a busy working mom, I rarely have time for self-care. Kumarie's mobile service was a blessing! The deep tissue massage helped with my chronic back pain, and I didn't have to leave my house. Professional, skilled, and so convenient!",
    image: "/dayspa2.jpeg",
    date: "1 week ago"
  },
  {
    name: "Jennifer S.",
    location: "East Rand",
    service: "Luxury Facial & Manicure",
    rating: 5,
    text: "Kumarie's attention to detail is incredible. The facial was customized for my sensitive skin, and the results were amazing. My hands have never looked better after the manicure. She uses high-quality products and has such gentle, healing hands.",
    image: "/dayspa4.jpeg",
    date: "3 weeks ago"
  }
]

const stats = [
  { number: "200+", label: "Happy Clients", icon: Heart },
  { number: "98%", label: "Satisfaction Rate", icon: Star },
  { number: "150+", label: "5-Star Reviews", icon: Sparkles },
  { number: "3+", label: "Years Experience", icon: Quote }
]

const services = [
  "Full Body Massage",
  "Hot Stone Therapy",
  "Aromatherapy Sessions",
  "Luxury Facials",
  "Couples Treatments",
  "Wellness Packages"
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-spa-pink-50 to-spa-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-fadeIn">
              <Badge className="mb-6 bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 text-spa-white font-poppins px-6 py-2 text-lg">
                Client Love Stories
              </Badge>
              <h1 className="font-playfair font-bold text-5xl sm:text-6xl text-spa-black mb-6">
                What Our Clients Say
              </h1>
              <p className="font-lora text-xl text-spa-beige-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                Don't just take our word for it. Hear from real clients who have experienced 
                the transformative power of Style & Beyouti Zone Spa's personalized wellness treatments.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center animate-slideIn"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <stat.icon className="w-8 h-8 text-spa-white" />
                    </div>
                    <div className="font-playfair font-bold text-3xl text-spa-black mb-1">
                      {stat.number}
                    </div>
                    <div className="font-poppins text-spa-beige-600 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="tel:0617747378" className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Book Your Session</span>
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-spa-pink-300 text-spa-pink-600 hover:bg-spa-pink-50 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Link href="/services">
                    View Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-spa-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-4">
              Real Stories, Real Results
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 max-w-2xl mx-auto">
              Every testimonial represents a journey to wellness and self-care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-b from-spa-white to-spa-beige-50 animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-spa-pink-400 opacity-50" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-spa-gold-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="font-lora text-spa-beige-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Service Badge */}
                  <Badge className="bg-spa-pink-100 text-spa-pink-700 font-poppins text-xs px-3 py-1 mb-4">
                    {testimonial.service}
                  </Badge>

                  {/* Client Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-poppins font-semibold text-spa-black">
                        {testimonial.name}
                      </p>
                      <p className="font-poppins text-spa-beige-500 text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-poppins text-spa-beige-400 text-xs">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review Section */}
      <section className="py-20 bg-gradient-to-b from-spa-beige-50 to-spa-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-spa-white to-spa-pink-50 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-spa-pink-400 opacity-50 mb-4" />
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-spa-gold-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="font-lora text-2xl text-spa-black leading-relaxed mb-8">
                    "Kumarie doesn't just provide spa services – she creates an entire wellness experience. 
                    From the moment she arrives, you know you're in for something special. Her expertise, 
                    professionalism, and genuine care for her clients shine through every treatment."
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-playfair font-bold text-xl text-spa-black">
                        Dr. Lerato M.
                      </p>
                      <p className="font-poppins text-spa-beige-600">
                        Regular Client • Johannesburg
                      </p>
                      <Badge className="mt-2 bg-spa-gold-100 text-spa-gold-700 font-poppins text-xs">
                        VIP Client
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/dayspa6 (2).jpeg"
                    alt="Featured client testimonial"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-black/30 to-transparent"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-spa-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-4">
              Most Loved Services
            </h2>
            <p className="font-lora text-xl text-spa-beige-700">
              The treatments our clients can't stop talking about
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gradient-to-b from-spa-pink-50 to-spa-beige-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slideIn group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-spa-white" />
                </div>
                <p className="font-poppins text-spa-black font-medium">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-spa-pink-400 via-spa-gold-400 to-spa-beige-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-spa-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-white mb-6">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="font-lora text-xl text-spa-white/90 mb-10 max-w-2xl mx-auto">
              Join the growing community of satisfied clients who have discovered 
              the transformative power of personalized spa treatments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                asChild
                size="lg"
                className="bg-spa-white text-spa-pink-600 hover:bg-spa-beige-50 font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="tel:0617747378" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Kumarie - 061 774 7378</span>
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-spa-white text-spa-white hover:bg-spa-white hover:text-spa-pink-600 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
              >
                <Link href="https://wa.me/0617747378?text=Hi, I'd like to book a spa session based on your amazing reviews!" target="_blank">
                  WhatsApp Now
                </Link>
              </Button>
            </div>

            <div className="mt-8">
              <p className="font-poppins text-spa-white/80 text-sm">
                ⭐ Join 200+ satisfied clients who trust Style & Beyouti Zone Spa ⭐
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}