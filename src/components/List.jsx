import React from "react";

function List({name, image, alt}) {
   
  return (
    <>
    <div className="gallery">
    <div className="gallery__item">
      <h4>{name}</h4>
      <div className="gallery__item--image">
        <img
          src={image}
          alt={alt}
        />
      </div>
    </div>
    </div>
    </>
  );
}

export default List;
