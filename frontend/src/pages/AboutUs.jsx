import React from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaHandshake, FaChartLine, FaUsers, FaTrophy, FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="py-32 px-6 lg:px-12 bg-black text-white">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl font-bold mb-4 text-shadow-lg text-orange-400"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Efnet Events
          </motion.h1>
          <p className="text-lg mb-8">
            At Efnet Events, we specialize in creating memorable and impactful events. From corporate functions to brand activations, we ensure that each event is unique and unforgettable.
          </p>
          <motion.button
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white py-2 px-6 rounded-full text-xl hover:bg-orange-700 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Discover Our Story
          </motion.button>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-[#1F1F1F] to-[#0A0A0A]">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-semibold text-orange-600 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Mission & Vision
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#FFF3CD] rounded-lg shadow-md hover:bg-orange-200 transition duration-300">
              <IoMdRocket className="text-orange-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional event experiences through creativity, innovation, and meticulous planning. Our goal is to bring your vision to life with seamless execution and extraordinary results.
              </p>
            </div>
            <div className="p-6 bg-[#FFF3CD] rounded-lg shadow-md hover:bg-orange-200 transition duration-300">
              <FaHandshake className="text-orange-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
              <p className="text-gray-600">
                To be the world’s leading event management company, transforming every event into an extraordinary experience that exceeds expectations and creates lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 lg:px-12 bg-black">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-semibold text-orange-600 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Efnet Events?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-[#FFF3CD] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <FaBullhorn className="text-orange-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-gray-600">
                With over a decade of experience in event management, we have honed our skills to deliver flawless events that leave lasting impressions.
              </p>
            </div>
            <div className="bg-[#FFF3CD] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <FaChartLine className="text-orange-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
              <p className="text-gray-600">
                We specialize in creating personalized event strategies that align with your specific goals, ensuring each event is a perfect fit.
              </p>
            </div>
            <div className="bg-[#FFF3CD] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <FaUsers className="text-orange-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We work closely with you to understand your needs, ensuring every detail is perfect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-[#1F1F1F] to-[#0A0A0A]">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-semibold text-orange-600 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFF3CD] p-6 rounded-lg shadow-md hover:bg-orange-200 transition duration-300">
              <FaTrophy className="text-orange-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in everything we do, from planning to execution, ensuring that each event is a true success.
              </p>
            </div>
            <div className="bg-[#FFF3CD] p-6 rounded-lg shadow-md hover:bg-orange-200 transition duration-300">
              <FaMapMarkerAlt className="text-orange-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly innovate and stay ahead of the curve to provide creative solutions that set us apart in the event management industry.
              </p>
            </div>
            <div className="bg-[#FFF3CD] p-6 rounded-lg shadow-md hover:bg-orange-200 transition duration-300">
              <IoMdRocket className="text-orange-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">
                We are passionate about delivering experiences that resonate with our clients and their audiences, leaving a lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default AboutPage;
