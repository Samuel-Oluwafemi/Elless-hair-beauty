export function Services() {
  return (
    <>
      <section
        id="services"
        className="py-20 px-4 bg-gradient-to-b from-white to-pink-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-playfair font-bold text-pink-600 mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-pink-400/50 transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-pink-500">
                Hair Styling
              </h3>
              <p className="text-gray-700">
                Professional haircuts, coloring, and styling to make you look
                and feel your best.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-pink-400/50 transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-pink-500">
                Makeup Services
              </h3>
              <p className="text-gray-700">
                Expert makeup application for special occasions, ensuring you
                shine.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-pink-400/50 transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-pink-500">
                Skincare Treatments
              </h3>
              <p className="text-gray-700">
                Rejuvenating facials and skincare routines tailored to your skin
                type.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
