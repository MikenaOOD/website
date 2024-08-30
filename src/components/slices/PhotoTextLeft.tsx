import React from "react";

const PhotoTextLeft = ({ slice }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-16">
      <div className="lg:w-1/2 px-16">
        <h2 className="text-3xl font-bold mb-4 text-center font-medium">
          {slice.primary.container_header.text}
        </h2>
        <p
          className="text-black-700 text-2xl text-center font-extralight"
          dangerouslySetInnerHTML={{
            __html: slice.primary.container_content.html,
          }}
        ></p>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={slice.primary.image.url}
          alt={slice.primary.image.alt}
          className="w-full max-w-md h-64 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default PhotoTextLeft;
