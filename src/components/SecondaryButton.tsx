import { Link } from "gatsby";
import React from "react";

const SecondaryButton = ({ content, url }) => {
  if (url) {
    return (
      <Link
        to={url}
        className="text-white py-6 px-12 rounded-full shadow-xl text-xl secondary font-medium"
      >
        {content}
      </Link>
    );
  } else {
    return (
      <button className="text-white py-6 px-12 rounded-full shadow-xl text-xl secondary font-medium">
        {content}
      </button>
    );
  }
};

export default SecondaryButton;
