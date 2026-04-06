function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 rounded-3xl bg-white p-8 shadow-soft lg:grid-cols-2 lg:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-olive-600">
            About Fiore di Scatola
          </p>
          <h2 className="mt-2 font-heading text-3xl text-olive-900 sm:text-4xl">
            Fresh flowers from your Levittown florist
          </h2>
          <p className="mt-4 text-slate-600">
            Fiore di Scatola is a local florist serving Levittown and nearby
            communities in Puerto Rico. We focus on fresh, natural-looking
            arrangements for birthdays, anniversaries, sympathy, and everyday
            gestures that mean a lot.
          </p>
          <p className="mt-3 text-slate-600">
            Browse our featured arrangements on this page, then use the order
            request form to reserve what you need or share special instructions.
            We&apos;ll follow up to confirm availability, pickup, and any details.
          </p>
        </div>
        <div className="rounded-2xl bg-olive-50 p-6">
          <h3 className="font-heading text-2xl text-olive-800">
            Visit &amp; contact
          </h3>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>
              Plaza San Antonio, Av. Los Dominiocos Local 1-D, Levittown, Toa
              Baja 00949
            </li>
            <li>
              <a
                href="tel:+17879392282"
                className="font-medium text-olive-700 underline-offset-2 hover:underline"
              >
                (787) 939-2282
              </a>
            </li>
            <li>Order requests and reservations through the form below</li>
            <li>Custom and event florals — share your date and ideas when you write in</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
