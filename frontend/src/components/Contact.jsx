import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSuccess(true);
    setModalIsOpen(true);
    // Here you can handle the form submission (e.g., send data to a server or API)
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setFormSuccess(false);
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-green-600 via-lime-600 to-green-700 py-16 px-6 lg:px-24 overflow-x-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-yellow-400">Connect With Us</h2>
          <p className="text-lg text-gray-600 mt-4">Your luxury experience begins here. Reach out for premium bookings or inquiries.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">

          <motion.div
            className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-xl"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Message Us</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 h-40"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <div className="relative w-full h-64 bg-gray-300 rounded-lg overflow-hidden shadow-lg mb-6">
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3784.058850885525!2d74.28736497519068!3d18.48099328260493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI4JzUxLjYiTiA3NMKwMTcnMjMuOCJF!5e0!3m2!1sen!2sin!4v1735374299326!5m2!1sen!2sin"         width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Our Location"
                ></iframe>
              
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Contact Details</h3>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">📧</span>
                  <a href="mailto:contact@krushiunnati.in" className="text-green-700 hover:underline">contact@krushiunnati.in</a>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">📞</span>
                  <a href="tel:+9178228 27875" className="text-green-700 hover:underline">+91 78228 27875</a>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">💬</span>
                  <a
                    href="https://wa.me/9178228 27875"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:underline"
                  >
                    WhatsApp Us (Chat Now)
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Form Success"
        className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          {formSuccess ? (
            <div>
              <h3 className="text-2xl font-semibold text-green-500 mb-4">Thank you for contacting us!</h3>
              <p className="text-gray-700 mb-4">We will respond promptly.</p>
              <button
                onClick={closeModal}
                className="py-2 px-6 bg-green-700 text-white rounded-lg hover:bg-green-600 transition duration-300"
              >
                Close
              </button>
            </div>
          ) : null}
        </div>
      </Modal>
    </motion.section>
  );
};

export default ContactSection;
