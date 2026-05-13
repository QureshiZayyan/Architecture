import { useState,useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import image1 from '../assets/Ashish Wangh Bungalow, Udvada.JPG'
import image2 from '../assets/Frany Bathena.JPG'
import image3 from '../assets/Mr. Hoshang Mehta ,Dadar.jpg'
import image4 from '../assets/Sharukh Kothawala Bungalow.JPG'
import image5 from '../assets/Sohrab Chinoy, Parsi colony, Dadar.jpg'
import image6 from '../assets/zal kavarana.jpg'
import demo1 from '../assets/img1.JPG'
import demo2 from '../assets/img2.JPG'
import demo3 from '../assets/img3.JPG'
import demo4 from '../assets/img4.JPG'
import demo5 from '../assets/img5.JPG'
import demo6 from '../assets/img6.JPG'
import demo7 from '../assets/img7.JPG'
import demo8 from '../assets/20241214_180929.jpg'
import demo9 from '../assets/20241214_181020.jpg'
import demo10 from '../assets/20241214_181109.jpg'
import demo11 from '../assets/20241214_181127.jpg'
import demo12 from '../assets/20241214_181159.jpg'
import demo13 from '../assets/20241214_181222.jpg'
import demo14 from '../assets/20241214_181225.jpg'

export default function Residential() {

  useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  const projects = [
    {
      title: "Ashish Wangh Bungalow, Udvada",

      images: [
        image1,
        demo1,
        demo2,
        demo3
      ]
    },

    {
      title: "Franey Bathena",

      images: [
        image2,
        demo4,
        demo5,
        demo6,
        demo7
      ]
    },

    {
      title: "Mr. Hoshang Mehta, Dadar",

      images: [
        image3,
        demo8,
        demo9,
        demo10,
        demo11,
        demo12,
        demo13,
        demo14
      ]
    },

    {
      title: "Sharukh Kothawala Bungalow",

      images: [
        image4,
        image2,
        image5
      ]
    },

    {
      title: "Sohrab Chinoy, Parsi Colony",

      images: [
        image5,
        image1,
        image3
      ]
    },

    {
      title: "Zal Kavarana",

      images: [
        image6,
        image4,
        image2
      ]
    },
  ]

  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)

  // Next
  const nextSlide = () => {

    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    )
  }

  // Prev
  const prevSlide = () => {

    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    )
  }

  return (
    <section className="bg-[#0F0F0F] min-h-screen text-white py-20 px-4 sm:px-6 overflow-hidden">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-center">

            <span className="text-blue-400">
              Residential
            </span>

            {" "}Projects

          </h1>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12
              }}
              viewport={{ once: true }}
              onClick={() => {
                setSelectedProject(project)
                setCurrentImage(0)
              }}
              className="group cursor-pointer rounded-[30px] overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition duration-500 hover:-translate-y-2"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={project.images[0]}
                  alt=""
                  className="w-full h-[180px] object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <h2 className="text-2xl font-black group-hover:text-blue-400 transition duration-300">
                  {project.title}
                </h2>

                <p className="text-gray-400 mt-3 text-sm leading-7">
                  Click to explore project gallery
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>

        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >

            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-6 text-white text-5xl hover:text-blue-400 transition"
            >
              ×
            </button>

            {/* Left */}
            <button
              onClick={prevSlide}
              className="absolute left-3 sm:left-8 text-white text-5xl hover:text-blue-400 transition"
            >
              ❮
            </button>

            {/* Content */}
            <div className="max-w-6xl w-full text-center">

              <motion.img
                key={currentImage}
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  duration: 0.4
                }}
                src={selectedProject.images[currentImage]}
                alt=""
                className="w-full h-[300px] sm:h-[500px] lg:h-[750px] object-cover rounded-[30px] shadow-2xl"
              />

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-4xl font-black mt-8"
              >
                {selectedProject.title}
              </motion.h2>

              {/* Dots */}
              <div className="flex justify-center gap-3 mt-6">

                {selectedProject.images.map((_, i) => (

                  <div
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition duration-300 ${
                      currentImage === i
                        ? "bg-blue-400 scale-125"
                        : "bg-white/30"
                    }`}
                  ></div>

                ))}

              </div>

            </div>

            {/* Right */}
            <button
              onClick={nextSlide}
              className="absolute right-3 sm:right-8 text-white text-5xl hover:text-blue-400 transition"
            >
              ❯
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  )
}