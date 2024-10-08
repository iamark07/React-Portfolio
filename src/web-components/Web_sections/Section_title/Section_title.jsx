import React from 'react';

function Section_list({ title, data }) {
  return (
    <h4 
      className="p-3 md:px-4 md:py-3 text-sm md:text-md bg-sky-950 text-white rounded-sm w-32 text-center" 
      data-aos={data}
    >
      {title}
    </h4>
  );
}

export default Section_list;
