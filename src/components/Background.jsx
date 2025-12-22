export function Background() {
  return (
    <>
    <div className="relative h-screen w-full backdrop-blur-sm">
      {/* Hero Image */}
      <img
        src="/images/alireza-skndari-w9GupV7aB1E-unsplash.jpg"
        // alt="Background"
        className="w-full h-full object-cover">
        </img>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center h-full text-center px-4">
            <h1 className="text-6xl md:text-7xl font-playfair font-bold text-white mb-8 md:mb-4">
              Welcome to Elless Hair & Beauty</h1>
            <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl">
              Your beauty is our duty. Experience top-notch hair and beauty services tailored just for you.
            </p>
            <a
              href="#services"
              className="inline-block bg-gradient-to-r from-white to-pink-500 text-black font-semibold py-4 px-7 md:py-3 px-6 rounded-full hover:bg-pink-600 transition"
            >
              Explore Our Services
            </a>
        </div>
    </div>

      </>
  );
}
3