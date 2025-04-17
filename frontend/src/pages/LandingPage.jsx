// App.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutHero from '../components/AboutHero';
import Amenities from '../components/Amenities';
import OurPartner from '../components/OurPartner';
import Choose from '../components/Choose';
import Gallery from '../components/Gallery';
import CompleteProject from '../components/CompleteProject';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonials';


function LandingPage() {
  return (
    <div className="font-sans bg-[#D8DBD5]">
      <Header />
      <Hero />
      <AboutHero />
      <Amenities />
      <OurPartner />
      <Choose />
      <Gallery />
      <CompleteProject />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default LandingPage;