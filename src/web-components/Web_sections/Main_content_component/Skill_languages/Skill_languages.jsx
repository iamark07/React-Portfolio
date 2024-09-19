import React from 'react';

function Skill_languages({ lang_icon, lang_name }) {
  return (
    <div className="skills_detail flex flex-col items-center gap-2 mt-10" data-aos="fade-left">
        {lang_icon}
        <h5 className='text-white text-lg md:text-2xl'>{lang_name}</h5>
    </div>
  );
}

export default Skill_languages;
