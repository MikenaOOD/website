import { Link } from "gatsby";
import React from "react";

const PrimaryButton = ({ content, url }) => {
  if (url) {
    return (
      <Link
        className="text-white py-6 px-3 rounded-full shadow-xl text-xl primary inline-block"
        to={url}
      >
        {content}
      </Link>
    );
  } else {
    return (
      <button className="text-white py-6 px-3 rounded-full shadow-xl text-xl primary">
        {content}
      </button>
    );
  }
};

export default PrimaryButton;
