import Marquee from "react-fast-marquee";
export function MarqueePackages() {
  const scroll = [
    {
      id: 1,
      title: "Wigs package",
      image: "/images/elless wigs.jpeg",
      description: "Bone Straight wig with Lace Front",
      badge: "New Arrivals",
      price: "#350,000",
    },
    {
      id: 2,
      title: "Makeup package",
      image: "/images/elless bridal makeup.jpeg",
      description: "Bridal Makeup Service (full face)",
      badge: "Best Seller",
      price: "#20,000",
    },
    {
      id: 3,
      title: "Combo package",
      image: "/images/elless polishing.jpeg",
      description: "Glow Combo (Nail polishing + Manicure)",
      badge: "Most Popular",
      price: "#10,000",
    },
    {
      id: 4,
      title: "Tooth Gem package",
      image: "/images/elless gems.jpeg",
      description: "Braces Tooth Gem Fixing (2pcs)",
      badge: "Save #10,000",
      price: "#20,000",
    },
    {
      id: 5,
      title: "Hair Extension package",
      image: "/images/elless hair extensions.jpeg",
      description: "Clip-in Hair Extensions",
      badge: "Limited Promo",
      price: "#30,000",
    },
  ];
  const marqueeSpeed = 40; // Adjust the speed as needed
  const shadowStyle = "shadow-lg shadow-fuchsia-300/50";
  const direction = "left"; // can also change this to "right" if needed
      return (
          <>
      <section className="py-8 h-full overflow-hidden">
        <Marquee
          speed={marqueeSpeed}
          gradient={false}
          pauseOnHover={true}
          pauseOnClick={true}
          shadowStyle={shadowStyle}
          direction={direction}
        >
          <div className="flex gap-10 px-4">
            {/* loop through each service */}
            {scroll.map((pkg) => (
              // services container
              <div
                key={pkg.id}
                className="relative p-5 py-10 rounded-xl overflow-hidden 
                transition-all transition-transform hover:scale-105 hover:rounded-xl 
                duration-300 transition-shadow duration-300"
              >
                {/* service img */}
                <div className="absolute overflow-hidden inset-0">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                    />
                  {/* service overlay bg-color */}
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                {/* badge */}
                <div className="relative text-center z-10">
                  {pkg.badge && (
                    <div style={{
                        fontSize: '10px'
                    }} className="absolute top-3 right-1 bg-fuchsia-700 text-white font-semibold px-2 py-1 rounded-full shadow-lg">
                      {pkg.badge}
                    </div>
                  )}
                </div>
                {/* service title */}
                <div className="relative text-center z-10 p-4">
                  <h3
                    style={{
                      fontSize: "12px",
                    }}
                    className="font-semibold mb-4 text-fuchsia-100"
                  >
                    {pkg.title}
                  </h3>
                  {/* service description */}
                  <p
                    style={{
                      fontFamily: "script MT",
                    }}
                    className="text-white text-2xl mb-2"
                  >
                    {pkg.description}
                  </p>
                  {/* service price */}
                  <p className="text-fuchsia-300 text-3xl font-bold">
                    {pkg.price}
                  </p>
                  {/* service cta button */}
                  <button
                    className="mt-10 bg-gradient-to-r from-white to-fuchsia-600 text-black 
                    text-sm rounded-full py-3 border border-gray-100 px-18 mx-auto cursor-pointer text-center
                    hover:bg"
                  >
                    Book this package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </section>
    </>
  );
}
