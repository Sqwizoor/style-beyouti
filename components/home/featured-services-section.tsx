import Image from 'next/image'

export function FeaturedServicesSection() {
  const services = [
    {
      title: "Luxurious Massages",
      description: "Experience deep relaxation with our range of therapeutic massages, from Swedish to deep tissue.",
      image: "/massage-bed.jpeg",
    },
    {
      title: "Rejuvenating Facials",
      description: "Revitalize your skin with our customized facial treatments using premium skincare products.",
      image: "/facials.jpeg",
    },
    {
      title: "Couples Packages",
      description: "Share a memorable spa experience with your loved one in our intimate couples treatment rooms.",
      image: "/couple.jpeg",
    },
    {
      title: "Kids Spa Day",
      description: "Introduce your little ones to wellness with our specially designed kids spa treatments.",
      image: "/kids-massage.jpeg",
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-spa-black dark:text-spa-white mb-4">
            Our Featured Services
          </h2>
          <p className="font-lora text-xl text-spa-beige-700 dark:text-spa-beige-300">
            Indulge in our signature treatments designed for your ultimate relaxation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-spa-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-spa-beige-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair font-semibold text-xl text-spa-black dark:text-spa-white mb-2">
                  {service.title}
                </h3>
                <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}