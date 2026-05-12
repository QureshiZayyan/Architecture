import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function ProjectList() {

    const projects = [
        {
            title: "Residential",
            image:
                "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",
            description:
                "Modern luxury homes with elegant interiors and timeless architecture.",
            link: '/residential'
        },

        {
            title: "Commercial",
            image:
                "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
            description:
                "Premium commercial spaces designed for functionality and modern business needs.",
            link: '/commercial'
        },


        {
            title: "Restoration Work",
            image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
            description:
                "Restoring heritage structures while preserving their original beauty.",
        },

        {
            title: "Community & Social Work",
            image:
                "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
            description:
                "Designing spaces that positively impact communities and society.",
        },
    ]

    return (
        <section className="bg-[#0F0F0F] text-white py-20 px-4 sm:px-6 overflow-hidden">

            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center mb-14">

                <p className="text-blue-400 tracking-[4px] sm:tracking-[6px] font-semibold mb-4 text-sm sm:text-base">
                    OUR PROJECTS
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
                    What We Build
                </h1>

            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                {projects.map((project, index) => (

                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="group relative rounded-[28px] overflow-hidden h-[420px] sm:h-[460px] border border-white/10 bg-white/5"
                    >

                        {/* Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 p-5 sm:p-7 z-10">

                            <h2 className="text-2xl sm:text-3xl font-black mb-3 leading-tight">
                                {project.title}
                            </h2>

                            <p className="text-gray-300 leading-6 sm:leading-7 text-sm">
                                {project.description}
                            </p>
                            <Link to={project.link}>
                                <button className="mt-5 bg-white text-black px-5 py-2.5 rounded-2xl font-semibold hover:bg-blue-400 hover:text-white transition duration-300 hover:scale-105">
                                    Explore
                                </button>
                            </Link>
                        </div>

                    </motion.div>

                ))}

            </div>

        </section>
    )
}