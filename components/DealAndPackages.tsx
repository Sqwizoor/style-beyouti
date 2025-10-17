"use client"
import { Button } from "./ui/button"
import Link from "next/link"
import { Clock, MessageCircle, Phone, Sparkles, Star } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

// Easy to edit package data
const packages = [
  {
    id: "garden-massage",
    title: "Garden Massages",
    description: "Perfect chillout place with birds chirping, fresh air, and a romantic atmosphere.",
    image: "/outdoor.jpeg",
    price: 550,
    originalPrice: 700,
    duration: "90 mins",
    badge: "NEW",
    icon: "🏡",
    features: ["Garden Setting", "Hot Stones", "Romantic Atmosphere"],
    whatsappText: "Hi! I'm interested in the Garden Massage package (R550). Please let me know about availability.",
  },
  {
    id: "in-store-specials",
    title: "Crazy In-Store Specials",
    description: "Amazing in-store specials with unbelievable deals. Visit our spa to discover more.",
    image: "/ximg2.jpeg",
    price: 1,
    originalPrice: 2,
    duration: "Various",
    badge: "CRAZY",
    icon: "🎉",
    features: ["Limited Time", "In-Store Only", "Amazing Value"],
    whatsappText: "Hi! I'd like to know more about the Crazy In-Store Specials. What deals are currently available?",
  },
  {
    id: "5-treatments",
    title: "2 Hour 5 Treatments Package",
    description: "Complete pamper package with 5 treatments including massage, pedicure, and exfoliation.",
    image: "/2hour-treatments.png",
    price: 650,
    originalPrice: 950,
    duration: "2 Hours",
    icon: "🧖‍♀️",
    features: ["Save R300", "5 Treatments", "2 Hours"],
    treatments: [
      "Hotstones/Swedish Full Body Massage: 60 mins",
      "Indian head massage: 10 mins",
      "Back Exfoliation: 10 mins",
      "Express Pedicure: 20 mins",
      "Leg Glow Exfoliation: 10 mins",
    ],
    whatsappText: "Hi! I'm interested in the 2 Hour 5 Treatments Package (R650). When is your next availability?",
  },
  {
    id: "couples-deluxe",
    title: "Couples Deluxe Love Package",
    description: "Exclusive deluxe experience for couples in a private, relaxing environment.",
    image: "/couples-love.jpeg",
    price: 1950,
    originalPrice: 2500,
    duration: "Full Day",
    badge: "DELUXE",
    icon: "💕",
    features: ["Save R550", "Deluxe Package", "For Couples"],
    whatsappText:
      "Hi! I'm interested in the Couples Deluxe Love Package (R1,950). Please tell me more about this exclusive experience.",
  },
  {
    id: "come-relax",
    title: "Come Relax at Style & Beyouti Spa",
    description: "Relax your mind, body, and tummy with our complete wellness experience.",
    image: "/ximg3.jpeg",
    price: null,
    duration: "Various",
    icon: "🧖‍♀️",
    features: ["Mind • Body • Tummy", "Book Now"],
    whatsappText:
      "Hi! I'd like to relax my mind, body, and tummy at Style & Beyouti Spa. Please help me book an appointment!",
  },
  {
    id: "massage-facial",
    title: "Massage with Facial",
    description: "Revive and Instant Glow Package with 4 treatments.",
    image: "/again-he.png",
    price: 650,
    originalPrice: 780,
    duration: "1hr 30mins",
    icon: "✨",
    features: ["Save R130", "4 Treatments", "Instant Glow"],
    treatments: [
      "Hotstones/Swedish Full Body Massage: 50 mins",
      "Indian head massage: 5 mins",
      "Back Exfoliation: 5 mins",
      "Instant Glow Facial: 30 mins",
    ],
    whatsappText: "Hi! I'm interested in the Revive and Instant Glow Package (R650). When is your next availability?",
  },
  {
    id: "treat-yourself",
    title: "Treat Yourself Package",
    description: "Crazily low special for body, mind, and spirit care.",
    image: "/ximg.jpeg",
    price: 399,
    originalPrice: 550,
    duration: "Various",
    badge: "CRAZY",
    icon: "💅",
    features: ["Save R151", "Body • Mind • Spirit", "For Everyone"],
    whatsappText: "Hi! I'm interested in the Treat Yourself Package (R399). When is your next availability?",
  },
  {
    id: "kids-pamper",
    title: "Kids Pamper",
    description: "Special pamper package designed for children with massage, pedicure, and nail polish.",
    image: "/dayspa2.jpeg",
    price: 350,
    duration: "45 mins",
    icon: "👧",
    features: ["45 mins Treatment", "Gowns & Slippers Included"],
    treatments: [
      "Back Neck and Shoulder Massage: 15 mins",
      "Express Pedicure: 15 mins",
      "Foot massage: 15 mins",
      "Nail polish painted",
    ],
    whatsappText:
      "Hi! I'm interested in the Kids Pamper package (R350 per child). Please let me know about availability.",
  },
  {
    id: "couples-combo",
    title: "Couples Combo for 2",
    description: "Personal, private, and affordable pamper package for 2 people.",
    image: "/couples.jpeg",
    price: 650,
    originalPrice: 900,
    duration: "60 mins",
    icon: "💕",
    features: ["Save R250", "For 2 People", "60 Minutes"],
    treatments: ["Hotstones/Swedish Full Body Massage: 50 mins", "Indian Head Massage: 10 mins"],
    whatsappText: "Hi! I'm interested in the Couples Combo for 2 (R650). When is your next availability?",
  },
  {
    id: "aromatherapy",
    title: "Aromatherapy Pamper for 2",
    description: "Aromatherapy and relaxation treatments for 2 people.",
    image: "/deal-two.jpeg",
    price: 550,
    duration: "40 mins",
    icon: "🌞",
    features: ["For 2 People", "40 Minutes", "Free Foot Massage"],
    treatments: [
      "Aromatherapy Neck, Back and Shoulder Massage: 20 mins",
      "Back Exfoliation: 5 mins",
      "Indian Head Massage: 5 mins",
      "Free 10 mins Foot Massage",
    ],
    whatsappText: "Hi! I'm interested in the Aromatherapy Pamper for 2 (R550). When is your next availability?",
  },
  {
    id: "massage-60",
    title: "Massage Treatments 60mins",
    description: "Massage is not just a luxury. It's a way to a healthier, happier life.",
    image: "/service2.png",
    price: 300,
    originalPrice: 400,
    duration: "60 mins",
    icon: "💆‍♀️",
    features: ["Save R100", "60 Minutes"],
    whatsappText: "Hi! I'm interested in the Massage Treatments 60mins (R300). When is your next availability?",
  },
  {
    id: "just-for-you",
    title: "Just for you @ R500pp",
    description: "Full Body Hotstone Massage plus Back Exfoliation and Head Massage with snacks.",
    image: "/service3.png",
    price: 500,
    originalPrice: 650,
    duration: "1 hour",
    icon: "💆‍♀️",
    features: ["Save R150", "Includes Snacks & Drink"],
    whatsappText: "Hi! I'm interested in the Just for you @ R500pp package. When is your next availability?",
  },
  {
    id: "instant-glow",
    title: "Amazing Instant Glow Facial",
    description: "Instant Glow Facial leaving your skin soft, refreshed and glowing.",
    image: "/facials.jpeg",
    price: 200,
    originalPrice: 350,
    duration: "30 mins",
    icon: "✨",
    features: ["Save R150", "Free Foot Massage"],
    whatsappText: "Hi! I'm interested in the Amazing Instant Glow Facial (R200). When is your next availability?",
  },
  {
    id: "garden-90",
    title: "90mins Hotstones Garden Massage",
    description: "Garden massage with birds chirping, fresh air, and romantic atmosphere.",
    image: "/massage-combo.png",
    price: 550,
    originalPrice: 700,
    duration: "90 mins",
    icon: "💆‍♀️",
    features: ["Garden Setting", "Hot Stones", "Romantic Atmosphere"],
    whatsappText:
      "Hi! I'd like to book a 90mins Hotstones Massage in the garden (R550). When is your next availability?",
  },
  {
    id: "5-amazing",
    title: "Amazing 5 Treatments",
    description: "5 treatments at our Spa in Jhb South with indoor swimming pool access.",
    image: "/5amazing.jpeg",
    price: 400,
    originalPrice: 550,
    duration: "Various",
    icon: "🌟",
    features: ["5 Treatments", "Indoor Pool", "Jhb South Location"],
    whatsappText: "Hi! I'd like to book the Amazing 5 Treatments package (R400). When is your next availability?",
  },
]

