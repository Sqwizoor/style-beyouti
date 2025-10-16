import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

// Easy to edit gallery data
const featuredImage = {
  src: "/cool-food2.jpeg",
  alt: "Luxury spa treatment room",
  title: "Serene Treatment Spaces",
}

const mainGallery = [
  { src: "/new-kids4.jpeg", alt: "Massage therapy session" },
  { src: "/facial.jpeg", alt: "Facial treatment setup" },
]

const galleryCategories = [
  {
    title: "Kids Spa Experience",
    items: [
      { src: "/kids-massage.jpeg", alt: "Kids spa treatments" },
      { src: "/kids11.jpeg", alt: "Princess spa package" },
      { src: "/kids7.jpeg", alt: "Teen spa treatments" },
      { src: "/kids9.jpeg", alt: "Family spa sessions" },
      { src: "/mass2.jpeg", alt: "Kids spa activities" },
    ],
  },
  {
    title: "Delicious Refreshments",
    items: [
      { src: "/spa-food.jpeg", alt: "Gourmet spa meals" },
      { src: "/spa-food2.jpeg", alt: "Healthy snacks" },
      { src: "/drinks.jpeg", alt: "Fresh beverages" },
      { src: "/spa-food3.jpeg", alt: "Group dining" },
      { src: "/pool.jpeg", alt: "Pool relaxation" },
    ],
  },
  {
    title: "Premium Spa Treatments",
    items: [
      { src: "/dayspa3.jpeg", alt: "Aromatherapy treatments" },
      { src: "/outdoor.jpeg", alt: "Garden massage" },
      { src: "/mass4.jpeg", alt: "Pool relaxation" },
      { src: "/mass1.jpeg", alt: "Pooljh relaxation" },
      { src: "/dayspa6 (2).jpeg", alt: "Hot stone therapy" },
    ],
  },
  
]

export default function ModernGallerySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4">Experience the Serenity</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse into our world of relaxation and wellness
          </p>
        </div>

        {/* Featured Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {/* Large Featured Image */}
          <div className="md:col-span-2 lg:col-span-2 relative h-96 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src={featuredImage.src || "/placeholder.svg"}
              alt={featuredImage.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white">{featuredImage.title}</h3>
            </div>
          </div>

          {/* Side Gallery Items */}
          <div className="space-y-6">
            {mainGallery.map((item, index) => (
              <div key={index} className="relative h-44 rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Category Sections */}
        <div className="space-y-16">
          {galleryCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-center mb-8">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="relative h-48 rounded-xl overflow-hidden group cursor-pointer">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
