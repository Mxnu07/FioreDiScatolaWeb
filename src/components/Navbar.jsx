const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Arrangements" },
  { href: "#order", label: "Order Request" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-rose-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-heading text-2xl text-rose-700">
          Bloom &amp; Petal
        </a>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-rose-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#order"
          className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700"
        >
          Reserve Your Order
        </a>
      </div>
    </header>
  );
}

export default Navbar;
