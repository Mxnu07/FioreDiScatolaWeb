import brandLogo from "../assets/fiore-di-scatola/fiorediscatola_logo.png";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Arrangements" },
  { href: "#order", label: "Order Request" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-olive-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex shrink-0 items-center py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-400 focus-visible:ring-offset-2 rounded-sm"
        >
          <img
            src={brandLogo}
            alt="Fiore di Scatola"
            className="h-9 w-auto max-w-[min(200px,45vw)] object-contain object-left sm:h-11 sm:max-w-[220px]"
            width={220}
            height={64}
            decoding="async"
          />
        </a>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-olive-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#order"
          className="rounded-full bg-olive-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-olive-700"
        >
          Reserve Your Order
        </a>
      </div>
    </header>
  );
}

export default Navbar;
