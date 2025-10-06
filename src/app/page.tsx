
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
      <main className="flex flex-col items-center justify-center flex-1 w-full text-center gap-8 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-800 drop-shadow mb-2">Technovista 2025</h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-2">Sri Sairam College of Engineering</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Welcome to Technovista, the annual fest of Sri Sairam College of Engineering! Join us for a celebration of innovation, creativity, and technology with exciting events, workshops, and more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a href="#register" className="flex-1 px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition text-lg">Register</a>
          <a href="#events" className="flex-1 px-6 py-3 rounded-lg bg-white text-indigo-700 font-semibold border border-indigo-600 shadow hover:bg-indigo-50 transition text-lg">Events</a>
          <a href="#knowmore" className="flex-1 px-6 py-3 rounded-lg bg-gray-200 text-indigo-800 font-semibold shadow hover:bg-gray-300 transition text-lg">Know More</a>
        </div>
      </main>
      <footer className="mt-12 text-gray-500 text-sm">&copy; 2025 Technovista | Sri Sairam College of Engineering</footer>
    </div>
  );
}
