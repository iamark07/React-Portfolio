import React from "react";

function Content_box(props) {
  return (
    <>
      <div className="content_section">
        <figure>
          <img src={props.src} alt="" />
        </figure>
        <h2>{props.heading}</h2>
        <p>
          {props.content_text}
        </p>
      </div>
    </>
  );
}

export default Content_box;
