import React, { useState } from "react";
import { motion } from "framer-motion";
import videoSrc from "../assets/vid.MP4"; // High-quality video file

const WhyChooseUs = () => {
  const [isPlaying, setIsPlaying] = useState(true); // State to track if the video is playing

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(true);

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-orange-400 mb-6">
            Why You Should Choose Us?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-xl">
  At Efent, we specialize in event management and organization, offering comprehensive solutions for handling all types of events. By understanding your unique requirements, we craft tailored experiences to ensure your event's success. Whether it's a corporate gathering, wedding, birthday, or a grand celebration, we deliver excellence with a focus on your vision. With Efent, you'll find a reliable partner dedicated to creating memorable moments and elevating your brand. Let us help you bring your events to life with precision and creativity.
</p>

          <motion.button
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-black py-2 px-6 rounded-md hover:bg-orange-500 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View More →
          </motion.button>
        </motion.div>

        {/* Right Video */}
        <motion.div
          className={`w-full md:w-1/2 flex justify-center relative rounded-lg overflow-hidden ${
            isPlaying ? "ring-4 ring-orange-400" : ""
          }`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Decorative Border */}
          <div
            className={`absolute w-full h-full bg-transparent rounded-lg transition-all duration-300 ${
              isPlaying ? "bg-orange-500/20" : "hover:bg-orange-500/10"
            }`}
            style={{ pointerEvents: "none" }}
          ></div>

          {/* Video */}
          <video
            className="w-full h-64 md:h-80 rounded-lg shadow-lg"
            src={videoSrc}
            controls
            onPlay={handlePlay}
            onPause={handlePause}
            style={{
              filter: "brightness(1.2) contrast(1.1)", // Increase brightness and contrast
              backgroundColor: "black", // Ensure a solid background for better visibility
            }}
          ></video>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
