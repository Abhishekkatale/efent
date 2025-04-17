import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`rounded-lg shadow-md p-4 bg-white ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
