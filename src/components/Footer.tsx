import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <span className="text-sm tracking-[0.3em] uppercase font-light">
                Empire Estate
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-8">
              Premier marketing solutions for real estate professionals in the NYC metropolitan area.
            </p>
            <p className="text-white/60 text-sm italic font-serif">
              From Vision to Reality
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
              Navigate
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:liuanthony826@gmail.com"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  liuanthony826@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+17175726295"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  +1 (717) 572-6295
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs tracking-wider">
            © {new Date().getFullYear()} Empire Estate Media
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
