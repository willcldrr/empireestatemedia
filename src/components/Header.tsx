"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-end gap-3 group">
            <Image
              src="/eemlogo.png"
              alt="Empire Estate Media"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl tracking-[0.25em] uppercase font-light hidden sm:block pb-1">
              Empire Estate Media
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/"
              className="text-[13px] tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[13px] tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-[13px] tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              href="/services#contact"
              className="text-[13px] tracking-[0.15em] uppercase border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? "max-h-80 pb-8" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-6 pt-4 border-t border-white/10">
            <Link
              href="/"
              className="text-[13px] tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[13px] tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-[13px] tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/services#contact"
              className="text-[13px] tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