export default function ModernDealsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full shadow-lg mb-6">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="font-bold text-4xl sm:text-5xl text-foreground mb-4 text-balance">
            Exclusive Deals & Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover our current specials designed to give you exceptional value while experiencing our premium spa
            treatments
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-card hover:scale-105 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden bg-muted">
                <div className="relative w-full h-full p-4">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      fill
                      quality={100}
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Price Badge */}
                {pkg.price && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 py-1.5 rounded-lg font-bold shadow-lg min-w-[70px]">
                    <div className="text-center">
                      <div className="text-sm font-bold whitespace-nowrap">R{pkg.price}</div>
                      {pkg.originalPrice && (
                        <div className="text-xs line-through opacity-80 whitespace-nowrap">R{pkg.originalPrice}</div>
                      )}
                    </div>
                  </div>
                )}

                {/* Badge */}
                {pkg.badge && (
                  <div
                    className={`absolute top-4 left-4 ${pkg.badge === "CRAZY" ? "bg-gradient-to-r from-red-600 to-orange-600 animate-pulse" : "bg-gradient-to-r from-primary to-accent"} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}
                  >
                    {pkg.badge === "CRAZY" ? "🔥 CRAZY!" : pkg.badge === "DELUXE" ? "💎 DELUXE" : `${pkg.badge}! 💆‍♀️`}
                  </div>
                )}

                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{pkg.duration}</span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4 text-3xl z-10">{pkg.icon}</div>
              </div>

              {/* Content Section */}
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(5.0)</span>
                </div>

                <h3 className="font-semibold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {pkg.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">{pkg.description}</p>

                {/* Treatments List */}
                {pkg.treatments && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-foreground mb-2">Treatments Included:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {pkg.treatments.map((treatment, idx) => (
                        <li key={idx}>• {treatment}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Booking Button */}
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link
                    href={`https://wa.me/27617747378?text=${encodeURIComponent(pkg.whatsappText)}`}
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border">
            <h3 className="font-bold text-3xl text-foreground mb-4 text-balance">
              Ready to Take Advantage of These Exclusive Deals?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              These special packages are designed to give you exceptional value while experiencing our premium spa
              treatments. Book now to secure your preferred time and package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="tel:0617747378" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>Call to Book Your Deal</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 font-medium px-8 rounded-full transition-all duration-300 bg-transparent"
              >
                <Link
                  href="https://wa.me/27617747378?text=Hi! I'd like to know more about your exclusive deals and packages. Which one would you recommend for me?"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Ask About Deals</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
