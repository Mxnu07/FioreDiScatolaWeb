function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-50" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div className="space-y-6">
          <p className="inline-flex rounded-full bg-white/80 px-4 py-2 text-sm text-rose-700 shadow-soft">
            Handcrafted floral arrangements for every moment
          </p>
          <h1 className="font-heading text-4xl leading-tight text-rose-900 sm:text-5xl lg:text-6xl">
            Bloom &amp; Petal Florist Studio
          </h1>
          <p className="max-w-lg text-lg text-slate-700">
            Soft, seasonal flowers designed with love. Browse our signature
            arrangements and reserve your custom order in minutes.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#products"
              className="rounded-full bg-rose-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-rose-700"
            >
              Shop Arrangements
            </a>
            <a
              href="#order"
              className="rounded-full border border-rose-300 bg-white px-6 py-3 font-semibold text-rose-700 transition hover:bg-rose-100"
            >
              Reserve Your Order
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=80"
            alt="Floral arrangement on table"
            className="h-[430px] w-full rounded-3xl object-cover shadow-soft"
          />
          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white/90 p-4 shadow-soft">
            <p className="text-sm text-slate-500">Local Pickup & Delivery</p>
            <p className="font-semibold text-rose-700">Same-day slots available</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
