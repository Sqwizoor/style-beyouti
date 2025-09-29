import { Metadata } from "next"
import { Heart, Eye, Download, Sparkles, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "Gallery - Style & Beyouti Zone Spa | Spa Treatment Photos",
  description: "Explore our spa gallery showcasing relaxing treatments, serene environments, and blissful moments. See why clients choose Style & Beyouti Zone Spa for their wellness journey.",
  keywords: "spa gallery, massage photos, facial treatments, relaxation images, spa environment, wellness photos, beauty treatments, mobile spa gallery",
}

const galleryCategories = [
  {
    title: "Massage Therapy",
    description: "Professional massage treatments in peaceful settings",
    images: [
      { src: "/spa1.jpeg", alt: "Professional massage therapy session" },
      { src: "/dayspa2.jpeg", alt: "Relaxing spa environment" },
      { src: "/dayspa3.jpeg", alt: "Therapeutic massage treatment" },
    ],
    badge: "Relaxation"
  },
  {
    title: "Facial Treatments",
    description: "Luxury facial and skincare services",
    images: [
      { src: "/dayspa4.jpeg", alt: "Luxury facial treatment" },
      { src: "/dayspa5.jpeg", alt: "Skincare therapy session" },
      { src: "/dayspa6.jpeg", alt: "Professional facial care" },
    ],
    badge: "Beauty"
  },
  {
    title: "Spa Environments",
    description: "Serene and calming spa atmospheres",
    images: [
      { src: "/day-spa.jpeg", alt: "Peaceful spa setting" },
      { src: "/pool.jpeg", alt: "Relaxing pool area" },
      { src: "/pool2.jpeg", alt: "Tranquil water features" },
    ],
    badge: "Ambience"
  },
  {
    title: "Wellness Moments",
    description: "Capturing the essence of relaxation and rejuvenation",
    images: [
      { src: "/outdoor.jpeg", alt: "Outdoor relaxation space" },
      { src: "/bed.jpeg", alt: "Comfortable treatment area" },
      { src: "/citing-room.jpeg", alt: "Peaceful meditation space" },
    ],
    badge: "Wellness"
  }
]

const featuredImages = [
  { src: "/day-spa.jpeg", alt: "Main spa treatment room", title: "Our Signature Treatment Space", category: "Featured" },
  { src: "/spa1.jpeg", alt: "Professional massage therapy", title: "Expert Massage Therapy", category: "Massage" },
  { src: "/dayspa4.jpeg", alt: "Luxury facial treatment", title: "Premium Facial Care", category: "Facials" },
  { src: "/pool.jpeg", alt: "Relaxation pool area", title: "Tranquil Pool Setting", category: "Ambience" },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-spa-pink-50 to-spa-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full shadow-2xl mb-8 animate-float">
              <Eye className="w-10 h-10 text-spa-white" />
            </div>
            
            <h1 className="font-playfair font-bold text-5xl sm:text-6xl text-spa-black mb-6">
              Spa Gallery
            </h1>
            <p className="font-lora text-xl text-spa-beige-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the beauty and tranquility of our spa treatments through these carefully captured moments 
              of relaxation, rejuvenation, and pure bliss.
            </p>
            
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/services" className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Book Your Experience</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Images Grid */}
      <section className="py-20 bg-spa-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-4">
              Featured Moments
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 max-w-2xl mx-auto">
              Discover the beauty and serenity that awaits you at Style & Beyouti Zone Spa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredImages.map((image, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-b from-spa-white to-spa-beige-50 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-spa-pink-500/20 text-spa-pink-700 border border-spa-pink-500/30 font-poppins">
                      {image.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-playfair font-semibold text-spa-white text-lg mb-1">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-20 bg-gradient-to-b from-spa-beige-50 to-spa-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-4">
              Treatment Categories
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 max-w-2xl mx-auto">
              Explore our different spa services and the beautiful environments where relaxation happens
            </p>
          </div>

          <div className="space-y-20">
            {galleryCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fadeIn" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center space-x-4 mb-4">
                    <Badge className="bg-gradient-to-r from-spa-pink-100 to-spa-gold-100 text-spa-pink-700 border border-spa-pink-300 font-poppins px-4 py-2">
                      {category.badge}
                    </Badge>
                  </div>
                  <h3 className="font-playfair font-bold text-3xl text-spa-black mb-3">
                    {category.title}
                  </h3>
                  <p className="font-poppins text-spa-beige-600 text-lg max-w-lg mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.images.map((image, imageIndex) => (
                    <Card 
                      key={imageIndex}
                      className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-spa-white animate-slideIn"
                      style={{ animationDelay: `${(categoryIndex * 200) + (imageIndex * 100)}ms` }}
                    >
                      <div className="relative h-80 overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-spa-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="font-poppins text-spa-white text-sm">
                            {image.alt}
                          </p>
                        </div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-10 h-10 bg-spa-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                            <Heart className="w-5 h-5 text-spa-pink-600" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-20 bg-spa-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black mb-6">
              Find Your Inspiration
            </h2>
            <p className="font-lora text-xl text-spa-beige-700 mb-8 leading-relaxed">
              Every image tells a story of transformation, relaxation, and self-care. 
              Let these moments inspire your own journey to wellness and beauty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-gradient-to-b from-spa-pink-50 to-spa-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-spa-pink-400 to-spa-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-spa-white" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-spa-black mb-2">Self-Care</h3>
                <p className="font-poppins text-spa-beige-600 text-sm">Prioritize your wellbeing with our nurturing treatments</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-b from-spa-gold-50 to-spa-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-spa-gold-400 to-spa-beige-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-spa-white" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-spa-black mb-2">Beauty</h3>
                <p className="font-poppins text-spa-beige-600 text-sm">Enhance your natural radiance with expert care</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-b from-spa-beige-50 to-spa-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-spa-beige-400 to-spa-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-spa-white" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-spa-black mb-2">Serenity</h3>
                <p className="font-poppins text-spa-beige-600 text-sm">Find peace and tranquility in every moment</p>
              </div>
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
              Create Your Own Beautiful Moments
            </h2>
            <p className="font-lora text-xl text-spa-white/90 mb-10 max-w-2xl mx-auto">
              Ready to experience the relaxation and beauty you see in our gallery? 
              Book your personalized spa session with Kumarie today.
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
                <Link href="https://wa.me/0617747378?text=Hi, I'd like to book a spa treatment" className="flex items-center space-x-2" target="_blank">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </Link>
              </Button>
            </div>

            <div className="mt-8">
              <p className="font-poppins text-spa-white/80 text-sm">
                ✨ Your relaxation journey starts here 💆‍♀️
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
