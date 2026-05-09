export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-white/10 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-black mb-4">
            Z.B.SETHNA
            <span className="text-blue-400"> ARCHITECTS</span>
          </h1>

          <p className="text-gray-400 text-sm leading-7">
            Modern architectural designs with creativity and elegance.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Contact
          </h2>

          <div className="space-y-2 text-gray-300 text-sm">
            <p>Mr. Jamshed Sethna — 9820538537</p>
            <p>Mr. Zarir Sethna — 9820500639</p>
            <p>Ms. Khursheed Sethna — 9833192641</p>
            <p>Mr. Farhaad Sethna — 8879811637</p>
            <p className="text-blue-400 break-all">
              jamshedsethna@gmail.com
            </p>
          </div>
        </div>

        {/* Office */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Office
          </h2>

          <div className="text-gray-300 text-sm leading-7">
            <p>
              210, Hind Rajasthan Centre,
              Dadar East, Mumbai 400014
            </p>

            <p className="mt-3">
              Timing: 11 AM — 10 PM
            </p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-8 pt-5 text-center text-gray-500 text-sm">
        © 2026 Z.B.SETHNA ARCHITECTS
      </div>
    </footer>
  )
}