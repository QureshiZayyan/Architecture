import { motion } from "framer-motion"

export default function About() {
    return (
        <section className="bg-[#0F0F0F] text-white py-24 px-6 overflow-hidden">

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Image Section
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >

                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>

                    <img
                        src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop"
                        alt=""
                        className="relative rounded-[30px] h-[500px] w-full object-cover border border-white/10"
                    />

                </motion.div> */}

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >

                    <p className="text-blue-400 tracking-[5px] font-semibold mb-5">
                        ABOUT US
                    </p>

                    <h1 className="text-5xl md:text-6xl font-black leading-tight">
                        Creating Modern
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            Architectural Spaces
                        </span>
                    </h1>

                    <p className="text-gray-400 leading-8 mt-8 text-lg">
                        Z.B.SETHNA ARCHITECTS focuses on modern,
                        elegant and timeless architectural designs.
                        We create premium residential and commercial
                        spaces with creativity, innovation and functionality.
                    </p>

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 gap-5 mt-10">

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition duration-300">
                            <h2 className="text-3xl font-black text-blue-400">
                                15+
                            </h2>

                            <p className="text-gray-300 mt-2">
                                Years Experience
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition duration-300">
                            <h2 className="text-3xl font-black text-blue-400">
                                250+
                            </h2>

                            <p className="text-gray-300 mt-2">
                                Completed Projects
                            </p>
                        </div>

                    </div>

                    {/* Button */}
                    <button className="mt-10 bg-blue-500 hover:bg-blue-400 px-8 py-4 rounded-2xl font-semibold transition duration-300 hover:scale-105 shadow-lg shadow-blue-500/20">
                        Learn More
                    </button>

                </motion.div>

            </div>

        </section>
    )
}