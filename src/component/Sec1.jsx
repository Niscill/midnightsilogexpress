import React from 'react'

const Sec1 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-24 text-white relative">

      
      <h1 className="text-7xl font-semibold text-pink-400 drop-shadow-[0_0_10px_#ff6ec7]">
        Popular Dishes
      </h1>

      <p className="text-cyan-400 text-2xl mt-5 drop-shadow-[0_0_8px_#00e5ff]">
        Our most loved dishes by customer
      </p>

      
 <div className="mt-40 flex gap-40 flex-wrap justify-center">
    
   <div className="relative w-[370px] h-[550px] bg-[#121212] rounded-[40px] shadow-2xl flex flex-col items-center p-8 border border-white/5">
  
  <span className="absolute top-8 left-10 text-[#7a2b3a] text-lg font-bold">
    01
  </span>

  <div className="mt-10 w-[240px] h-[200px] rounded-full  flex items-center justify-center ">
    <img 
      src="plate1.png" alt="" className="object-cover"
    />
  </div>

  <h2 className="mt-12 text-white text-4xl tracking-wide">
    Tapsilog
  </h2>

  <p className="mt-4 text-[#a3a3a3] text-center text-lg leading-relaxed max-w-[200px]">
    Pork longganisa · garlic rice · fried egg
  </p>
  <div className="mt-8 text-[#eab308] text-4xl font-bold">
    <span className="text-2xl mr-1">₱</span>99
  </div>
</div>

        
   <div className="relative w-[370px] h-[550px] bg-[#121212] rounded-[40px] shadow-2xl flex flex-col items-center p-8 border border-white/5">
  
  <span className="absolute top-8 left-10 text-[#7a2b3a] text-lg font-bold">
    02
  </span>

  <div className="mt-10 w-[240px] h-[200px] rounded-full  flex items-center justify-center ">
    <img 
      src="plate2.png" alt="" className="object-cover"
    />
  </div>

  <h2 className="mt-12 text-white text-4xl tracking-wide">
    Bangsilog
  </h2>

  <p className="mt-4 text-[#a3a3a3] text-center text-lg leading-relaxed max-w-[200px]">
    Pork longganisa · garlic rice · fried egg
  </p>

  <div className="mt-8 text-[#eab308] text-4xl font-bold">
    <span className="text-2xl mr-1">₱</span>120
  </div>
</div>

        
    <div className="relative w-[370px] h-[550px] bg-[#121212] rounded-[40px] shadow-2xl flex flex-col items-center p-8 border border-white/5">

  <span className="absolute top-8 left-10 text-[#7a2b3a] text-lg font-bold">
    03
  </span>
  <div className="mt-10 w-[240px] h-[200px] rounded-full  flex items-center justify-center ">
    <img 
      src="plate3.png" alt="" className="object-cover"
    />
  </div>
  <h2 className="mt-12 text-white text-4xl tracking-wide">
    Longsilog
  </h2>
  <p className="mt-4 text-[#a3a3a3] text-center text-lg leading-relaxed max-w-[200px]">
    Pork longganisa · garlic rice · fried egg
  </p>

  <div className="mt-8 text-[#eab308] text-4xl font-bold">
    <span className="text-2xl mr-1">₱</span>89
  </div>
</div>
      </div>
    </div>
  )
}

export default Sec1