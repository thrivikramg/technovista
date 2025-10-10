"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/register", label: "Register", icon: "📝" },
    { href: "/events", label: "Events", icon: "🎯" },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    const body = document.body;
    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }

    return () => {
      body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Main Navbar */}
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
          </div>

          {/* Desktop Register Button */}
          <a
            href="/register"
            className="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-400/30"
          >
            Register Now
          </a>
        </div>
      </nav>

      {/* Unique Mobile Navbar - Floating Round Button */}
      <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        {/* Backdrop when open */}
        {open && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Circular Navigation Container */}
        <div className="relative">
          {/* Expanded Links - Appear around the circle */}
          {open && (
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 mb-4">
              {navLinks.map((link, index) => {
                const angle = (index * 120 - 60) * (Math.PI / 180);
                const radius = 80;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`absolute flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-110 z-50 ${
                      open ? 'animate-float' : ''
                    }`}
                    style={{
                      transform: `translate(${x}px, ${y}px) scale(${open ? 1 : 0})`,
                      transitionDelay: `${index * 100}ms`,
                    }}
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-lg">{link.icon}</span>
                    {/* Tooltip */}
                    <div className="absolute -top-8 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-700">
                      {link.label}
                    </div>
                  </a>
                );
              })}
            </div>
          )}

          {/* Main Round Button */}
          <button
            className={`relative w-16 h-16 rounded-full shadow-2xl border-2 border-white/20 flex items-center justify-center transition-all duration-500 z-50 ${
              open
                ? "bg-gradient-to-br from-cyan-500 to-blue-600 rotate-180 scale-110"
                : "bg-gradient-to-br from-blue-600 to-purple-600 hover:scale-105"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {/* Animated Icon */}
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-0 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  open ? "rotate-45 translate-y-3" : "translate-y-1"
                }`}
              ></span>
              <span
                className={`absolute top-0 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  open ? "opacity-0" : "translate-y-3"
                }`}
              ></span>
              <span
                className={`absolute top-0 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  open ? "-rotate-45 translate-y-3" : "translate-y-5"
                }`}
              ></span>
            </div>

            {/* Glow Effect */}
            <div
              className={`absolute inset-0 rounded-full bg-cyan-400 blur-md transition-all duration-500 ${
                open ? "opacity-50 animate-pulse" : "opacity-0"
              }`}
            ></div>
          </button>

          {/* Register Button - Appears below when open */}
          {open && (
            <a
              href="/register"
              className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border border-white/20 whitespace-nowrap z-50 animate-bounce-slow"
              onClick={() => setOpen(false)}
            >
              🚀 Register
            </a>
          )}
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}