export default function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <main className="flex flex-col items-center justify-center flex-1 w-full text-center gap-8 max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-4">Register for Technovista</h1>
        <form className="bg-white rounded-lg shadow p-6 w-full max-w-md flex flex-col gap-4">
          <input className="border border-gray-300 rounded px-4 py-2" type="text" placeholder="Full Name" required />
          <input className="border border-gray-300 rounded px-4 py-2" type="email" placeholder="Email" required />
          <input className="border border-gray-300 rounded px-4 py-2" type="text" placeholder="College Name" required />
          <select className="border border-gray-300 rounded px-4 py-2" required>
            <option value="">Select Event</option>
            <option value="Paper Presentation">Paper Presentation</option>
            <option value="Debugging">Debugging</option>
            <option value="Technical Quiz">Technical Quiz</option>
            <option value="Technical Hunt">Technical Hunt</option>
            <option value="Post/Video Making">Post/Video Making</option>
            <option value="E-sports">E-sports</option>
            <option value="Poster Making">Poster Making</option>
          </select>
          <button type="submit" className="bg-indigo-600 text-white rounded px-4 py-2 font-semibold hover:bg-indigo-700 transition">Submit</button>
        </form>
      </main>
    </div>
  );
}
