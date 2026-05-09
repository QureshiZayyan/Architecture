import { useEffect, useState } from "react"

export default function Carousel() {

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop",

      quote: "Designing spaces that inspire modern living."
    },

    {
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",

      quote: "Architecture is where creativity meets elegance."
    },

    {
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",

      quote: "Building timeless spaces with luxury and vision."
    },
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {

    const slider = setInterval(() => {

      setIndex((prev) => (prev + 1) % slides.length)

    }, 3000)

    return () => clearInterval(slider)

  }, [])

  return (
    <div className="w-full h-screen overflow-hidden relative">

      {/* Slider */}
      <div
        className="flex h-full transition-transform duration-700"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >

        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full h-screen flex-shrink-0 relative"
          >

            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Quote */}
            <div className="absolute inset-0 flex items-center justify-center px-6">

              <div className="text-center max-w-4xl">

                <p className="text-blue-400 text-sm md:text-lg tracking-[6px] mb-6 font-semibold">
                  Z.B.SETHNA ARCHITECTS
                </p>

                <h1 className="text-white text-4xl md:text-7xl font-black leading-tight">
                  {slide.quote}
                </h1>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}