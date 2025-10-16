import { Metadata } from "next"
import Footer from '@/components/footer'
import HeroSection from '@/components/sections/HeroSection'
import DealsSection from '@/components/sections/DealsSection'
import FoodActivitiesSection from '@/components/sections/FoodActivitiesSection'
import GallerySection from '@/components/sections/GallerySection'
import EventsSection from '@/components/sections/EventsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import HoursSection from '@/components/sections/HoursSection'
import CTASection from '@/components/sections/CTASection'
import ReviewsSection from '@/components/sections/ReviewsSection'

export const metadata: Metadata = {
  title: "Style & Beyouti Zone Spa | Personal • Private • Affordable • Relaxing",
  description: "Experience luxury spa treatments in the comfort of your own space. Style & Beyouti Zone Spa offers personal, private, and affordable relaxation services. Book your at-home spa session today!",
  keywords: "spa services, at-home spa, massage therapy, facials, relaxation treatments, affordable spa, private spa, mobile spa, aromatherapy, personal spa treatments",
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
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DealsSection />
      <FoodActivitiesSection />
      <GallerySection />
      <EventsSection />
      <ProcessSection />
      <HoursSection />
      <CTASection />
      <ReviewsSection />
      <Footer />
    </div>
  )
}
