import { useState, useEffect } from "react"
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

  // NEXT
  const nextSlide = () => {

    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1
        ? 0
        : prev + 1
    )
  }

  // PREV
  const prevSlide = () => {

    setCurrentImage((prev) =>
      prev === 0
        ? selectedProject.images.length - 1
        : prev - 1
    )
  }

  return (
    <section className="bg-[#0F0F0F] min-h-screen text-white py-20 px-4 sm:px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
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

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.25,
                delay: index * 0.05
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              onClick={() => {
                setSelectedProject(project)
                setCurrentImage(0)
              }}
              className="group relative cursor-pointer rounded-[24px] overflow-hidden bg-[#161616] border border-white/10"
            >

              {/* IMAGE */}
              <div className="overflow-hidden h-[260px]">

                <img
                  loading="lazy"
                  src={project.images[0]}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-5 z-10">

                <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h2>

                <p className="text-sm text-gray-300 mt-2">
                  Click to explore project gallery
                </p>

                <button className="mt-4 px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-blue-400 hover:text-white transition duration-300">
                  Explore
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>

        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >

            {/* CLOSE */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-6 text-white text-5xl hover:text-blue-400 transition z-50"
            >
              ×
            </button>

            {/* LEFT */}
            <button
              onClick={prevSlide}
              className="absolute left-3 sm:left-8 text-white text-5xl hover:text-blue-400 transition z-50"
            >
              ❮
            </button>

            {/* IMAGE AREA */}
            <div className="max-w-6xl w-full text-center">

              <motion.img
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.18 }}
                loading="lazy"
                src={selectedProject.images[currentImage]}
                alt=""
                className="w-full h-[300px] sm:h-[500px] lg:h-[700px] object-cover rounded-[24px]"
              />

              {/* TITLE */}
              <h2 className="text-2xl sm:text-4xl font-black mt-8">
                {selectedProject.title}
              </h2>

              {/* DOTS */}
              <div className="flex justify-center gap-3 mt-6 flex-wrap">

                {selectedProject.images.map((_, i) => (

                  <div
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                      currentImage === i
                        ? "bg-blue-400 scale-125"
                        : "bg-white/30"
                    }`}
                  ></div>

                ))}

              </div>

            </div>

            {/* RIGHT */}
            <button
              onClick={nextSlide}
              className="absolute right-3 sm:right-8 text-white text-5xl hover:text-blue-400 transition z-50"
            >
              ❯
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  )
}