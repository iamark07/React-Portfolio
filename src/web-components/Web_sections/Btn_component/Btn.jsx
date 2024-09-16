import React from 'react';
import { Link } from 'react-router-dom';

function Btn(props) {
  return (
    <Link to={props.link} className='my-5'>
      <button className={`${props.class_name} w-32 md:w-40 text-md text-white py-3 px-5 border border-solid border-blue-500 transition-all duration-300 hover:bg-transparent bg-blue-500 rounded-sm`}>
        {props.btn}
      </button>
    </Link>
  );
}

export default Btn;
