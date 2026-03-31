function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 rounded-3xl bg-white p-8 shadow-soft lg:grid-cols-2 lg:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">
            About Our Studio
          </p>
          <h2 className="mt-2 font-heading text-3xl text-rose-900 sm:text-4xl">
            Neighborhood florist with a modern touch
          </h2>
          <p className="mt-4 text-slate-600">
            We craft everyday bouquets, event florals, and meaningful gifts
            using fresh seasonal flowers. Every arrangement is designed by hand
            to feel elegant, warm, and personal.
          </p>
          <p className="mt-3 text-slate-600">
            Need local delivery or in-store pickup? Reserve your arrangement
            below and we will confirm details by email shortly after your
            request.
          </p>
        </div>
        <div className="rounded-2xl bg-rose-50 p-6">
          <h3 className="font-heading text-2xl text-rose-800">
            Pickup & Delivery Info
          </h3>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>Mon-Sat: 9:00 AM - 6:00 PM</li>
            <li>Same-day local delivery on requests before 1 PM</li>
            <li>Store pickup available at our downtown studio</li>
            <li>Custom event arrangements by pre-order</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
