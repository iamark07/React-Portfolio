import React from 'react'

function Btn(props) {
  return (
    <a href="#" className='my-5'>
        <button className={`${props.class_name} text-white py-3 px-8 md:px-10 border border-solid border-blue-500 transition-all duration-300 hover:bg-transparent bg-blue-500 rounded-sm`}>{props.btn}</button>
    </a>
  )
}

export default Btn