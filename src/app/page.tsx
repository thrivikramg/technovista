"use client";

import Navbar from "./Navbar";
import Aurora from "./Aurora";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden p-4 bg-gray-950">
      {/* Enhanced Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={2.0}
          amplitude={2.0}
          speed={0.5}
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/60 to-gray-950/80"></div>
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid"></div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main 
        className={`relative z-10 flex flex-col items-center justify-center flex-1 w-full text-center gap-12 max-w-6xl pt-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }}
      >
        
        {/* Hero Section */}
        <div className="space-y-8">
          <div className="relative">
            {/* Enhanced Glow Effects */}
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/40 to-purple-600/40 rounded-2xl blur-2xl opacity-30 animate-gradient-x"></div>
            
            {/* Main Title with Enhanced Typography */}
            <div className="relative">
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-black leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl relative">
                  TECHNO
                  {/* Text Shadow for Depth */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent blur-sm opacity-50 -z-10">
                    TECHNO
                  </span>
                </span>
                <span className="block text-5xl sm:text-7xl md:text-8xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-4 relative">
                  VISTA 2025
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent blur-sm opacity-50 -z-10">
                    VISTA 2025
                  </span>
                </span>
              </h1>
            </div>
          </div>
          
          {/* Enhanced Subtitle */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full animate-pulse"></div>
              <h2 className="text-2xl sm:text-3xl text-gray-200 font-light tracking-wider">
                Sri Sairam College of Engineering
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full animate-pulse"></div>
            </div>
            <div className="relative">
              <p className="text-xl sm:text-2xl text-cyan-300 font-medium tracking-wide bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Where Innovation Meets Excellence
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Description Section */}
        <div className="max-w-4xl space-y-8">
          <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed font-light backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
            Embark on an extraordinary journey at{" "}
            <span className="text-cyan-300 font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Technovista 2025
            </span>
            , where cutting-edge technology meets boundless creativity. Experience 24hrs of
            innovation, competition, and technological marvels that will shape the future.
          </p>
          
          {/* Interactive Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { icon: "🚀", label: "Innovation", color: "from-blue-500 to-cyan-500" },
              { icon: "💡", label: "Creativity", color: "from-purple-500 to-pink-500" },
              { icon: "🤖", label: "Technology", color: "from-cyan-500 to-blue-500" },
              { icon: "🏆", label: "Competition", color: "from-green-500 to-cyan-500" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group flex items-center gap-3 px-6 py-4 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-110 hover:shadow-2xl cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </span>
                <span className="text-gray-200 font-semibold group-hover:text-white transition-colors">
                  {feature.label}
                </span>
                <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Action Buttons with Micro-interactions */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center mt-8">
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
                group relative flex items-center justify-center gap-4 px-8 py-5 rounded-2xl font-bold 
                transition-all duration-500 transform hover:scale-105 backdrop-blur-lg border-2
                ${button.variant === "primary" 
                  ? `bg-gradient-to-r ${button.gradient} text-white shadow-2xl hover:shadow-3xl hover:bg-gradient-to-r ${button.hoverGradient} border-transparent` 
                  : button.variant === "secondary"
                  ? `bg-gradient-to-r ${button.gradient} text-gray-200 border-gray-600 hover:bg-gradient-to-r ${button.hoverGradient} hover:border-gray-500 hover:shadow-2xl`
                  : `bg-transparent text-cyan-300 border-cyan-400 hover:bg-gradient-to-r ${button.hoverGradient} hover:shadow-2xl`
                }
              `}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Animated Icon */}
              <span className="text-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                {button.icon}
              </span>
              
              {/* Text with tracking animation */}
              <span className="transition-all duration-300 group-hover:tracking-wider">
                {button.label}
              </span>
              
              {/* Enhanced Hover Effects */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              {/* Sparkle Effect on Hover */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
            </a>
          ))}
        </div>

        {/* Enhanced Stats Section with Count-up Animation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full max-w-5xl">
          {[
            { number: "6+", label: "Innovative Events", color: "from-blue-400 to-cyan-400", delay: "0ms" },
            { number: "500+", label: "Tech Enthusiasts", color: "from-purple-400 to-pink-400", delay: "100ms" },
            { number: "24", label: "Inspiring hrs", color: "from-cyan-400 to-blue-400", delay: "200ms" },
            { number: "2025", label: "Grand Edition", color: "from-green-400 to-cyan-400", delay: "300ms" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="group relative text-center p-8 rounded-3xl bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              style={{ animationDelay: stat.delay }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`}></div>
              
              <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent transition-all duration-500 group-hover:scale-110 relative z-10`}>
                {stat.number}
              </div>
              <div className="text-gray-300 text-base mt-4 font-medium tracking-wide group-hover:text-white transition-colors relative z-10">
                {stat.label}
              </div>
              
              {/* Animated underline */}
              <div className={`w-0 h-1 bg-gradient-to-r ${stat.color} mx-auto mt-4 group-hover:w-16 transition-all duration-500 rounded-full relative z-10`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
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
              className="group flex items-center gap-3 px-6 py-4 bg-gray-800/50 backdrop-blur-lg rounded-xl text-gray-300 border border-gray-700/50 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105"
            >
              <span className="text-lg group-hover:scale-110 transition-transform">{link.icon}</span>
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      </main>

      {/* Enhanced About Section */}
      <div id="about" className="relative z-10 mt-40 max-w-5xl text-center mx-auto px-4">
        <div className="group bg-gray-800/60 backdrop-blur-2xl rounded-4xl p-12 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-700 hover:shadow-3xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
          </div>
          
          <h3 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 relative">
            About Technovista
          </h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 rounded-full group-hover:w-32 transition-all duration-500"></div>
          <p className="text-xl text-gray-200 leading-relaxed font-light max-w-4xl mx-auto relative z-10">
            <span className="text-cyan-300 font-semibold">Technovista</span> is the flagship technical fest of{"ISE"}
            <span className="text-blue-300 font-medium">Sri Sairam College of Engineering</span>, a premier platform 
            that brings together the brightest minds to showcase innovation, compete in challenging events, 
            and explore the frontiers of technology. Join us for an unforgettable experience where ideas transform 
            into reality and the future unfolds before your eyes.
          </p>
          
          {/* Enhanced Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: "🌟", title: "Vision", desc: "Fostering innovation and technological excellence", color: "from-yellow-400 to-orange-400" },
              { icon: "🎯", title: "Mission", desc: "Creating platforms for young innovators to shine", color: "from-blue-400 to-cyan-400" },
              { icon: "🚀", title: "Goal", desc: "Bridging academia and industry through technology", color: "from-purple-400 to-pink-400" }
            ].map((item, index) => (
              <div key={index} className="group relative p-8 bg-gray-700/30 backdrop-blur-lg rounded-2xl border border-gray-600/50 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105">
                <div className={`text-4xl mb-6 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-cyan-300 mb-4">{item.title}</h4>
                <p className="text-gray-300 text-base leading-relaxed">{item.desc}</p>
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${item.color} rounded-full group-hover:w-16 transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="relative z-10 mt-32 text-gray-400 text-sm w-full max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-600 rounded-full"></div>
            <span className="text-gray-300 font-semibold text-lg">© 2025 Technovista | Sri Sairam College of Engineering</span>
            <div className="w-16 h-px bg-gradient-to-r from-gray-600 to-transparent rounded-full"></div>
          </div>
          <p className="text-xs text-gray-500 tracking-widest font-light uppercase">
            Shaping the Future of Technology & Innovation
          </p>
          
          {/* Social Links */}
          <div className="flex gap-6 mt-4">
            {['📱', '📸', '💼', '🐦'].map((icon, index) => (
              <div key={index} className="w-10 h-10 bg-gray-800/50 backdrop-blur-lg rounded-full flex items-center justify-center border border-gray-700/50 hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-300 cursor-pointer hover:scale-110">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* Enhanced Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background: #0a0a0a;
          color: #f3f4f6;
          overflow-x: hidden;
        }
        
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-20px) translateX(10px) rotate(120deg); 
          }
          66% { 
            transform: translateY(-10px) translateX(-10px) rotate(240deg); 
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
            transform: translateY(60px) translateX(60px);
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
        
        /* Enhanced scrollbar */
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
        
        /* Selection color */
        ::selection {
          background: rgba(59, 130, 246, 0.4);
          color: #ffffff;
          text-shadow: none;
        }
        
        /* Custom cursor effects */
        * {
          cursor: none;
        }
        
        /* Loading animation for elements */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}