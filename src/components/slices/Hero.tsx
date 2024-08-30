import React from "react";

import PrimaryButton from "../PrimaryButton";

const Hero = ({ slice }) => {
  console.log(slice.primary);

  return (
    <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
      <img
        src={slice.primary.hero_image.url}
        alt={slice.primary.hero_image.alt}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="relative z-10 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h1
            className="text-5xl font-normal text-black mb-4"
            dangerouslySetInnerHTML={{
              __html: slice.primary.container_content.html,
            }}
          ></h1>
          <PrimaryButton
            content={slice.primary.link_label}
            url={slice.primary.link.url}
          ></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
