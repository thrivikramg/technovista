"use client";

import { useEffect, useState, useRef } from "react";
import Aurora from "../Aurora";
import Navbar from "../Navbar";

export default function Events() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const events = {
    technical: [
      {
        id: 1,
        name: "PaperVista",
        tagline: "Research & Innovation Showcase",
        description: "Present your groundbreaking research and innovative ideas to a panel of expert judges. Showcase your technical knowledge in science and engineering.",
        icon: "📄",
        color: "#3B82F6",
        gradient: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
        participants: "2-4",
        duration: "15 mins",
        level: "Intermediate",
        features: ["Research Presentation", "Technical Papers", "Q&A Session"],
        rules: [
          "Should be Recent trends, emerging technologies, or original research ",
          "Team size: 2-4 members",
          "Original research or innovative ideas",
          "IEEE format (1500-2000 words)",
          "8-10 minute presentation + 2 min Q&A",
          "Plagiarism-free submissions",
          "Judges' decision is final"
        ],
        // 🌟 Added Co-ordinators from the image for Paper Presentation
        coordinators: [
          { name: "Sanjana S", role: "Main Coordinator" },
          { name: "Rushikesh", role: "Coordinator" }
          
        ]
      },
      {
        id: 2,
        name: "BugSmash",
        tagline: "Code Debugging Challenge",
        description: "Race against time to identify and fix bugs in complex code snippets. Test your debugging skills and logical thinking under pressure.",
        icon: "🐛",
        color: "#10B981",
        gradient: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
        participants: "1-2",
        duration: "1 hour",
        level: "Advanced",
        features: ["Live Debugging", "Multiple Rounds", "Time-bound"],
        rules: [
          "Individual or teams of 2",
          "Use only provided tools",
          "No external communication",
          "Strict time limits",
          "Points for speed and accuracy"
        ],
        // 🌟 Added Co-ordinators from the image for Debugging
        coordinators: [
          { name: "Janani B", role: "Coordinator" },
          { name: "Srinivas", role: "Coordinator" }
        ]
      },
      {
        id: 3,
        name: "TechIQ",
        tagline: "Technical Quiz Battle",
        description: "Challenge your technical knowledge across programming, AI, networking, and emerging technologies in this exciting quiz competition.",
        icon: "🧠",
        color: "#8B5CF6",
        gradient: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
        participants: "2",
        duration: "45 mins",
        level: "Beginner",
        features: ["Multiple Rounds", "Rapid Fire", "Technical Domains"],
        rules: [
          "Teams of 2 members",
          "Preliminary and final rounds",
          "30 seconds per question",
          "No external resources",
          "Judges' decision final"
        ],
        // 🌟 Added Co-ordinators from the image for Technical Quiz
        coordinators: [
          { name: "Madhumitha P", role: "Coordinator" },
          { name: "Deepa", role: "Coordinator" }
        ]
      },
      {
        id: 4,
        name: "TechHunt",
        tagline: "CTF Challenge",
        description: "Embark on a technical treasure hunt solving coding, cryptography, and cybersecurity challenges to find hidden flags.",
        icon: "🔍",
        color: "#F59E0B",
        gradient: "linear-gradient(135deg, #F59E0B 0%, #DC2626 100%)",
        participants: "2-3",
        duration: "180 min",
        level: "Advanced",
        features: ["Multiple Levels", "Flag Hunting", "Real-world Scenarios"],
        rules: [
          "Teams of 2-3 members",
          "CTF-style challenges",
          "Find hidden flags",
          "No external help",
          "Points based on completion time"
        ],
        // 🌟 Added Co-ordinators from the image for Technical Hunt
        coordinators: [
          { name: "Thrivikram", role: "Coordinator" },
          { name: "Afnan", role: "Coordinator" }
        ]
      }
    ],
    creative: [
      {
        id: 5,
        name: "Frame Fusion",
        tagline: "Design & Video Festival",
        description: "Unleash your creativity through poster design and video production. Capture the event's spirit with your artistic vision.",
        icon: "🎬",
        color: "#6366F1",
        gradient: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
        participants: "1-3",
        duration: "3 hours",
        level: "Beginner",
        features: ["Poster Design", "Video Production", "Theme-based"],
        rules: [
          "Poster: 1-2 members, 3 hours",
          "Video: 2-3 members, 3 hours",
          "Original content only",
          "Theme provided on spot",
          "Bring own materials"
        ],
        // 🌟 Added Co-ordinators from the image for Poster & Video Making
        coordinators: [
          { name: "Gnana Deepak J", role: "Main Coordinator" },
          { name: "Tejas", role: "Coordinator" }
        ]
      },
      {
        id: 6,
        name: "Clash of Squadzz",
        tagline: "Gaming Tournament",
        description: "Compete in thrilling multiplayer gaming tournaments. Showcase your strategy, reflexes, and teamwork for ultimate victory.",
        icon: "🎮",
        color: "#F59E0B",
        gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
        participants: "1-4",
        duration: "Knockout",
        level: "All Levels",
        features: ["Multiplayer", "Tournament Style", "Live Commentary"],
        rules: [
          "Solo or teams of 4",
          "Fair play required",
          "Knockout format",
          "Schedule adherence",
          "No cheating allowed"
        ],
        // 🌟 Placeholder for an event with no coordinators listed in the image
        coordinators: [
          { name: "Charan Teja", role: "Coordinator" } 
        ]
      }
    ]
  };

  const allEvents = [...events.technical, ...events.creative];
  const filteredEvents = activeTab === "all" ? allEvents : events[activeTab];

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      <Navbar />
      {/* Background Elements */}
      <div className="absolute inset-0">
        <Aurora
          colorStops={["#1e1b4b", "#3730a3", "#7e22ce", "#0ea5e9"]}
          blend={4.0}
          amplitude={2.5}
          speed={0.2}
        />
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl" />
            <h1 className="relative text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              EVENTS
            </h1>
          </div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Discover exciting competitions that challenge your technical skills and creative potential
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-2 border border-gray-800">
            {[ 
              { id: "all", label: "All Events", count: allEvents.length },
              { id: "technical", label: "Technical", count: events.technical.length },
              { id: "creative", label: "Creative", count: events.creative.length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-white bg-gradient-to-r from-blue-600 to-purple-600"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {tab.label}
                <span className="ml-2 text-sm opacity-70">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="group relative bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedEvent(event)}
              style={{
                transform: `translateY(${index % 2 === 0 ? mousePosition.y * 0.1 : -mousePosition.y * 0.1}px)`
              }}
            >
              {/* Gradient Accent */}
              <div 
                className="absolute top-0 left-0 w-full h-2 rounded-t-3xl"
                style={{ background: event.gradient }}
              />
              
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-2xl"
                      style={{ background: event.gradient }}
                    >
                      {event.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{event.name}</h3>
                      <p className="text-sm text-gray-400">{event.tagline}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    event.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {event.level}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                  {event.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {event.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300 border border-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white" style={{ color: event.color }}>
                      {event.participants}
                    </div>
                    <div className="text-xs text-gray-400">Team Size</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white" style={{ color: event.color }}>
                      {event.duration}
                    </div>
                    <div className="text-xs text-gray-400">Duration</div>
                  </div>
                </div>

                {/* CTA */}
                <button 
                  className="w-full mt-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ background: event.gradient }}
                >
                  View Details
                </button>
              </div>

              {/* Hover Glow */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${event.color}20 0%, transparent 70%)`
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 rounded-3xl border border-gray-800 shadow-2xl"
            style={{
              background: `linear-gradient(135deg, rgba(30, 30, 30, 0.95) 0%, rgba(30, 30, 30, 0.98) 100%)`
            }}
          >
            {/* Header */}
            <div className="sticky top-0 p-8 border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm rounded-t-3xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-2xl"
                    style={{ background: selectedEvent.gradient }}
                  >
                    {selectedEvent.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedEvent.name}</h2>
                    <p className="text-xl text-gray-400">{selectedEvent.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="w-12 h-12 rounded-2xl bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">About</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-2xl bg-gray-800/50 border border-gray-700">
                  <div className="text-2xl font-bold text-white">{selectedEvent.participants}</div>
                  <div className="text-sm text-gray-400">Team Size</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-gray-800/50 border border-gray-700">
                  <div className="text-2xl font-bold text-white">{selectedEvent.duration}</div>
                  <div className="text-sm text-gray-400">Duration</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-gray-800/50 border border-gray-700">
                  <div className="text-2xl font-bold text-white">{selectedEvent.level}</div>
                  <div className="text-sm text-gray-400">Difficulty</div>
                </div>
              </div>
              
              {/* 🌟 New Section: Co-ordinators */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Event Co-ordinators 🤝</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {selectedEvent.coordinators.map((coordinator, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-4 rounded-2xl bg-gray-800/50 border border-gray-700"
                    >
                      <p className="text-lg font-semibold text-white">{coordinator.name}</p>
                      <p className={`text-sm ${coordinator.role.includes("Main") ? 'text-yellow-400' : 'text-gray-400'}`}>{coordinator.role}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* End of New Section */}


              {/* Rules */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Rules & Guidelines</h3>
                <div className="space-y-3">
                  {selectedEvent.rules.map((rule, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 rounded-2xl bg-gray-800/30 border border-gray-700 hover:border-gray-600 transition-all duration-300"
                    >
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5"
                        style={{ background: selectedEvent.gradient }}
                      >
                        {index + 1}
                      </div>
                      <p className="text-gray-300">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Event Features</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedEvent.features.map((feature, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 rounded-xl text-white font-medium"
                      style={{ background: selectedEvent.gradient }}
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 p-8 border-t border-gray-800 bg-gray-900/95 backdrop-blur-sm rounded-b-3xl">
              <div className="flex gap-4">
                <button 
                  className="flex-1 py-4 rounded-2xl font-bold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ background: selectedEvent.gradient }}
                >
                  Register Now
                </button>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="px-8 py-4 rounded-2xl bg-gray-800 hover:bg-gray-700 text-white font-semibold transition-all duration-300 hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}