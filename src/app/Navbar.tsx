"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/register", label: "Register", icon: "📝" },
    { href: "/events", label: "Events", icon: "🎯" },
    { href: "#about", label: "About", icon: "ℹ️" },
  ];

  // ✅ Scroll detection (safe for SSR)
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Prevent background scroll & blur body when mobile menu is open
  useEffect(() => {
    const body = document.body;
    if (open) {
      body.style.overflow = "hidden";
      body.classList.add("menu-blur");
    } else {
      body.style.overflow = "";
      body.classList.remove("menu-blur");
    }

    return () => {
      body.style.overflow = "";
      body.classList.remove("menu-blur");
    };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-950/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl"
          : "bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="group flex items-center gap-3 text-xl sm:text-2xl font-black tracking-wider"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              TECHNO<span className="text-cyan-400">VISTA</span>
            </div>
          </div>
          <div className="text-xs bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text font-bold px-2 py-1 rounded-full border border-cyan-400/20">
            2025
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-base font-medium">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2.5 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10 flex items-center gap-2 text-gray-300 group-hover:text-white font-semibold tracking-wide transition-colors duration-300">
                <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                  {link.icon}
                </span>
                {link.label}
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-blue-500/20 group-hover:border-blue-400/40"></div>

              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full group-hover:w-8 transition-all duration-300 transform -translate-x-1/2"></div>
            </a>
          ))}

          <a
            href="/register"
            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-500 hover:to-purple-500 border border-blue-400/30"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-12 h-12 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 group"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute top-1.5 left-0 w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : "group-hover:bg-cyan-300"
              }`}
            ></span>
            <span
              className={`absolute top-2.5 left-0 w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                open ? "opacity-0" : "group-hover:bg-cyan-300"
              }`}
            ></span>
            <span
              className={`absolute top-3.5 left-0 w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : "group-hover:bg-cyan-300"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 z-20 bg-gray-950/100"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-gradient-to-b from-gray-900 to-gray-950 border-l border-gray-700/50 shadow-2xl transform transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 border-b border-gray-700/50">
            <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              TECHNO<span className="text-purple-400">VISTA</span>
            </div>
            <div className="text-sm text-gray-400 mt-1">Navigation Menu</div>
          </div>

          <div className="p-6 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-4 w-full px-4 py-4 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-cyan-400/30 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setOpen(false)}
              >
                <span className="text-xl">{link.icon}</span>
                <span className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {link.label}
                </span>
                <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}

            <a
              href="/register"
              className="block mt-6 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-center rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-400/30"
              onClick={() => setOpen(false)}
            >
              🚀 Register Now
            </a>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700/50">
            <div className="text-center text-sm text-gray-500">
              Sri Sairam College of Engineering
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        body.menu-blur #__next > *:not(nav) {
          filter: blur(6px);
          transition: filter 0.3s ease;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </nav>
  );
}
