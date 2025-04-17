import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="bg-black text-white py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-gray-300 text-sm mb-2 uppercase tracking-wide">
            Let's Get In Touch
          </h2>
          <h1 className="text-center text-3xl font-bold mb-10">
            How we can help you?
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Section */}
            <div className="w-full h-80">
              <iframe
                title="map"
                className="w-full h-full rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.4282009625276!2d73.97784724831581!3d18.521207026901166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3fb1fc036eb%3A0xc2e536848ae419bc!2sEfent%20Event%20Planner!5e1!3m2!1sen!2sin!4v1739084712843!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
           
            {/* Form Section */}
            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-gray-800 border border-gray-600 text-gray-300 p-3 rounded focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full bg-gray-800 border border-gray-600 text-gray-300 p-3 rounded focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    className="w-full bg-gray-800 border border-gray-600 text-gray-300 p-3 rounded focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full bg-gray-800 border border-gray-600 text-gray-300 p-3 rounded focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#D4A373] hover:bg-[#b3825b] text-white font-semibold py-3 px-6 rounded w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="text-center mt-10">
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSd2U0Eno08Q7gM_X7F_06sudsPf5y6-OKWtT1yB3G9Iqdiwdw/viewform?usp=header"
    target="_blank"  // Opens the link in a new tab
    rel="noopener noreferrer"  // Security feature for opening external links
  >
    <button
      className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-semibold py-4 px-8 rounded"
    >
      Contact Us
    </button>
  </a>
</div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
