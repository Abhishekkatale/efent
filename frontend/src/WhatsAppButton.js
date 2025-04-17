import React, { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FaTimes,
  FaEnvelope,
} from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa"; // Add this import at the top
// Cat icon from game icons
import { motion } from "framer-motion";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (type) => {
    switch (type) {
      case "whatsapp":
        window.open(
          `https://wa.me/7875717213?text=${encodeURIComponent(
            "Hello, Can you help me with some information about Efent?"
          )}`,
          "_blank"
        );
        break;
      case "contact":
        window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSd2U0Eno08Q7gM_X7F_06sudsPf5y6-OKWtT1yB3G9Iqdiwdw/viewform?usp=header",
          "_blank"
        );
        break;
      case "instagram":
        window.open("https://www.instagram.com/efent_?igsh=MzRlODBiNWFlZA==", "_blank");
        break;
      case "call":
        window.open("tel:+91 7875717213");
        break;
      default:
        break;
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Main Button */}
      <motion.div
  onClick={toggleOptions}
  className="bg-[#f50057] text-white p-4 rounded-full shadow-lg cursor-pointer"
  initial={{ scale: 1 }}
  animate={{
    scale: [1, 1.2, 1],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 1.2,
      ease: "easeInOut",
    },
  }}
  whileHover={{ scale: 1.1 }}
>
  {isOpen ? <FaTimes size={30} /> : <FaCommentDots size={24} />}
</motion.div>


      {/* Options */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 flex flex-col items-center gap-4">
          {/* WhatsApp */}
          <div
            onClick={() => handleOptionClick("whatsapp")}
            className="relative group"
          >
            <div className="bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-transform flex items-center justify-center">
              <FaWhatsapp size={25} />
            </div>
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              WhatsApp
            </span>
          </div>

          {/* Contact Form */}
          <div
            onClick={() => handleOptionClick("contact")}
            className="relative group"
          >
            <div className="bg-orange-400 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-yellow-600 transition-transform flex items-center justify-center">
              <FaEnvelope size={25} />
            </div>
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Contact Form
            </span>
          </div>

          {/* Instagram */}
          <div
            onClick={() => handleOptionClick("instagram")}
            className="relative group"
          >
            <div className="bg-pink-600 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-pink-700 transition-transform flex items-center justify-center">
              <FaInstagram size={25} />
            </div>
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Instagram
            </span>
          </div>

          {/* Call Now */}
          <div
            onClick={() => handleOptionClick("call")}
            className="relative group"
          >
            <div className="bg-purple-600 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-red-600 transition-transform flex items-center justify-center">
              <FaPhone size={25} />
            </div>
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Call Now
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingActionButton;
