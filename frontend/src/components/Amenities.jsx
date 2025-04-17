import React from 'react';
import { FaCalendarAlt, FaMusic, FaCameraRetro, FaSmileBeam } from 'react-icons/fa'; // Import relevant icons

const EventManagementSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-12 px-8 lg:px-24 bg-black text-white pb-16">
      {/* Left Image Section */}
      <div className="relative lg:w-1/2 w-full flex items-center justify-center">
  {/* Main Image */}
  <img
    src={require("../assets/A71.jpeg")}
    alt="Event Setup"
    className="w-full max-w-md shadow-2xl rounded-lg"
  />
  {/* Overlapping Image */}
  <img
    src={require("../assets/sap.webp")}
    alt="Decor"
    className="absolute bottom-0 left-12 w-1/2 shadow-xl rounded-lg transform translate-y-8"
  />
</div>

      {/* Right Content Section */}
      <div className="lg:w-1/2 w-full mt-12 lg:mt-0 lg:ml-12">
        {/* Tag */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-[#FFF3cd] font-semibold px-4 py-1 inline-block rounded-full mb-4">
          Efent Events
        </div>
        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-4 text-orange-400">
          Your Trusted Event Management Partner
        </h2>
        {/* Description */}
        <p className="text-white text-opacity-80 mb-6">
          We specialize in creating unforgettable experiences tailored to your vision. Whether it's a wedding, corporate event, or a grand celebration, we've got you covered.
        </p>

        {/* Features List */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-3">
            <span className="bg-white text-pink-500 p-2 rounded-full shadow-lg">
              <FaCalendarAlt />
            </span>
            <span>Custom Event Planning</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-white text-pink-500 p-2 rounded-full shadow-lg">
              <FaMusic />
            </span>
            <span>Entertainment & Music</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-white text-pink-500 p-2 rounded-full shadow-lg">
              <FaCameraRetro />
            </span>
            <span>Photography & Videography</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-white text-pink-500 p-2 rounded-full shadow-lg">
              <FaSmileBeam />
            </span>
            <span>Memorable Experiences</span>
          </div>
        </div>

        {/* Testimonial */}
        <blockquote className="border-l-4 border-white pl-4 italic text-white text-opacity-80 mb-6">
          "They turned our ideas into a magical experience. Highly recommend!"
        </blockquote>

        {/* Button */}
        <a
          href="/services"
          className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-[#FFF3CD] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-pink-500 hover:text-white transition"
        >
          EXPLORE SERVICES
        </a>
      </div>
    </section>
  );
};

export default EventManagementSection;
