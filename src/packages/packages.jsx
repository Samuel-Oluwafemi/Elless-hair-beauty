import { MarqueePackages } from "./marqueePackages";
export function Packages() {
  return (
    <>
      <section id="packages" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-fuchsia-600 mb-4">
                Exclusive Packages
            </h2>
            <p className="text-black text-lg md:px-18 max-w-3xl mx-auto mb-12">
                Discover our exclusive packages designed to provide you with the ultimate beauty experience at unbeatable value. Each package combines our most popular services to help you look and feel your best.
            </p>    
            <MarqueePackages />
        </div>
      </section>
    </>
  );
}
