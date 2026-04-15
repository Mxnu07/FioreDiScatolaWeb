import fsWatermark from "../assets/fiore-di-scatola/FSLogo.png";

const WHATSAPP_CHAT_URL =
  "https://wa.me/7879392282?text=Hello%2C%20I%20would%20like%20more%20information%20about%20your%20floral%20arrangements.";

function WhatsAppIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-10 overflow-hidden bg-olive-900 text-olive-50"
    >
      {/* FS monogram watermark — background only, not an <img> */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-no-repeat"
        style={{
          backgroundImage: `url(${fsWatermark})`,
          backgroundPosition: "right center",
          backgroundSize: "auto 100%",
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
          <a
            href={WHATSAPP_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Open WhatsApp chat with Fiore di Scatola"
            aria-label="Chat on WhatsApp with Fiore di Scatola"
            className="mt-3 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-[#25D366]/95 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#20bd5a] hover:shadow-md"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span className="leading-tight">WhatsApp</span>
          </a>
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
