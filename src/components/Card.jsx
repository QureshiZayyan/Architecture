export default function Card() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center p-6">

      <div className="relative w-[350px] bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-7 overflow-hidden shadow-2xl shadow-black/40">

        {/* Glow Effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/30 blur-3xl rounded-full"></div>

        {/* Image */}
        <div className="relative z-10">
          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1000&auto=format&fit=crop"
            alt="architecture"
            className="w-full h-52 object-cover rounded-2xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mt-6">

          <p className="text-blue-400 text-sm font-semibold tracking-wider">
            ARCHITECTURE
          </p>

          <h1 className="text-3xl font-black mt-2 text-white">
            Modern Villa Design
          </h1>

          <p className="text-gray-400 mt-4 leading-7 text-sm">
            Beautiful modern architecture with luxury interiors,
            elegant structure and premium finishing.
          </p>

          {/* Button */}
          <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-2xl font-semibold shadow-lg shadow-blue-500/20">
            View Project
          </button>

        </div>

      </div>
    </div>
  )
}