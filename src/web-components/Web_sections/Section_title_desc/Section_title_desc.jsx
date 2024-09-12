import React from "react";

function Section_titile_desc(props) {
  return (
    <h2 className="text-neutral-300 text-2xl md:text-4xl mt-5 md:mt-7">
      {props.title_desc}
    </h2>
  );
}

export default Section_titile_desc;
