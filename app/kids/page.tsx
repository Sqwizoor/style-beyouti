import { Metadata } from "next"
import { Heart, Star, Clock, Phone, MessageCircle, Shield, Sparkles, Gift } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "Kids Spa Services - Style & Beyouti Zone Spa | Fun & Safe Treatments",
  description: "Discover our special spa services designed just for kids! Safe, fun, and relaxing treatments that introduce children to wellness and self-care in a playful environment.",
  keywords: "kids spa, children spa services, kids massage, children wellness, safe spa treatments, kids relaxation, family spa, kids beauty treatments, children self-care",
  openGraph: {
    title: "Kids Spa Services - Style & Beyouti Zone Spa | Fun & Safe Treatments",
    description: "Special spa services designed just for kids! Safe, fun, and relaxing treatments in a playful environment.",
    type: "website",
    images: [
      { url: "/dayspa3.jpeg", width: 1200, height: 630, alt: "Kids Spa Services at Style & Beyouti Zone Spa" },
    ],
  },
}

export default function KidsPage() {
  const kidsServices = [
    {
      title: "Mini Me Massage",
      description: "A gentle, fun introduction to massage therapy designed specifically for children aged 6-12. Using child-safe techniques and fun storytelling to create a magical relaxation experience.",
      price: "R180",
      duration: "30 min",
      rating: 4.9,
      features: ["Gentle Techniques", "Storytelling", "Child-Safe Products", "Fun & Interactive"],
      icon: "🧚‍♀️",
      image: "/dayspa4.jpeg",
      ageRange: "6-12 years",
      whatsappMessage: "Hi! I'd like to book a Mini Me Massage for my child (30 min - R180). When is your next availability?"
    },
    {
      title: "Princess/Prince Pamper Package",
      description: "The ultimate royal treatment! Includes gentle facial cleansing, fun nail painting, mini hand massage, and a special crown or certificate. Perfect for birthdays or special occasions!",
      price: "R250",
      duration: "45 min",
      rating: 4.8,
      features: ["Gentle Facial", "Nail Painting", "Hand Massage", "Special Crown", "Certificate"],
      icon: "👑",
      image: "/spa1.jpeg",
      ageRange: "5-14 years",
      whatsappMessage: "Hi! I'd like to book the Princess/Prince Pamper Package for my child (45 min - R250). When is your next availability?"
    },
    {
      title: "Teen Glow Session",
      description: "Specially designed for teenagers dealing with skin changes. Includes deep cleansing facial, spot treatment, and skincare education. Helps build confidence and healthy habits.",
      price: "R320",
      duration: "60 min",
      rating: 4.7,
      features: ["Deep Cleansing", "Spot Treatment", "Skincare Education", "Confidence Building"],
      icon: "✨",
      image: "/dayspa2.jpeg",
      ageRange: "13-17 years",
      whatsappMessage: "Hi! I'd like to book a Teen Glow Session (60 min - R320). When is your next availability?"
    },
    {
      title: "Family Bonding Session",
      description: "Perfect for parent and child bonding! Enjoy side-by-side relaxation treatments. Includes matching mini massages and quality time together in a peaceful environment.",
      price: "R450",
      duration: "45 min",
      rating: 5.0,
      features: ["Parent & Child", "Side-by-Side Treatment", "Bonding Experience", "Quality Time"],
      icon: "👨‍👩‍👧‍👦",
      image: "/hero-main.jpeg",
      ageRange: "All ages with parent",
      whatsappMessage: "Hi! I'd like to book a Family Bonding Session for parent and child (45 min - R450). When is your next availability?"
    },
  ]

  const safetyFeatures = [
    {
      icon: Shield,
      title: "Child-Safe Products",
      description: "All products used are specially formulated for sensitive young skin and are completely non-toxic"
    },
    {
      icon: Heart,
      title: "Trained Specialists",
      description: "Our therapists are specially trained in working with children and creating comfortable experiences"
    },
    {
      icon: Gift,
      title: "Fun & Educational",
      description: "Every session includes fun activities and teaches children about self-care and wellness"
    },
    {
      icon: Sparkles,
      title: "Magical Experience",
      description: "We create a magical, story-filled environment that makes spa time exciting and memorable"
    },
  ]

  const ageGroups = [
    {
      title: "Little Ones (5-8 years)",
      description: "Gentle introduction to spa treatments with lots of fun and storytelling",
      services: ["Mini massages", "Gentle facials", "Nail painting", "Relaxation games"],
      duration: "20-30 minutes"
    },
    {
      title: "Pre-Teens (9-12 years)",
      description: "More comprehensive treatments while maintaining the fun, educational approach",
      services: ["Full body massage", "Facial treatments", "Manicures", "Wellness education"],
      duration: "30-45 minutes"
    },
    {
      title: "Teenagers (13-17 years)",
      description: "Adult-level treatments with teen-specific focus on skin care and confidence building",
      services: ["Deep cleansing facials", "Acne treatments", "Stress relief massage", "Confidence coaching"],
      duration: "45-60 minutes"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-spa-pink-100 via-spa-beige-50 to-spa-gold-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/dayspa5.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-2xl mb-6 animate-float">
              <Gift className="w-10 h-10 text-spa-white" />
            </div>
          </div>
          
          <h1 className="font-playfair font-bold text-5xl sm:text-6xl lg:text-7xl text-spa-black dark:text-spa-white mb-6 leading-tight">
            Kids Spa Services
            <span className="block text-spa-pink-600 dark:text-spa-pink-400 text-3xl sm:text-4xl lg:text-5xl mt-2">
              Fun • Safe • Magical
            </span>
          </h1>

          <p className="font-lora text-xl sm:text-2xl text-spa-beige-700 dark:text-spa-beige-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Introduce your child to the wonderful world of wellness and self-care through our specially designed, 
            safe, and fun spa treatments created just for kids and teens.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg"
            >
              <Link href="tel:0617747378" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Book Kids Session Today</span>
              </Link>
            </Button>

            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
            >
              <Link href="#services" className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span>View Kids Services</span>
              </Link>
            </Button>
          </div>

          <div className="inline-block bg-gradient-to-r from-spa-pink-400/30 to-spa-gold-400/30 backdrop-blur-md rounded-full px-8 py-4 border border-spa-pink-300/30 shadow-2xl">
            <p className="font-poppins text-spa-black dark:text-spa-white font-semibold">
              🌟 Creating magical spa memories for kids aged 5-17 🌟
            </p>
          </div>
        </div>
      </section>

      {/* Safety Features Section */}
      <section className="py-20 bg-spa-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
              Why Parents Trust Us
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-2xl mx-auto">
              Your child's safety, comfort, and happiness are our top priorities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div 
                key={index}
                className="text-center group animate-slideIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-4">
                  <feature.icon className="w-8 h-8 text-spa-pink-600 dark:text-spa-pink-400" />
                </div>
                <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-2">
                  {feature.title}
                </h3>
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kids Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-spa-beige-50 to-spa-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
              Our Kids Spa Services
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-2xl mx-auto">
              Specially designed treatments that make wellness fun and educational for every age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {kidsServices.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 animate-fadeIn hover:scale-105 hover:-translate-y-2"
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
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 text-white px-3 py-1 rounded-full font-bold shadow-lg">
                    {service.price}
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{service.duration}</span>
                  </div>

                  {/* Age Range Badge */}
                  <div className="absolute bottom-4 left-4 bg-spa-pink-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.ageRange}
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 text-3xl z-10">
                    {service.icon}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-spa-beige-600 dark:text-spa-beige-400">({service.rating})</span>
                  </div>

                  <h3 className="font-playfair font-semibold text-2xl text-spa-black dark:text-spa-white mb-3 group-hover:text-spa-pink-600 dark:group-hover:text-spa-pink-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-1 bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 dark:from-spa-pink-900/30 dark:to-spa-gold-900/30 text-spa-pink-600 dark:text-spa-pink-400 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Booking Button */}
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-spa-pink-400 to-spa-gold-400 hover:from-spa-pink-500 hover:to-spa-gold-500 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <Link 
                      href={`https://wa.me/27617747378?text=${encodeURIComponent(service.whatsappMessage)}`}
                      className="flex items-center justify-center gap-2"
                      target="_blank"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Book via WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-20 bg-spa-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
              Treatments by Age Group
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300 max-w-2xl mx-auto">
              We tailor our approach to match your child's developmental stage and interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card 
                key={index}
                className="shadow-xl border-0 bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-4">
                    {group.title}
                  </h3>
                  <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-6">
                    {group.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-poppins font-semibold text-spa-black dark:text-spa-white">
                      Recommended Services:
                    </h4>
                    <ul className="space-y-2">
                      {group.services.map((service, serviceIndex) => (
                        <li 
                          key={serviceIndex}
                          className="flex items-center text-spa-beige-600 dark:text-spa-beige-400"
                        >
                          <Star className="w-4 h-4 text-spa-gold-400 mr-2" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-spa-gold-50 dark:bg-spa-gold-900/20 rounded-lg p-4">
                    <p className="font-poppins text-sm text-spa-gold-700 dark:text-spa-gold-400">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Typical Duration: {group.duration}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Guidelines Section */}
      <section className="py-20 bg-gradient-to-b from-spa-beige-50 to-spa-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
              Important Guidelines for Parents
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300">
              Everything you need to know to ensure your child has the best experience
            </p>
          </div>

          <div className="bg-gradient-to-br from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-4">
                  Before the Session
                </h3>
                <ul className="space-y-3 font-poppins text-spa-beige-600 dark:text-spa-beige-400">
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-spa-pink-500 mr-3 mt-1 flex-shrink-0" />
                    Parent/guardian must be present for all sessions
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-spa-pink-500 mr-3 mt-1 flex-shrink-0" />
                    Please inform us of any allergies or sensitivities
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-spa-pink-500 mr-3 mt-1 flex-shrink-0" />
                    Comfortable, easy-to-remove clothing recommended
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-spa-pink-500 mr-3 mt-1 flex-shrink-0" />
                    Bring a favorite small toy or comfort item if needed
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-4">
                  During the Session
                </h3>
                <ul className="space-y-3 font-poppins text-spa-beige-600 dark:text-spa-beige-400">
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 text-spa-gold-500 mr-3 mt-1 flex-shrink-0" />
                    Sessions can be stopped at any time if child is uncomfortable
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 text-spa-gold-500 mr-3 mt-1 flex-shrink-0" />
                    We encourage questions and communication
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 text-spa-gold-500 mr-3 mt-1 flex-shrink-0" />
                    Photos can be taken for special memories (with permission)
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 text-spa-gold-500 mr-3 mt-1 flex-shrink-0" />
                    We adapt our approach to your child's comfort level
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-spa-pink-50 dark:bg-spa-pink-900/20 rounded-xl">
              <h4 className="font-playfair font-bold text-xl text-spa-black dark:text-spa-white mb-3">
                Special Considerations
              </h4>
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-4">
                Children under 12 must have a parent/guardian present at all times. For teenagers (13-17), 
                parents are welcome to stay or can remain nearby while giving their teen some independence. 
                All our staff are trained in child safety and creating age-appropriate experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Link href="tel:0617747378" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Discuss Your Child's Needs
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-2 border-spa-pink-300 text-spa-pink-600 dark:border-spa-pink-600 dark:text-spa-pink-400 hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/20 font-poppins font-medium rounded-full transition-all duration-300"
                >
                  <Link href="https://wa.me/27617747378?text=Hi, I have questions about kids spa services for my child. Can you help me choose the right treatment?" target="_blank" className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Ask Questions
                  </Link>
                </Button>
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
            Give Your Child the Gift of Wellness
          </h2>
          <p className="font-lora text-xl text-spa-white/90 mb-10 max-w-2xl mx-auto">
            Book a magical spa experience that will create lasting memories and introduce your child to healthy self-care habits
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-spa-white text-spa-pink-600 hover:bg-spa-beige-50 font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="tel:0617747378" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Book Kids Session - 061 774 7378</span>
              </Link>
            </Button>

            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-spa-white bg-transparent text-spa-white hover:bg-spa-white hover:text-spa-pink-600 font-poppins font-medium px-8 py-4 rounded-full transition-all duration-300"
            >
              <Link href="https://wa.me/27617747378?text=Hi, I'd like to book a kids spa session. My child is [age] years old and I'm interested in [service name]. What are your available times?" className="flex items-center space-x-2" target="_blank">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </Link>
            </Button>
          </div>

          <div className="mt-8">
            <p className="font-poppins text-spa-white/80 text-sm">
              🌟 Creating magical memories for young hearts 🌟
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}