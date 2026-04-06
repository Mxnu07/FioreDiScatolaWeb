import storefrontPhoto from "../assets/fiore-di-scatola/local_photo.png";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-olive-100 to-olive-50" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div className="space-y-6">
          <p className="inline-flex rounded-full bg-white/80 px-4 py-2 text-sm text-olive-700 shadow-soft">
            Beautiful floral arrangements for every special moment
          </p>
          <h1 className="font-heading text-4xl leading-tight text-olive-900 sm:text-5xl lg:text-6xl">
            Fiore di Scatola
          </h1>
          <p className="max-w-lg text-lg text-slate-700">
            We&apos;re a local florist in Levittown, Puerto Rico, offering fresh
            flowers for everyday gifts, celebrations, and thoughtful surprises.
            Browse our arrangements and send an order request when you&apos;re ready.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#products"
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
        <div className="relative">
          <img
            src={storefrontPhoto}
            alt="Fiore di Scatola storefront at Plaza San Antonio, Levittown"
            className="h-[min(430px,65vh)] min-h-[280px] w-full rounded-3xl object-cover object-[center_28%] shadow-soft sm:h-[430px] sm:object-[center_25%]"
            width={900}
            height={1200}
            decoding="async"
          />
          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white/90 p-4 shadow-soft">
            <p className="text-sm text-slate-500">Levittown, Puerto Rico</p>
            <p className="font-semibold text-olive-700">
              5.0 stars based on 5 Google reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
