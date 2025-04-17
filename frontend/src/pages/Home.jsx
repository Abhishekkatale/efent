import React, { useState } from "react";
import konkanVideo from "../assets/konkan.webm";

const HeroWithVideo = () => {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      {showVideo ? (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Video Container */}
          <div className="relative w-[56.25vh] h-full sm:w-[320px] sm:h-[568px] md:w-[360px] md:h-[640px] lg:w-[405px] lg:h-[720px] xl:w-[450px] xl:h-[800px] overflow-hidden">
            <video
              src={konkanVideo}
              autoPlay
              loop // Enables looping
              controls // Adds controls (optional)
              className="w-full h-full object-cover"
            />
          </div>

          {/* Skip Button */}
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-5 right-5 bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-800 transition"
          >
            Skip
          </button>
        </div>
      ) : (
        // Main Hero Content after skipping the video
        <div className="flex items-center justify-center h-full text-white text-4xl">
          Welcome to Our Website 🚀
        </div>
      )}
    </div>
  );
};

export default HeroWithVideo;
