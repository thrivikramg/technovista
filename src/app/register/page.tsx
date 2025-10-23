"use client";

import Image from "next/image";
import Navbar from "../Navbar";
import Aurora from "../Aurora";
import { useEffect, useState } from "react";

export default function Register() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden p-4 bg-gray-950">
      {/* Enhanced Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} blend={2.0} amplitude={2.0} speed={0.5} />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/60 to-gray-950/80"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid"></div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main
        className={`relative z-10 flex flex-col items-center justify-center flex-1 w-full text-center gap-12 max-w-6xl pt-24 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}
      >
        {/* Header Section */}
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-15 animate-gradient-x"></div>

            <div className="relative">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
                Register for
                <span className="block text-3xl sm:text-5xl md:text-6xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-4">
                  Techno-Vista 2025
                </span>
              </h1>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
              <h2 className="text-xl sm:text-2xl text-gray-300 font-light tracking-wider">
                Complete the Step to Confirm Participation
              </h2>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
            </div>
            <p className="text-lg sm:text-xl text-cyan-300 font-medium tracking-wide">
              Secure Your Spot in the Ultimate Tech Experience
            </p>
          </div>
        </div>

        {/* Registration Step */}
        <div className="grid grid-cols-1 w-full max-w-5xl mt-8">
          <div className="group relative p-8 bg-gray-800/40 backdrop-blur-xl rounded-3xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="absolute -top-3 -left-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full text-sm shadow-lg">
              Step 1
            </div>

            <div className="flex flex-col items-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                📝
              </div>

              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Register Your Team
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                Scan the QR code to access the registration form and provide your team details
              </p>

              <div className="relative p-6 bg-gray-900/50 rounded-2xl border border-gray-600/50 group-hover:border-blue-400/50 transition-all duration-300">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/qr-register1.png"
                  alt="Registration QR Code"
                  width={220}
                  height={220}
                  className="relative z-10 rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-glow"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {["Team Details", "Event Selection", "Contact Info", "Instant Confirmation"].map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center mt-8">
          <a
            href="mailto:technovistaeventz@gmail.com"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-gray-800/50 backdrop-blur-lg rounded-2xl text-gray-200 border border-gray-600 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105"
          >
            <span className="text-xl">📧</span>
            <span>Email Support</span>
          </a>

          <a
            href="tel:+917708565414"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-gray-800/50 backdrop-blur-lg rounded-2xl text-gray-200 border border-gray-600 hover:border-green-400 hover:text-green-300 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105"
          >
            <span className="text-xl">📞</span>
            <span>Call Support</span>
          </a>
        </div>
      </main>

      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes grid {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(60px) translateX(60px); }
        }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 8s ease infinite; }
        .animate-grid { animation: grid 15s linear infinite; }
        .shadow-glow { box-shadow: 0 0 30px rgba(59, 130, 246, 0.3); }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 12px; }
        ::-webkit-scrollbar-track { background: linear-gradient(to bottom, #1a1a1a, #2d2d2d); border-radius: 6px; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #3b82f6, #8b5cf6); border-radius: 6px; border: 2px solid #1a1a1a; }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(to bottom, #2563eb, #7c3aed); }
        ::selection { background: rgba(59, 130, 246, 0.4); color: #ffffff; }
      `}</style>
    </div>
  );
}
