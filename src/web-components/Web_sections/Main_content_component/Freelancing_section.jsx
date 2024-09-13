import React from 'react'

function Freelancing_section() {
  return (
    <section className="relative freelancing_section bg-[url('src/assets/img/freelance_bg_img.png')] bg-cover bg-center h-52 w-full">
        <div class="absolute w-full h-full inset-0 bg-black bg-opacity-50 flex flex-col sm:flex-row sm:items-center items-start justify-center sm:justify-between p-5 sm:p-10 gap-3">
        <h2 className='text-white flex items-end text-lg sm:text-3xl'>I'm available for freelance work <span className='w-10 h-1 bg-white inline-block mb-2 ms-2 animate-fade-in'></span></h2>
        <button className='text-white text-md sm:text-lg'>Contact Me</button>
        </div>
        
    </section>
  )
}

export default Freelancing_section