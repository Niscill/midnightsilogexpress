import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <div data-aos="fade-down">  
      
      <div className='w-full h-[72px] bg-black flex items-center justify-between px-6'>

        
        <div className='flex items-center gap-2 flex-shrink-0'>
          <img src="logo.jpg" alt="" className='h-12 object-cover' />
          <h1 className='text-[#F486C3] font-semibold text-xl'>Midnight</h1>
          <h1 className='text-[#62E1F9] font-semibold text-xl'>Silog Express</h1>
        </div>

        
        <div className='hidden md:flex items-center gap-8 text-lg text-white'>
          <a className='text-[#62E1F9] border-b-2 border-[#F486C3]' href="">Home</a>
          <a className='transition-all ease-in-out duration-300 hover:text-[#62E1F9]' href="">Menu</a>
          <a className='transition-all ease-in-out duration-300 hover:text-[#62E1F9]' href="">Services</a>
          <a className='transition-all ease-in-out duration-300 hover:text-[#62E1F9]' href="">Delivery</a>
        </div>

        
        <div className='hidden md:flex items-center gap-4'>
          <div className='rounded-full bg-white w-[42px] h-[42px] text-lg flex items-center justify-center cursor-pointer'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className='rounded-full bg-white w-[42px] h-[42px] text-lg flex items-center justify-center cursor-pointer'>
            <i className="fa-solid fa-cart-arrow-down"></i>
          </div>
        </div>

       
        <button
          className='md:hidden text-white text-2xl focus:outline-none'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

     
      {menuOpen && (
        <div className='md:hidden bg-[#0a0a0a] flex flex-col px-6 py-4 gap-4 border-t border-[#222]'>
          <a className='text-[#62E1F9] border-b border-[#1a1a1a] pb-3' href="">Home</a>
          <a className='text-white border-b border-[#1a1a1a] pb-3 hover:text-[#62E1F9] transition-colors' href="">Menu</a>
          <a className='text-white border-b border-[#1a1a1a] pb-3 hover:text-[#62E1F9] transition-colors' href="">Services</a>
          <a className='text-white border-b border-[#1a1a1a] pb-3 hover:text-[#62E1F9] transition-colors' href="">Delivery</a>
          <div className='flex gap-3 pt-2'>
            <div className='rounded-full bg-white w-[42px] h-[42px] text-lg flex items-center justify-center cursor-pointer'>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='rounded-full bg-white w-[42px] h-[42px] text-lg flex items-center justify-center cursor-pointer'>
              <i className="fa-solid fa-cart-arrow-down"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header