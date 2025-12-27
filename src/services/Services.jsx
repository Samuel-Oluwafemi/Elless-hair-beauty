import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
export function Services() {
  const services = [
    {
      id: 1,
      title: "Wigs",
      image: "/images/elless wigs.jpeg",
      description:
        "Transform your look instantly with our stunning collection of wigs. Whether you desire a new color, length, or style, our wigs offer versatility and convenience.",
    },
    {
      id: 2,
      title: "Makeup Services",
      image: "/images/elless makeup.jpeg",
      description:
        "Enhance your natural beauty with our professional makeup services. We use only high-quality makeup products to ensure a flawless and long-lasting finish.",
    },
    {
      id: 3,
      title: "Hair Extensions",
      image: "/images/elless hair extensions.jpeg",
      description:
        "Add length, volume, and dimension to your hair with our premium hair extensions. We offer a variety of extension methods to suit your hair type and lifestyle needs.",
    },
    {
      id: 4,
      title: "Nail Fixing & Polishing",
      image: "/images/elless nails.jpeg",
      description:
        "Indulge in our luxurious nail care services. Creative and artistic nail designs that express your unique style and personality.",
    },
    {
      id: 5,
      title: "Tooth Gem Fixing",
      image: "/images/elless Tooth Gem.jpeg",
      description:
        "Add a touch of sparkle to your smile with our tooth gem fixing service. We make your smile shine with our safe and stylish tooth gem application.",
    },
    {
      id: 6,
      title: "Braiding & Hair Attachment Services",
      image: "/images/elless braiding2.jpeg",
      description:
        "Transform your hair with our expert braiding and hair attachment services. We offer a variety of braiding styles.",
    },
    {
      id: 7,
      title: "Luxury Pedicure",
      image: "/images/elless pedicure.jpeg",
      description:
        "Experience ultimate relaxation with our luxury pedicure services. Our expert technicians will pamper your feet, leaving them soft, smooth, and beautifully polished.",
    },
  ];

  const [expandedService, setExpandedService] = useState(false);
  // if expandedService is true show all services else show first 3 services
  const visibleServices = expandedService ? services : services.slice(0, 3);
  return (
    <>
      <section
        id="services"
        className="py-15 px-4 bg-gradient-to-b from-white to-fuchsia-100"
      >
        {/* Services header */}
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-fuchsia-600 mb-4">
            Our Services
          </h2>
          <p className="text-black text-lg md:px-18 max-w-3xl mx-auto mb-12">
            Elless Hair and Beauty offers a wide array of services, each
            meticulously crafted to meet your unique needs and preferences. We
            pride ourselves on using only the highest quality products
          </p>
          {/* Services section grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* loop through each service */}
            {visibleServices.map((service) => (
              <div
                key={service.id}
                className="bg-white text-left rounded-lg hover:scale-105 transition-all transition-transform duration-300 shadow-lg 
                   hover:shadow-fuchsia-400/50 transition-shadow duration-300"
              >
                {/* service img */}
                <div className="w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-50 relative group-hover:scale-105 transition-transform duration-300 rounded-t-lg object-cover"
                  />
                </div>
                {/* service title */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-fuchsia-500">
                    {service.title}
                  </h3>
                  {/* servie desc */}
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Show more / Show less btn */}
        <button
          type="button"
          onClick={() => setExpandedService((prev) => !prev)}
          className="bg-gradient-to-r from-white to-fuchsia-600 text-black rounded-full py-3 px-6 mx-auto text-center
            flex justify-center mt-10 font-semibold hover:bg-fuchsia-600 hover:scale-105 transition-all
             transition-transform duration-300 hover:shadow-fuchsia-400/50 hover:bg-gradient-to-r cursor-pointer"
        >
          {/* Chevrondownicon to match the btn */}
          <div className="flex items-center gap-2 cursor-pointer">
            {expandedService ? "Show Less" : "Show More"}
            <ChevronDownIcon
              className={`w-5 text-black transition-transform duration-300 ${
                expandedService ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>
      </section>
    </>
  );
}
