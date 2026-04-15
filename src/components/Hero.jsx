import fioreBrandWordmark from "../assets/fiore-di-scatola/FioreDiScatolaBlkTrans.png";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-olive-100 to-olive-50 background-transparent opacity-50" />
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="space-y-6 text-center">
          <h1 className="flex justify-center">
            <img
              src={fioreBrandWordmark}
              alt="Fiore di Scatola"
              className="mx-auto h-auto w-full max-w-[860px] object-contain"
              loading="eager"
              decoding="async"
            />
          </h1>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#catalog"
              className="rounded-full bg-olive-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-olive-700"
            >
              View Arrangements
            </a>
            <a
              href="#order"
              className="rounded-full border border-olive-300 bg-white px-6 py-3 font-semibold text-olive-700 transition hover:bg-olive-100"
            >
              Reserve Your Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
