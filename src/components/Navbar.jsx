import { useState } from "react"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-black/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-black text-white tracking-wide">
          Z.B.SETHNA
        </h1>

        {/* Desktop Links */}
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

        {/* Desktop Button */}
        <button className="hidden md:block bg-blue-500 hover:bg-blue-400 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-blue-500/20 hover:scale-105 transition duration-300">
          Hire Me
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >

          <span className={`w-6 h-[2px] bg-white transition duration-300 ${
            menuOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}></span>

          <span className={`w-6 h-[2px] bg-white transition duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}></span>

          <span className={`w-6 h-[2px] bg-white transition duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}></span>

        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <ul className="flex flex-col px-6 pb-6 text-gray-300 font-medium bg-black/95">

          <li className="py-4 border-b border-white/10 hover:text-white transition">
            Home
          </li>

          <li className="py-4 border-b border-white/10 hover:text-white transition">
            About
          </li>

          <li className="py-4 border-b border-white/10 hover:text-white transition">
            Projects
          </li>

          <li className="py-4 border-b border-white/10 hover:text-white transition">
            Services
          </li>

          <li className="py-4 hover:text-white transition">
            Contact
          </li>

          <button className="mt-6 bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-2xl font-semibold transition duration-300">
            Hire Me
          </button>

        </ul>

      </div>

    </nav>
  )
}