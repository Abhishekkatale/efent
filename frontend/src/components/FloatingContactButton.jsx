import React from "react";

const FloatingContactButton = () => {
  const handleContactClick = () => {
    alert("Contact us form or action triggered!");
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={handleContactClick}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 focus:outline-none transition-all"
        aria-label="Contact Us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m-.7-7.3a7 7 0 11-9.9 0 7 7 0 019.9 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default FloatingContactButton;
