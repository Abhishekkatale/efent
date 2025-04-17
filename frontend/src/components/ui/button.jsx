import React from "react";

export const Button = ({ children, className, onClick, type = "button" }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition ${className || ""}`}
      >
        {children}
      </button>
    );
  };
  
