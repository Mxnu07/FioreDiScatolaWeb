import fsWatermark from "../assets/fiore-di-scatola/fs_logo.png";

function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-10 overflow-hidden bg-olive-900 text-olive-50"
    >
      {/* FS monogram watermark — background only, not an <img> */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-no-repeat opacity-[0.06] sm:opacity-[0.085]"
        style={{
          backgroundImage: `url(${fsWatermark})`,
          backgroundPosition: "calc(100% + 1.5rem) 115%",
          backgroundSize: "min(320px, 78vw)",
        }}
      />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="font-heading text-2xl">Fiore di Scatola</h3>
          <p className="mt-3 text-sm text-olive-100/90">
            Florist in Levittown, Puerto Rico — fresh arrangements for the moments
            that matter.
          </p>
          <p className="mt-3 text-sm font-medium text-olive-100">
            5.0 stars based on 5 Google reviews
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">Contact</h4>
          <p className="mt-3 text-sm">
            <a href="tel:+17879392282" className="hover:underline">
              (787) 939-2282
            </a>
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            Plaza San Antonio
            <br />
            Av. Los Dominiocos Local 1-D
            <br />
            Levittown, Toa Baja 00949
            <br />
            Puerto Rico
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">Hours</h4>
          <ul className="mt-3 space-y-1 text-sm">
            <li>Sunday: Closed</li>
            <li>Monday: 9AM–5PM</li>
            <li>Tuesday: 9AM–5PM</li>
            <li>Wednesday: 9AM–5PM</li>
            <li>Thursday: 9AM–5PM</li>
            <li>Friday: 9AM–5PM</li>
            <li>Saturday: 9AM–2PM</li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 border-t border-olive-800/70 py-4 text-center text-xs text-olive-200">
        © {new Date().getFullYear()} Fiore di Scatola. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
