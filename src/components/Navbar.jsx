export default function Navbar() {
  return (
    <nav className="w-full px-8 py-5 bg-black/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-black text-white tracking-wide">
          Z.B.SETHNA
          <span className="text-blue-400 px-1.5"></span>
        </h1>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          <li className="hover:text-white transition duration-300 cursor-pointer">
            Home
          </li>

          <li className="hover:text-white transition duration-300 cursor-pointer">
            About
          </li>

          <li className="hover:text-white transition duration-300 cursor-pointer">
            Projects
          </li>

          <li className="hover:text-white transition duration-300 cursor-pointer">
            Services
          </li>

          <li className="hover:text-white transition duration-300 cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-blue-500 hover:bg-blue-400 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-blue-500/20 hover:scale-105 transition duration-300">
          Hire Me
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer">
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </div>
      </div>
    </nav>
  )
}