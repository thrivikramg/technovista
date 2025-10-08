"use client";

import Navbar from "../Navbar";
import Aurora from "../Aurora";
import { useEffect, useState } from "react";

export default function Events() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const events = {
    technical: [
      { 
        name: "Paper Presentation", 
        description: "Showcase your research and innovative ideas",
        icon: "📄",
        color: "from-blue-500 to-cyan-500",
        participants: "2-4 members",
        duration: "15 mins"
      },
      { 
        name: "Debugging", 
        description: "Find and fix bugs in given code snippets",
        icon: "🐛",
        color: "from-green-500 to-emerald-500",
        participants: "Solo or Team of 2",
        duration: "1 hour"
      },
      { 
        name: "Technical Quiz", 
        description: "Test your knowledge across various tech domains",
        icon: "🧠",
        color: "from-purple-500 to-pink-500",
        participants: "2 members",
        duration: "45 mins"
      },
      { 
        name: "Technical Hunt", 
        description: "Solve technical puzzles and find hidden clues",
        icon: "🔍",
        color: "from-orange-500 to-red-500",
        participants: "3-4 members",
        duration: "2 hours"
      },
      { 
        name: "Post/Video Making", 
        description: "Create engaging content on technical topics",
        icon: "🎬",
        color: "from-indigo-500 to-purple-500",
        participants: "1-3 members",
        duration: "3 days"
      }
    ],
    nonTechnical: [
      { 
        name: "E-sports", 
        description: "Compete in thrilling gaming tournaments",
        icon: "🎮",
        color: "from-yellow-500 to-orange-500",
        participants: "Solo or Team of 4",
        duration: "Knockout rounds"
      },
      { 
        name: "Poster Making", 
        description: "Express creativity through visual art",
        icon: "🎨",
        color: "from-pink-500 to-rose-500",
        participants: "1-2 members",
        duration: "3 hours"
      }
    ]
  };

  const allEvents = [...events.technical, ...events.nonTechnical];

  const filteredEvents = activeCategory === "all" 
    ? allEvents 
    : activeCategory === "technical" 
    ? events.technical 
    : events.nonTechnical;

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
        {/* Gradient Overlay */}
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
        className={`relative z-10 flex flex-col items-center justify-center flex-1 w-full text-center gap-12 max-w-7xl pt-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
        }}
      >
        
        {/* Header Section */}
        <div className="space-y-6">
          <div className="relative">
            {/* Glow Effects */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-15 animate-gradient-x"></div>
            
            {/* Main Title */}
            <div className="relative">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
                Technovista
                <span className="block text-3xl sm:text-5xl md:text-6xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-4">
                  Events 2025
                </span>
              </h1>
            </div>
          </div>
          
          {/* Subtitle */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
              <h2 className="text-xl sm:text-2xl text-gray-300 font-light tracking-wider">
                Explore Our Exciting Event Categories
              </h2>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
            </div>
            <p className="text-lg sm:text-xl text-cyan-300 font-medium tracking-wide">
              Showcase Your Skills Across Multiple Domains
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            { id: "all", label: "All Events", count: allEvents.length, color: "from-blue-500 to-purple-500" },
            { id: "technical", label: "Technical", count: events.technical.length, color: "from-cyan-500 to-blue-500" },
            { id: "nonTechnical", label: "Non-Technical", count: events.nonTechnical.length, color: "from-green-500 to-cyan-500" }
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-lg border-2 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl border-transparent`
                  : 'bg-gray-800/50 text-gray-300 border-gray-600 hover:border-gray-500 hover:shadow-xl'
              }`}
            >
              <span className="flex items-center gap-3">
                {category.label}
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id 
                    ? 'bg-white/20' 
                    : 'bg-gray-700/50'
                }`}>
                  {category.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mt-8">
          {filteredEvents.map((event, index) => (
            <div
              key={event.name}
              className="group relative p-6 bg-gray-800/40 backdrop-blur-xl rounded-3xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Event Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                {event.icon}
              </div>
              
              {/* Event Name */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {event.name}
              </h3>
              
              {/* Event Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {event.description}
              </p>
              
              {/* Event Details */}
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex items-center justify-between">
                  <span>Participants:</span>
                  <span className="text-cyan-300 font-medium">{event.participants}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Duration:</span>
                  <span className="text-cyan-300 font-medium">{event.duration}</span>
                </div>
              </div>
              
              {/* Hover Action */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white text-sm shadow-lg">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mt-16">
          {[
            { number: "7", label: "Total Events", color: "from-blue-400 to-cyan-400" },
            { number: "5", label: "Technical Events", color: "from-purple-400 to-pink-400" },
            { number: "2", label: "Non-Technical Events", color: "from-green-400 to-cyan-400" },
            { number: "50+", label: "Prize Categories", color: "from-orange-400 to-red-400" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-gray-500 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent transition-all duration-500 group-hover:scale-110`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm mt-2 font-medium tracking-wide group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Registration CTA */}
        <div className="w-full max-w-4xl mt-12">
          <div className="group bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-8 border border-blue-400/30 hover:border-cyan-400/50 transition-all duration-500">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Ready to Compete?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Don't miss your chance to showcase your talents and win amazing prizes. Register now for your favorite events!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-400/30"
              >
                <span className="text-xl">🚀</span>
                <span>Register Now</span>
              </a>
              <a
                href="#rules"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-gray-800/50 backdrop-blur-lg rounded-2xl text-gray-200 border border-gray-600 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105"
              >
                <span className="text-xl">📋</span>
                <span>Event Rules</span>
              </a>
            </div>
          </div>
        </div>

        {/* Event Rules Section */}
        <div id="rules" className="w-full max-w-4xl mt-16 text-left">
          <div className="group bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-purple-400/30 transition-all duration-500">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 text-center">
              Event Guidelines
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">General Rules</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>All participants must register online before the deadline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>College ID card is mandatory for verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Decision of judges and organizers will be final</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Multiple entries in same event are not allowed</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-green-300 mb-3">Participation Rules</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Team size must be as specified for each event</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Late entries will not be entertained</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Plagiarism will lead to disqualification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Follow code of conduct throughout the event</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Global Styles */}
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
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(60px) translateX(60px);
          }
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
        }
      `}</style>
    </div>
  );
}