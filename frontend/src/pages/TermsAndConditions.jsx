import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const pageTransition = {
    type: "spring",
    stiffness: 50,
    damping: 20,
};

const TermsOfService = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <motion.div
        className="container mx-auto px-4 py-8 lg:px-8 lg:py-12 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        transition={pageTransition}
      >
        <h1 className="text-4xl  text-orange-400 font-bold mb-6 mt-12 text-center lg:text-5xl py-12 lg:mb-8 ">Terms of Service</h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-lg leading-relaxed">
            Welcome to efent. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">2. Services Provided</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>Event planning for weddings, corporate events, and parties.</li>
            <li>Venue selection and booking.</li>
            <li>Event design and decoration services.</li>
            <li>Catering and entertainment arrangements.</li>
            <li>Professional event coordination and management.</li>
            <li>Event marketing and promotion services.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li><strong>Eligibility:</strong> You must be at least 18 years old or have the consent of a guardian to use our services.</li>
            <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
            <li><strong>Use of Services:</strong> You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the services.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">4. Booking and Payment</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li><strong>Booking:</strong> Bookings for services such as event planning or venue selection must be made through our website or by contacting our support team.</li>
            <li><strong>Payment:</strong> Payment for services must be completed according to the instructions provided at the time of booking. All payments are non-refundable except as required by law.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">5. Cancellation and Refunds</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li><strong>Cancellation Policy:</strong> If you need to cancel a booking, please notify us at least 24 hours in advance. Failure to do so may result in a cancellation fee.</li>
            <li><strong>Refunds:</strong> Refunds will be processed according to our refund policy, which is detailed on our website.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p className="text-lg leading-relaxed">
            efent is not liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability for any claim arising out of your use of our services shall not exceed the amount paid by you for the services in question.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">7. Intellectual Property</h2>
          <p className="text-lg leading-relaxed">
            All content on our website, including text, graphics, logos, and images, is the property of efent or its licensors and is protected by copyright and trademark laws. You may not use, reproduce, or distribute any content without our prior written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">8. Privacy Policy</h2>
          <p className="text-lg leading-relaxed">
            We are committed to protecting your privacy. Our Privacy Policy outlines how we collect, use, and protect your personal information. By using our website, you agree to our Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">9. Modifications to Terms</h2>
          <p className="text-lg leading-relaxed">
            efent reserves the right to modify these Terms at any time. Any changes will be posted on our website, and your continued use of the website constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">10. Governing Law</h2>
          <p className="text-lg leading-relaxed">
            These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">11. Contact Us</h2>
          <p className="text-lg leading-relaxed">
            For any questions or concerns regarding these Terms, please contact us at:
          </p>
          <ul className="list-none pl-0 text-lg">
            <li>Email: <a href="mailto:info.efent@gmail.com" className="text-orange-700 hover:underline">info.efent@gmail.com</a></li>
            <li>Phone: <a href="tel:+91 7875717213" className="text-orange-700 hover:underline">+91 7875717213</a></li>
            <li>WhatsApp: <a href="https://wa.me/917875717213" className="text-orange-700 hover:underline" target="_blank" rel="noopener noreferrer">Chat with us</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">12. Acknowledgement</h2>
          <p className="text-lg leading-relaxed">
            By using our website and services, you acknowledge that you have read, understood, and agree to these Terms of Service.
          </p>
        </section>
      </motion.div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
