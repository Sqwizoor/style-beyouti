import { Metadata } from "next"
import { Sparkles, Heart, Shield, DollarSign, Star, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import HeroSlider from '@/components/hero-slider'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "Style & Beyouti Zone Spa | Personal • Private • Affordable • Relaxing",
  description: "Experience luxury spa treatments in the comfort of your own space. Style & Beyouti Zone Spa offers personal, private, and affordable relaxation services. Book your at-home spa session today!",
  keywords: "spa services, at-home spa, massage therapy, facials, relaxation treatments, affordable spa, private spa, mobile spa, aromatherapy, personal spa treatments, Kumarie",
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
  const featuredServices = [
    {
      title: "Full Body Massage",
      description: "Experience deep relaxation with our professional massage therapy in your own space.",
      icon: "💆‍♀️",
      image: "/spa1.jpeg",
    },
    {
      title: "Luxury Facials",
      description: "Rejuvenate your skin with our customized facial treatments using premium products.",
      icon: "✨",
      image: "/dayspa2.jpeg",
    },
    {
      title: "At-Home Spa Packages",
      description: "Complete spa experience delivered to your doorstep for ultimate convenience.",
      icon: "🏠",
      image: "/day-spa.jpeg",
    },
  ]

  const highlights = [
    {
      icon: Heart,
      title: "Personal",
      description: "Customized treatments tailored to your unique needs and preferences"
    },
    {
      icon: Shield,
      title: "Private",
      description: "Enjoy complete privacy and comfort in your own familiar environment"
    },
    {
      icon: DollarSign,
      title: "Affordable",
      description: "Luxury spa services at competitive prices that won't break the bank"
    },
    {
      icon: Sparkles,
      title: "Relaxing",
      description: "Professional treatments designed to melt away stress and tension"
    },
  ]

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
          Style & Beyouti Zone
          <span className="block text-spa-gold-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-3xl sm:text-4xl lg:text-5xl mt-2">
            Spa
          </span>
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
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 mb-12 leading-relaxed">
              Experience a personal, private, and affordable spa treatment in the comfort of your own space. 
              We bring professional wellness services directly to you, ensuring complete relaxation and rejuvenation.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="text-center group animate-slideIn"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-4">
                    <highlight.icon className="w-8 h-8 text-spa-pink-600 dark:text-spa-pink-400" />
                  </div>
                  <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-spa-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
              Featured Services
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-2xl mx-auto">
              Discover our most popular treatments designed to restore your mind, body, and spirit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 text-3xl">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3">
                    {service.title}
                  </h3>
                  <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-6">
                    {service.description}
                  </p>
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300"
                  >
                    <Link href="/services">
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
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

          {/* Gallery Bottom Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
              <Image
                src="/dayspa3.jpeg"
                alt="Aromatherapy setup"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-spa-pink-500/20 group-hover:bg-spa-pink-500/40 transition-all duration-300"></div>
            </div>

            <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
              <Image
                src="/dayspa4.jpeg"
                alt="Wellness environment"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-spa-gold-500/20 group-hover:bg-spa-gold-500/40 transition-all duration-300"></div>
            </div>

            <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
              <Image
                src="/pool.jpeg"
                alt="Relaxation space"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-spa-beige-500/20 group-hover:bg-spa-beige-500/40 transition-all duration-300"></div>
            </div>

            <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
              <Image
                src="/dayspa6.jpeg"
                alt="Premium spa setup"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-spa-pink-500/20 group-hover:bg-spa-pink-500/40 transition-all duration-300"></div>
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-spa-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeIn">
              <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-8">
                Why Choose Style & Beyouti Zone Spa?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-spa-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl text-spa-black dark:text-spa-white mb-2">
                      Licensed & Professional
                    </h3>
                    <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">
                      Kumarie is a certified spa therapist with years of experience in wellness and beauty treatments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="w-6 h-6 text-spa-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl text-spa-black dark:text-spa-white mb-2">
                      Personalized Experience
                    </h3>
                    <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">
                      Every treatment is customized to your specific needs, preferences, and wellness goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-spa-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl text-spa-black dark:text-spa-white mb-2">
                      Premium Products
                    </h3>
                    <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">
                      We use only high-quality, organic products that nourish your skin and enhance your wellness experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-6 h-6 text-spa-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl text-spa-black dark:text-spa-white mb-2">
                      Flexible Scheduling
                    </h3>
                    <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">
                      Book appointments that work with your schedule, including evenings and weekends.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-slideIn">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/dayspa6 (2).jpeg"
                  alt="Professional spa therapist at work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spa-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-spa-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-4">
                    <p className="font-playfair text-spa-black dark:text-spa-white font-semibold text-lg mb-1">
                      "Your wellness is our priority"
                    </p>
                    <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 text-sm">
                      - Kumarie, Lead Spa Therapist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Preview */}
      <section className="py-20 bg-gradient-to-b from-spa-beige-50 to-spa-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
              What Our Clients Say
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-2xl mx-auto">
              Real experiences from satisfied clients who discovered the magic of personalized spa treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-xl border-0 bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-spa-gold-400 fill-current" />
                  ))}
                </div>
                <p className="font-lora text-spa-beige-700 dark:text-spa-beige-300 mb-6 italic">
                  "Kumarie's mobile spa service is absolutely incredible! She transformed my living room into a peaceful oasis. The massage was divine and exactly what I needed after a stressful week."
                </p>
                <div>
                  <p className="font-playfair font-semibold text-spa-black dark:text-spa-white">Sarah M.</p>
                  <p className="font-poppins text-spa-beige-500 text-sm">Sandton</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-spa-gold-400 fill-current" />
                  ))}
                </div>
                <p className="font-lora text-spa-beige-700 dark:text-spa-beige-300 mb-6 italic">
                  "The convenience of having professional spa treatments at home is unmatched. Kumarie is skilled, professional, and creates such a relaxing atmosphere. Highly recommended!"
                </p>
                <div>
                  <p className="font-playfair font-semibold text-spa-black dark:text-spa-white">Thandiwe L.</p>
                  <p className="font-poppins text-spa-beige-500 text-sm">Pretoria</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-spa-gold-400 fill-current" />
                  ))}
                </div>
                <p className="font-lora text-spa-beige-700 dark:text-spa-beige-300 mb-6 italic">
                  "Amazing service! The couples massage was perfect for our anniversary. Kumarie made everything so special and romantic. We'll definitely book again!"
                </p>
                <div>
                  <p className="font-playfair font-semibold text-spa-black dark:text-spa-white">Michelle & James</p>
                  <p className="font-poppins text-spa-beige-500 text-sm">Midrand</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
            >
              <Link href="/testimonials">
                Read More Testimonials
              </Link>
            </Button>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-spa-pink-400 via-spa-gold-400 to-spa-beige-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-spa-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-white mb-6">
            Ready to Begin Your Spa Journey?
          </h2>
          <p className="font-lora text-xl text-spa-white/90 mb-10 max-w-2xl mx-auto">
            Contact Kumarie today and let us bring the ultimate relaxation experience to your doorstep
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

      <Footer />
    </div>
  )
}

