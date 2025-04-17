import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurPartners = () => {
  const partners = [
    { name: "Partner 1", logo: require("../assets/Aspire Logo.png") },
    { name: "Partner 2", logo: require("../assets/musib.png") },
    { name: "Partner 3", logo: require("../assets/cade.png") },
    { name: "Partner 4", logo: require("../assets/Pdea22 .png") },
    { name: "Partner 5", logo: require("../assets/shree.jpg") },
    { name: "Partner 6", logo: require("../assets/puneridd.png") },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-br from-[#1F1F1F] to-[#0A0A0A] py-16 px-8 lg:px-24">
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-[#FFF3CD] font-semibold px-4 py-1 inline-block rounded-full mb-4">
          Our Partners
        </div>
        <h2 className="text-4xl font-extrabold text-orange-400">
          Trusted by Leading Brands
        </h2>
        <p className="text-gray-100 text-lg mt-4">
          We are proud to collaborate with industry leaders to deliver
          exceptional experiences.
        </p>
      </div>

      {/* Partner Logos - Carousel for mobile */}
      <div className="lg:hidden">
        <Slider {...sliderSettings}>
          {partners.map((partner, index) => (
            <div key={index} className="p-4">
              <div className="flex items-center justify-center bg-transparent rounded-lg p-6 hover:scale-110 transform transition-transform shadow-lg">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Partner Logos - Grid for larger screens */}
      <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-transparent rounded-lg p-6 hover:scale-110 transform transition-transform shadow-lg hover:shadow-orange-500/40"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-32 h-32 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
