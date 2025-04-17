import React from 'react';
import { Button } from '../components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VendorPlannerCard = () => {
  const vendors = [
    {
      id: 1,
      image: "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/008/788/472/new_medium/pp-1000020584.jpg?1731574498",
      tag: 'Most Preferred',
      name: 'BMT Events And H...',
      location: 'Jaipur',
      rating: '⭐ 5.0',
      reviews: 204,
      startingPrice: '₹10,00,000',
      whatsapp: '919876543210',
    },
    {
      id: 2,
      image: 'https://images.shaadisaga.com/shaadisaga_production/photos/pictures/003/335/551/new_medium/mini_magick20220222-21896-1w3xwgn.jpg?1645531005',
      tag: 'Most Preferred',
      name: 'Wedding Bliss',
      location: 'Bhubaneswar',
      rating: '⭐ 5.0',
      reviews: 15,
      startingPrice: '₹1,00,000',
      whatsapp: '919812345678',
    },
    {
      id: 3,
      image: 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/008/750/088/new_medium/pp-5.jpg?1729082346',
      tag: 'Most Preferred',
      name: 'Cherish Makers',
      location: 'Chepauk, Chennai',
      rating: '⭐ 4.5',
      reviews: 'No reviews yet',
      startingPrice: '₹10,00,000',
      whatsapp: '919834567890',
    },
  ];

  const handleWhatsAppClick = (number) => {
    const message = encodeURIComponent("Hello, give me more info regarding wedding plans.");
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  };

  return (
    <>
      <Header />
      <div className="px-6 py-32 bg-black">
        <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-6">
          Best Wedding Planners (20,657)
        </h1>
        <p className="text-center text-white mb-12 max-w-3xl mx-auto">
          Searching for the best wedding planners? We’ve compiled a list of the top wedding planners with
          details on pricing, reviews, and contact information.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-[#FFF3CD] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-72 object-cover rounded-t-xl"
                />
                <span className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {vendor.tag}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 truncate">{vendor.name}</h2>
                <p className="text-gray-500 text-sm">{vendor.location}</p>
                <div className="flex items-center mt-3">
                  <i className="fas fa-star text-yellow-500 mr-1" />
                  <span className="text-lg font-semibold">{vendor.rating}</span>
                  <span className="ml-2 text-gray-400 text-sm">{vendor.reviews} reviews</span>
                </div>
                <p className="text-lg font-semibold text-red-500 mt-4">
                  {vendor.startingPrice}{' '}
                  <span className="text-sm font-normal text-gray-500">Starting Price</span>
                </p>
                <div className="flex justify-center mt-6">
                  <Button 
                    onClick={() => handleWhatsAppClick(vendor.whatsapp)}
                    className="w-full py-3 px-6 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300"
                  >
                    Contact Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VendorPlannerCard;
