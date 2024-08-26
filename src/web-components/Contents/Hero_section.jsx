import React from 'react'

function Hero_section() {
  return (
    <section className='hero_section grid grid-cols-5 bg-gradient-to-l from-indigo-950 to-black px-10 py-20 justify-center items-center'>
        <div className="hero_text_wrapper col-span-3">
            <h2 className='text-white my-5 text-5xl'>HEY! I'M ARBAZ </h2>
            <h2 className='text-blue-400 my-5 text-5xl text-nowrap'>I'M FRONTEND DEVELOPER </h2>
            <p className='text-white my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti non, eius labore hic aperiam error?</p>
            <a href="#" className='my-5'><button className='text-white py-3 px-10 bg-blue-500 rounded-sm'>Get in Touch</button></a>
        </div>
        <div className="hero_img col-span-2 w-[400px] h-[400px] rounded-full overflow-hidden">
            <img src="src/assets/img/profile_pic.jpeg" className='w-full h-full object-cover object-center' alt="" />
        </div>
    </section>
  )
}

export default Hero_section;