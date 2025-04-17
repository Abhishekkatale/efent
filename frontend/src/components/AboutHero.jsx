import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/H3.jpeg";
import image2 from "../assets/S4.JPG";
import image3 from "../assets/S1.JPG";

const cardsData = [
  {
    title: "Event Planning & Management",
    description:
      "We specialize in creating exceptional events that leave lasting impressions. Whether it's a corporate function, private celebration, or large-scale public event, our expert team designs and executes every detail to perfection. From ideation to execution, we ensure your event is seamless, memorable, and exactly as you envisioned.",
    image: image1,
  },
  {
    title: "Brand Activation",
    description:
      "Our Brand Activation services are designed to engage and captivate your target audience through innovative marketing strategies. We use a variety of platforms, including social media, experiential marketing, and in-person activations, to boost brand visibility and create meaningful connections between brands and their consumers.",
    image: image2,
  },
  {
    title: "Exhibition Design & Setup",
    description:
      "Our exhibition design services help brands stand out at trade shows, conventions, and expos. We provide end-to-end solutions, from conceptual design to construction, ensuring that every stall is visually appealing, functional, and optimized to deliver a great return on investment. We take care of everything so you can focus on building valuable connections.",
    image: image3,
  },
];

const Cards = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-8 px-8 py-16 bg-gradient-to-br from-[#1F1F1F] to-[#0A0A0A]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {cardsData.map((card, index) => (
        <motion.div
          key={index}
          className="relative max-w-md w-[450px] h-[450px] bg-black/50 text-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{
            scale: 1.05,
            rotate: 1,
            boxShadow: "0px 10px 30px rgba(255, 165, 0, 0.5)",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${card.image})`,
            }}
            whileHover={{
              scale: 1.1,
              filter: "brightness(0.85)",
            }}
            transition={{ duration: 0.4 }}
          ></motion.div>
          <div className="absolute inset-0 bg-black/50"></div>
          <motion.div
            className="relative p-8 space-y-8"
            whileHover={{ translateY: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl text-orange-400 font-bold">{card.title}</h3>
            <p className="text-xl text-gray-300">{card.description}</p>
            <motion.a
              href="#"
              className="inline-block mt-4 text-orange-400 underline text-lg"
              whileHover={{ scale: 1.2, color: "#FF4500" }}
              whileTap={{ scale: 0.9 }}
            >
              Read More
            </motion.a>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Cards;
