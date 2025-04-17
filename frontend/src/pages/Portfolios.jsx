import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonials';
import image1 from '../assets/aspirecri.jpg';
import image2 from '../assets/cadefash.jpg';
import image3 from '../assets/annual.JPG';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.png';
import image6 from '../assets/Ramp.jpg';


const portfolioData = [
  {
    title: "Utkansh 2.0 - PDEACOEM Gathering",
    image: image4,
    description: "A grand cultural and technical gathering at PDEACOEM, featuring competitions, performances, and knowledge-sharing sessions.",
    link: "https://www.instagram.com/reel/DGsC-UEzW2d/?igsh=MWI4OHJ4OGh5Mmloag=="
  },
  {
    title: "Wet'n Joy Trip Organization - Pune",
    image: image5,
    description: "Successfully organized and managed a trip for 40 people from Pune to Wet'n Joy, ensuring seamless coordination and an enjoyable experience.",
    link: "https://www.instagram.com/reel/DHfTrbmNFUh/?igsh=MXhnbDJpdXd5MW4yOA=="
  },
  {
    title: "Ramp Inferno 2025 - Cadence Academy",
    image: image6,
    description: "A spectacular fashion event showcasing creativity, style, and talent, making a bold statement in the fashion world.",
    link: "https://www.instagram.com/reel/DG7wheHJs80/?igsh=MWwyZ2l5OHVzeHhkZw=="
  },
  {
    title: "Corporate Event - Aspire Sports Club",
    image: image1,
    description: "A dynamic corporate event featuring keynote speakers, seminars, and networking sessions aimed at fostering business growth.",
    link: "https://www.instagram.com/reel/DDTx7olTBDd/?igsh=MTc4aHhoMm8xdmM2bA=="
  },
  {
    title: "Traditional Event - Cadence Academy",
    image: image2,
    description: "A cultural event blending traditional performances and community activities to celebrate heritage and innovation.",
    link: "https://www.instagram.com/reel/C6lhKlkIs4K/?igsh=MXl5ZGNiaHkyaTEz"
  },
  {
    title: "Annual Gathering Event - PDEACOEM",
    image: image3,
    description: "An annual celebration at PDEACOEM, bringing together students, alumni, and faculty with engaging talks and performances.",
    link: "https://www.instagram.com/reel/C4nWH3LB-Ml/?igsh=MThlajIzOHhzZ3UxeA=="
  },

];

const PortfolioPage = () => {
  return (
    <>
      <Header />
      <section className="bg-black py-32 px-6">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl font-bold text-orange-600 mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Recent Work
          </motion.h1>

          {/* Portfolio Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((item, index) => (
              <div
                key={index}
                className="bg-[#FFF3CD] rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover" // Set proper height and width
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 font-semibold"
                  >
                    View Details
                  </a>

                </div>
              </div>
            ))}
          </div>
          <br /><br />
          <Testimonial />

          {/* Call-to-Action Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-orange-600 mb-8">Ready to Plan Your Next Event?</h2>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd2U0Eno08Q7gM_X7F_06sudsPf5y6-OKWtT1yB3G9Iqdiwdw/viewform?usp=header"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white text-lg font-semibold rounded-full shadow-md hover:bg-pink-600 transition-colors duration-300"
            >
              Contact Us
            </a>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PortfolioPage;
