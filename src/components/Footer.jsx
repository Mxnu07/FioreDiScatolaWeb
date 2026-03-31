function Footer() {
  return (
    <footer id="contact" className="mt-10 bg-rose-900 text-rose-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="font-heading text-2xl">Bloom &amp; Petal</h3>
          <p className="mt-3 text-sm text-rose-100/90">
            Elegant floral designs for life&apos;s beautiful moments.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">Contact</h4>
          <p className="mt-3 text-sm">hello@bloompetalstudio.com</p>
          <p className="text-sm">+1 (555) 019-2345</p>
          <p className="text-sm">42 Garden Street, Downtown</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">Hours</h4>
          <p className="mt-3 text-sm">Monday - Saturday: 9 AM - 6 PM</p>
          <p className="text-sm">Sunday: Closed</p>
        </div>
      </div>
      <div className="border-t border-rose-800/70 py-4 text-center text-xs text-rose-200">
        © {new Date().getFullYear()} Bloom &amp; Petal. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
