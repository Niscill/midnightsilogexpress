import React from 'react'

const Sec3 = () => {
  return (
    <div className="w-full flex justify-center py-10">

      <div className="w-[200%] h-[1000px] overflow-hidden rounded-xl">
        <video
          className="w-full h-full object-cover opacity-40"
          autoPlay
          muted
          loop
        >
          <source src="/vid.mp4" type="video/mp4" />
        </video>
      </div>

    </div>
  )
}

export default Sec3
