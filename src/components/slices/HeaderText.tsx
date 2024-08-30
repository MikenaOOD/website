import { Link } from "gatsby";
import React from "react";

const HeaderText = ({ slice }) => {
  return (
    <div className="py-16 px-8 text-center">
      <h2 className="text-4xl font-medium mb-6">
        {slice.primary.container_header.text}
      </h2>
      <p
        className="text-2xl mb-2 max-w-2xl mx-auto"
        dangerouslySetInnerHTML={{
          __html: slice.primary.container_content.html,
        }}
      ></p>
      {slice.primary.container_link && (
        <Link
          to={slice.primary.container_link.uid}
          className="text-black font-bold underline"
        >
          {slice.primary.link_label}
        </Link>
      )}
    </div>
  );
};

export default HeaderText;
