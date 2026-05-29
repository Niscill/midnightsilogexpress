import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Hero = () => {

    useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true
  })
}, [])

  return (
    <div className='w-full h-200 px-28 py-12  bg-cover bg-center relative'
    style={{ backgroundImage: "url('pic1.png')"}}>

              {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative w-full h-full" data-aos="fade-right">
        <div className="bg-[#62E1F9]/40 w-[17%] h-[11%] rounded-full flex justify-center items-center text-lg font-semibold text-[#F486C3] mb-12">
          Feast your senses
        </div>
                <h1 className='text-white font-bold text-7xl leading-12 flex flex-col gap-8'
                 data-aos="fade-right"
  data-aos-delay="200"><span>Bon Appétit<br/></span><span className='text-[#F486C3] '>Explore Midnight Silog<br/></span><span>Creations</span>
        </h1>
        <p className='text-white text-lg mt-10'>Your ultimate destination for all things food! Explore our<br/>
extensive collection of mouthwatering recipes.</p>
<button className='text-white flex gap-3 items-center text-lg font-bold bg-[#F486C3] py-5 transition-all duration-300 ease-in-out hover:bg-[#ff279e] hover:translate-y-1.5 px-12 rounded-full mt-7'>Order Now<i class="fa-solid fa-right-long"></i></button>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Hero
