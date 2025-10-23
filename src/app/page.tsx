"use client";

import Navbar from "./Navbar";
import Aurora from "./Aurora";
import { useEffect, useState, useCallback } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Check if mobile device
    const checkMobile = () => {
      return window.innerWidth < 768 || 'ontouchstart' in window;
    };
    
    setIsMobile(checkMobile());

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setMousePosition({
          x: (touch.clientX / window.innerWidth - 0.5) * 10, // Reduced effect for touch
          y: (touch.clientY / window.innerHeight - 0.5) * 10
        });
      }
    };

    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.addEventListener('touchmove', handleTouchMove);
    }
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    // Add touch feedback
    const target = e.currentTarget as HTMLElement;
    target.style.transform = 'scale(0.98)';
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const target = e.currentTarget as HTMLElement;
    target.style.transform = 'scale(1)';
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-3 bg-gray-950">
      {/* Enhanced Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={isMobile ? 1.5 : 2.0}
          amplitude={isMobile ? 1.5 : 2.0}
          speed={0.5}
        />
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/60 to-gray-950/80"></div>
        {/* Simplified Grid Overlay for mobile */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-grid"></div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main 
        className={`relative z-10 flex flex-col items-center justify-center flex-1 w-full text-center gap-8 max-w-6xl pt-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{
          transform: isMobile 
            ? 'none' 
            : `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }}
      >
        
        {/* Hero Section - Mobile Optimized */}
        <div className="space-y-6 w-full">
          <div className="relative">
            {/* Reduced Glow Effects for mobile */}
            <div className="absolute -inset-4 sm:-inset-10 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl blur-2xl sm:blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -inset-3 sm:-inset-6 bg-gradient-to-r from-blue-500/40 to-purple-600/40 rounded-2xl blur-xl sm:blur-2xl opacity-30 animate-gradient-x"></div>
            
            {/* Main Title with Mobile Typography */}
            <div className="relative px-2">
              <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl relative">
                  TECHNO
                  {/* Reduced shadow for mobile */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent blur-xs sm:blur-sm opacity-50 -z-10">
                    TECHNO
                  </span>
                </span>
                <span className="block text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-8xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2 sm:mt-4 relative">
                  VISTA 2025
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent blur-xs sm:blur-sm opacity-50 -z-10">
                    VISTA 2025
                  </span>
                </span>
              </h1>
            </div>
          </div>
          
          {/* Enhanced Subtitle - Mobile Optimized */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 sm:gap-6 px-2">
              <div className="w-8 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full animate-pulse"></div>
              <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-light tracking-wide sm:tracking-wider leading-tight">
                Sri Sairam College of Engineering
              </h2>
              <div className="w-8 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full animate-pulse"></div>
            </div>
            <div className="relative">
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-cyan-300 font-medium tracking-normal sm:tracking-wide bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent px-4">
                Where Innovation Meets Excellence
              </p>
              <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Description Section - Mobile Optimized */}
        <div className="max-w-4xl space-y-6 w-full px-2">
          <p className="text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed font-light backdrop-blur-sm bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
            Embark on an extraordinary journey at{" "}
            <span className="text-cyan-300 font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Techno-Vista 2025
            </span>
            , where cutting-edge technology meets boundless creativity. Experience 24hrs of
            innovation, competition, and technological marvels that will shape the future.
          </p>
          
          {/* Interactive Feature Highlights - Mobile Grid */}
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4 mt-6">
            {[
              { icon: "🚀", label: "Innovation", color: "from-blue-500 to-cyan-500" },
              { icon: "💡", label: "Creativity", color: "from-purple-500 to-pink-500" },
              { icon: "🤖", label: "Technology", color: "from-cyan-500 to-blue-500" },
              { icon: "🏆", label: "Competition", color: "from-green-500 to-cyan-500" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group flex items-center justify-center sm:justify-start gap-2 sm:gap-3 p-3 sm:px-4 sm:py-3 bg-gray-800/50 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 active:scale-95 cursor-pointer touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </span>
                <span className="text-xs sm:text-sm text-gray-200 font-semibold group-hover:text-white transition-colors">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Action Buttons - Mobile Stack */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-1x3 justify-center mt-6 px-2">
          {[
            { 
              href: "/register", 
              label: "Register Now", 
              variant: "primary",
              icon: "🎯",
              gradient: "from-blue-600 to-purple-600",
              hoverGradient: "from-blue-500 to-purple-500"
            },
            { 
              href: "/events", 
              label: "Explore Events", 
              variant: "secondary",
              icon: "📅",
              gradient: "from-gray-800 to-gray-900",
              hoverGradient: "from-gray-700 to-gray-800"
            },
            { 
              href: "#about", 
              label: "Discover More", 
              variant: "outline",
              icon: "🔍",
              gradient: "transparent",
              hoverGradient: "from-cyan-400/10 to-blue-400/10"
            }
          ].map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`
                group relative flex items-center justify-center gap-3 px-6 py-4 sm:px-8 sm:py-5 rounded-xl sm:rounded-2xl font-bold 
                transition-all duration-300 transform active:scale-95 backdrop-blur-lg border-2
                ${button.variant === "primary" 
                  ? `bg-gradient-to-r ${button.gradient} text-white shadow-lg sm:shadow-2xl active:shadow-xl border-transparent` 
                  : button.variant === "secondary"
                  ? `bg-gradient-to-r ${button.gradient} text-gray-200 border-gray-600 active:bg-gradient-to-r ${button.hoverGradient} active:border-gray-500 active:shadow-lg`
                  : `bg-transparent text-cyan-300 border-cyan-400 active:bg-gradient-to-r ${button.hoverGradient} active:shadow-lg`
                }
              `}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Animated Icon */}
              <span className="text-lg sm:text-xl transition-all duration-300 group-active:scale-110 group-active:rotate-12">
                {button.icon}
              </span>
              
              {/* Text with tracking animation */}
              <span className="text-sm sm:text-base transition-all duration-300 group-active:tracking-wider">
                {button.label}
              </span>
            </a>
          ))}
        </div>

        {/* Enhanced Stats Section - Mobile Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-12 w-full max-w-5xl px-2">
          {[
            { number: "6+", label: "Innovative Events", color: "from-blue-400 to-cyan-400", delay: "0ms" },
            { number: "500+", label: "Tech Enthusiasts", color: "from-purple-400 to-pink-400", delay: "100ms" },
            { number: "24", label: "Inspiring hrs", color: "from-cyan-400 to-blue-400", delay: "200ms" },
            { number: "2025", label: "Grand Edition", color: "from-green-400 to-cyan-400", delay: "300ms" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="group relative text-center p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 active:border-cyan-400/30 transition-all duration-300 active:transform active:scale-105 active:shadow-lg overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{ animationDelay: stat.delay }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-active:opacity-5 transition-opacity duration-300`}></div>
              
              <div className={`text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent transition-all duration-300 group-active:scale-105 relative z-10`}>
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-300 mt-2 sm:mt-3 md:mt-4 font-medium tracking-wide group-active:text-white transition-colors relative z-10 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Quick Links - Mobile Scrollable */}
        <div className="flex overflow-x-auto pb-4 sm:flex-wrap sm:justify-center gap-3 sm:gap-4 mt-8 w-full px-2 hide-scrollbar">
          {[
            { name: 'Workshops', icon: '🔧' },
            { name: 'Hackathons', icon: '💻' },
            { name: 'Exhibitions', icon: '🎪' },
            { name: 'Seminars', icon: '🎤' },
            { name: 'Competitions', icon: '⚡' }
          ].map((link, index) => (
            <a
              key={index}
              href={`#${link.name.toLowerCase()}`}
              className="flex-shrink-0 group flex items-center gap-2 sm:gap-3 px-4 py-3 bg-gray-800/50 backdrop-blur-lg rounded-xl text-gray-300 border border-gray-700/50 active:border-cyan-400 active:text-cyan-300 transition-all duration-300 active:shadow-lg active:transform active:scale-105"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <span className="text-base sm:text-lg group-active:scale-110 transition-transform">{link.icon}</span>
              <span className="text-sm sm:text-base font-medium whitespace-nowrap">{link.name}</span>
            </a>
          ))}
        </div>
      </main>

      {/* Enhanced About Section - Mobile Optimized */}
      <div id="about" className="relative z-10 mt-20 sm:mt-32 md:mt-40 max-w-5xl text-center mx-auto px-3">
        <div className="group bg-gray-800/60 backdrop-blur-2xl rounded-2xl sm:rounded-3xl lg:rounded-4xl p-6 sm:p-8 md:p-12 border border-gray-700/50 active:border-cyan-400/30 transition-all duration-300 active:shadow-xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
          </div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8 relative">
            About Techno-Vista
          </h3>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 sm:mb-8 md:mb-12 rounded-full group-active:w-20 sm:group-active:w-28 transition-all duration-500"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-light max-w-4xl mx-auto relative z-10">
            <span className="text-cyan-300 font-semibold">Techno-Vista</span> is the flagship technical fest of{" "}
            <span className="text-blue-300 font-medium">Sri Sairam College of Engineering</span>, a premier platform 
            that brings together the brightest minds to showcase innovation, compete in challenging events, 
            and explore the frontiers of technology.
          </p>
          
          {/* Enhanced Info Cards - Mobile Stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
            {[
              { icon: "🌟", title: "Vision", desc: "Fostering innovation and technological excellence", color: "from-yellow-400 to-orange-400" },
              { icon: "🎯", title: "Mission", desc: "Creating platforms for young innovators to shine", color: "from-blue-400 to-cyan-400" },
              { icon: "🚀", title: "Goal", desc: "Bridging academia and industry through technology", color: "from-purple-400 to-pink-400" }
            ].map((item, index) => (
              <div key={index} className="group relative p-4 sm:p-6 md:p-8 bg-gray-700/30 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-gray-600/50 active:border-cyan-400/30 transition-all duration-300 active:transform active:scale-105"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}>
                <div className={`text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-cyan-300 mb-2 sm:mb-3 md:mb-4">{item.title}</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Footer - Mobile Optimized */}
      <footer className="relative z-10 mt-16 sm:mt-24 md:mt-32 text-gray-400 text-xs sm:text-sm w-full max-w-4xl mx-auto px-3 pb-8">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-gray-600 rounded-full"></div>
            <span className="text-gray-300 font-semibold text-sm sm:text-base md:text-lg text-center">
              © 2025 Techno-Vista | Sri Sairam College of Engineering
            </span>
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-gray-600 to-transparent rounded-full"></div>
          </div>
          <p className="text-xs text-gray-500 tracking-widest font-light uppercase text-center">
            Shaping the Future of Technology & Innovation
          </p>
          {/* Removed Social Links */}
        </div>
  <div className="mt-6 text-center text-gray-400 text-xs font-semibold">Crafted with <span role="img" aria-label="sparkle">✨</span> by <span className="font-bold">T.A.S.K</span></div>
      </footer>

      {/* Enhanced Global Styles with Mobile Optimizations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background: #0a0a0a;
          color: #f3f4f6;
          overflow-x: hidden;
          -webkit-tap-highlight-color: transparent;
        }
        
        /* Hide scrollbar for mobile horizontal scroll */
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-10px) translateX(5px) rotate(120deg); 
          }
          66% { 
            transform: translateY(-5px) translateX(-5px) rotate(240deg); 
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes grid {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(40px) translateX(40px);
          }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
        
        .animate-grid {
          animation: grid 15s linear infinite;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Enhanced scrollbar for desktop */
        @media (min-width: 768px) {
          ::-webkit-scrollbar {
            width: 12px;
          }
          
          ::-webkit-scrollbar-track {
            background: linear-gradient(to bottom, #1a1a1a, #2d2d2d);
            border-radius: 6px;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
            border-radius: 6px;
            border: 2px solid #1a1a1a;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #2563eb, #7c3aed);
          }
        }
        
        /* Selection color */
        ::selection {
          background: rgba(59, 130, 246, 0.4);
          color: #ffffff;
          text-shadow: none;
        }
        
        /* Custom cursor effects for desktop only */
        @media (min-width: 768px) and (pointer: fine) {
          * {
            cursor: default;
          }
        }
        
        /* Loading animation for elements */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        /* Extra small breakpoint */
        @media (min-width: 375px) {
          .xs\\:text-5xl {
            font-size: 3rem;
            line-height: 1;
          }
          .xs\\:text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
        }

        /* Improve touch targets */
        @media (max-width: 768px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}