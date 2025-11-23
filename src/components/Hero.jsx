import HeroImg from "../assets/HeroImg1.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[90vh] bg-cover bg-center text-white flex items-center px-8 scroll-mt-30"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Clean Solar Energy
        </h1>

        <p className="mt-4 text-lg md:text-xl drop-shadow">
          Save money • Go green • Get Govt Subsidy up to ₹78,000
        </p>

        <a href="#contact">
          <button className="mt-6 px-6 py-3 bg-yellow-500 rounded shadow text-black font-semibold">
            Get Free Quote
          </button>
        </a>
      </div>
    </section>
  );
}
