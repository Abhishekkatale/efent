import React from "react";
import { motion } from "framer-motion";
import logo from '../assets/logoo.svg';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12 px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        {/* Top Section */}
        <motion.div
          className="flex flex-wrap md:flex-nowrap justify-between items-start gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {/* Logo Section */}
          <motion.div
            className="w-full md:w-1/4 flex flex-col items-start"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <a href="#">
              <motion.img
                src={logo}
                alt="Efent Logo"
                className="w-32"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </a>
            <p className="text-gray-400 mt-4">
              We are a leading event management company specializing in creating unforgettable experiences. From corporate events to exhibitions, we bring your visions to life.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="w-full md:w-1/4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <h2 className="text-2xl font-bold text-orange-400 mb-4">Quick Links</h2>
            <ul className="space-y-2">
  <li>
    <Link to="/" className="hover:text-[#C29180] transition">
      Home
    </Link>
  </li>
  <li>
    <Link to="/about-us" className="hover:text-[#C29180] transition">
      About Us
    </Link>
  </li>
  <li>
    <Link to="/services" className="hover:text-[#C29180] transition">
      Services
    </Link>
  </li>
  <li>
    <Link to="/contact-us" className="hover:text-[#C29180] transition">
      Contact Us
    </Link>
  </li>
  </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="w-full md:w-1/4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <h2 className="text-2xl font-bold text-orange-400 mb-4">Contact Us</h2>
            <p className="text-gray-400">Manjari BK, Pune, India</p>
            <p className="text-gray-400 mt-2">Email: info.efent@gmail.com</p>
            <p className="text-gray-400 mt-2">Phone: +91 9325555711</p>
            <br/>
            <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          
          <div className="flex space-x-8 mt-6 lg:mt-0">
            <a
              href="https://www.facebook.com/share/18PJ6VMqwE/"
              className="text-3xl hover:text-orange-500 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/EFENT"
              className="text-3xl hover:text-orange-500 transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/efent_?igsh=MzRlODBiNWFlZA=="
              className="text-3xl hover:text-orange-500 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/EFENT"
              className="text-3xl hover:text-orange-500 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gray-700 my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >


<div className="flex flex-col items-center md:flex-row md:justify-between">
  <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-4">
    <p className="mb-2 md:mb-0">&copy; 2024 Efent. All rights reserved.</p>
    <span className="hidden md:block">|</span>
    <a href="/terms-and-conditions" className="hover:text-orange-500">Terms Of Service</a>
    <a href="/privacy-policy" className="hover:text-orange-500 ml-4">Privacy Policy</a>
  </div>

  
</div>
<div className="mt-4 md:mt-0 md:ml-auto flex items-center">
    <span className="text-right">Developed by: <a href="https://musitech.in" className="text-orange-500">MusiTech</a></span>
  </div>



         
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-[#C29180] transition"
              whileHover={{ scale: 1.2 }}
            >
              <i className="fab fa-facebook"></i>
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-[#C29180] transition"
              whileHover={{ scale: 1.2 }}
            >
              <i className="fab fa-twitter"></i>
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-[#C29180] transition"
              whileHover={{ scale: 1.2 }}
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
