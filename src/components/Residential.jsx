import image1 from '../assets/Ashish Wangh Bungalow, Udvada.JPG'
import image2 from '../assets/Frany Bathena.JPG'
import image3 from '../assets/Mr. Hoshang Mehta ,Dadar.jpg'
import image4 from '../assets/Sharukh Kothawala Bungalow.JPG'
import image5 from '../assets/Sohrab Chinoy, Parsi colony, Dadar.jpg'
import image6 from '../assets/zal kavarana.jpg'

export default function Residential() {

  const projects = [
    {
      image: image1,


      title: "Ashish Wang Bungalow, Udhvada"
    },

    {
      image:
        image2,

      title: "Franey Bathena"
    },

    {
      image:
        image3,

      title: "Mr. Hoshang Mehta ,Dadar"
    },

     {
      image:
        image4,

      title: "Sharukh Kothawala Bungalow"
    },
     {
      image:
        image5,

      title: "Sohrab Chinoy ,Parsi colony ,Dadar"
    },
     {
      image:
        image6,

      title: "Sharukh Kothawala Bungalow"
    },
  ]

  return (
    <section className="bg-[#0F0F0F] min-h-screen text-white py-20 px-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-black mb-14">
          Residential Projects
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="rounded-[30px] overflow-hidden border border-white/10 bg-white/5"
            >

              <img
                src={project.image}
                alt=""
                className="w-full h-[180px] object-cover"
              />

              <div className="p-4">

                <h2 className="text-2xl font-bold">
                  {project.title}
                </h2>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}