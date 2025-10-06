import Navbar from "../Navbar";

export default function Events() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden p-4">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 w-full text-center gap-8 max-w-2xl pt-32">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-4">Technovista Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">Technical Events</h2>
            <ul className="text-gray-700 text-left list-disc list-inside">
              <li>Paper Presentation</li>
              <li>Debugging</li>
              <li>Technical Quiz</li>
              <li>Technical Hunt</li>
              <li>Post/Video Making</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">Non-Technical Events</h2>
            <ul className="text-gray-700 text-left list-disc list-inside">
              <li>E-sports</li>
              <li>Poster Making</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
