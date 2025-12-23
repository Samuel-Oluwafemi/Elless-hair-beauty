export function Services() {
  return (
    <>
      <section
        id="services"
        className="py-20 px-4 bg-gradient-to-b from-white to-fuchsia-100"
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
            {/* first column */}
            <div className="bg-white text-left rounded-lg shadow-lg hover:shadow-fuchsia-400/50 transition-shadow duration-300">
              <div className=" w-full">
                <img
                  src="/images/elless wigs.jpeg"
                  alt=""
                  className="w-full h-50 rounded-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-fuchsia-500">
                  Wigs
                </h3>
                <p className="text-gray-700">
                  Transform your look instantly with our stunning collection of
                  wigs. Whether you desire a new color, length, or style, our
                  wigs offer versatility and convenience.
                </p>
              </div>
            </div>
            {/* Second column */}
            <div className="bg-white text-left rounded-lg shadow-lg hover:shadow-fuchsia-400/50 transition-shadow duration-300">
              <div className=" w-full">
                <img
                  src="/images/elless makeup.jpeg"
                  alt=""
                  className="w-full h-50 rounded-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-fuchsia-500">
                  Makeup Services
                </h3>
                <p className="text-gray-700">
                  Enhance your natural beauty with our professional makeup
                  services. We use only high-quality makeup products to ensure a
                  flawless and long-lasting finish.
                </p>
              </div>
            </div>
            {/* Third column */}
            <div className="bg-white text-left rounded-lg shadow-lg hover:shadow-fuchsia-400/50 transition-shadow duration-300">
              <div className=" w-full">
                <img
                  src="/images/elless hair extensions.jpeg"
                  alt=""
                  className="w-full h-50 rounded-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-fuchsia-500">
                  Hair Extensions
                </h3>
                <p className="text-gray-700">
                  Add length, volume, and dimension to your hair with our
                  premium hair extensions. We offer a variety of extension
                  methods to suit your hair type and lifestyle needs.
                </p>
              </div>
            </div>
            {/* Fourth column */}
            <div className="bg-white text-left rounded-lg shadow-lg hover:shadow-fuchsia-400/50 transition-shadow duration-300">
              <div className=" w-full">
                <img
                  src="/images/elless nails.jpeg"
                  alt=""
                  className="w-full h-50 rounded-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-fuchsia-500">
                  Nail Fixing & Polishing
                </h3>
                <p className="text-gray-700">
                  Indulge in our luxurious nail care services. Creative and
                  artistic nail designs that express your unique style and
                  personality.
                </p>
              </div>
            </div>
            {/* Fifth column */}
            <div className="bg-white text-left rounded-lg shadow-lg hover:shadow-fuchsia-400/50 transition-shadow duration-300">
              <div className=" w-full">
                <img
                  src="/images/elless Tooth Gem.jpeg"
                  alt=""
                  className="w-full h-50 rounded-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-fuchsia-500">
                  Tooth Gem Fixing
                </h3>
                <p className="text-gray-700">
                  Add a touch of sparkle to your smile with our tooth gem fixing
                  service. We make your smile shine with our safe and stylish
                  tooth gem application.
                </p>
              </div>
            </div>
            {/* Sixth column */}
            <div className="bg-white text-left rounded-lg shadow-lg hover:shadow-fuchsia-400/50 transition-shadow duration-300">
              <div className=" w-full">
                <img
                  src="/images/elless braiding2.jpeg"
                  alt=""
                  className="w-full h-50 rounded-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-fuchsia-500">
                  Braiding & Hair Attachment Services
                </h3>
                <p className="text-gray-700">
                  Add a touch of sparkle to your smile with our tooth gem fixing
                  service. We make your smile shine with our safe and stylish
                  tooth gem application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
