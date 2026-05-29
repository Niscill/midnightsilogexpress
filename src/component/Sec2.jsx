import React from 'react'

const Sec2 = () => {
  return (
    <section className="min-h-[900px] w-full bg-black flex items-center justify-center px-6 py-20 lg:px-24">
      
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center ">

       {/* Left Content */}
<div className="flex-1 text-center lg:text-left space-y-8 lg:-ml-50">
  <h1 className="text-5xl md:text-7xl font-bold text-teal-300">
    Order Your Best <br /> Food Anytime
  </h1>

  <p className="text-gray-400 max-w-md mx-auto lg:mx-0 text-4xl">
    A good restaurant is like a vacation. It’s more than just food—it’s an experience.
  </p>

  <button className="bg-teal-300 hover:bg-teal-400 text-black font-semibold py-3 px-6 rounded-full mx-auto lg:mx-0 transition">
    Order Now →
  </button>
</div>

        
        <div className="flex-1 flex justify-center">
          <img 
            src="plate4.png" alt="" className="ml-100 drop-shadow-[0_0_40px_#62E1F9]"/>
        </div>

      </div>

    </section>
  )
}

export default Sec2