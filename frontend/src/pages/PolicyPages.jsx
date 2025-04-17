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

const PrivacyPolicy = () => {
    return (
        <div className="bg-black text-white">
            <Header />
            <motion.div
                className="container mx-auto px-4 py-8 lg:px-8 lg:py-12 max-w-4xl"
                initial="hidden"
                animate="visible"
                variants={pageVariants}
                transition={pageTransition}
            >
                <h1 className="text-4xl text-orange-400 font-bold mb-6 mt-12 text-center lg:text-5xl lg:mb-8 py-12">Privacy Policy</h1>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-300">1. Introduction</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Welcome to Efent ("we", "us", "our"). We are committed to protecting your privacy and ensuring a safe online experience. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, efent.com (the "Site"). Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Site.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-300">2. Information We Collect</h2>
                    <ul className="list-disc pl-6 text-lg text-gray-300 space-y-2">
                        <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and other contact details you provide when contacting us or registering for our event planning services.</li>
                        <li><strong>Payment Information:</strong> Credit card details and billing information if you make a payment for services or event bookings.</li>
                        <li><strong>Usage Data:</strong> Information about how you use our Site, including your IP address, browser type, and pages visited.</li>
                        <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience on our Site. Cookies help us remember your preferences and track user behavior to improve our services.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-300">3. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 text-lg text-gray-300 space-y-2">
                        <li><strong>Providing Event Services:</strong> To deliver the event planning and organizing services you request and manage your bookings.</li>
                        <li><strong>Communication:</strong> To respond to your inquiries, provide updates, and send promotional materials if you opt-in.</li>
                        <li><strong>Improvement:</strong> To analyze usage patterns and improve our website and event services.</li>
                        <li><strong>Payment Processing:</strong> To process payments and manage transactions securely.</li>
                        <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights and the rights of our users.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-300">4. How We Share Your Information</h2>
                    <ul className="list-disc pl-6 text-lg text-gray-300 space-y-2">
                        <li><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our Site and providing services, such as payment processors and event management tools.</li>
                        <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or to protect our rights, safety, or property.</li>
                        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-300">5. Data Security</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        We implement reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no security system is impenetrable, and we cannot guarantee the absolute security of your information.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-300">6. Your Rights</h2>
                    <ul className="list-disc pl-6 text-lg text-gray-300 space-y-2">
                        <li><strong>Access and Correct:</strong> Request access to or correction of your personal information.</li>
                        <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications or request to stop processing your information for certain purposes.</li>
                        <li><strong>Delete:</strong> Request deletion of your personal information, subject to legal and contractual restrictions.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-300">7. Third-Party Links</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-300">8. Changes to This Privacy Policy</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about our privacy practices.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-300">9. Contact Us</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <ul className="list-none pl-0 text-lg text-gray-300">
                    <li>Email: <a href="mailto:info.efent@gmail.com" className="text-orange-700 hover:underline">info.efent@gmail.com</a></li>
            <li>Phone: <a href="tel:+91 7875717213" className="text-orange-700 hover:underline">+91 7875717213</a></li>
            <li>WhatsApp: <a href="https://wa.me/917875717213" className="text-orange-700 hover:underline" target="_blank" rel="noopener noreferrer">Chat with us</a></li>
          </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-300">10. Terms of Service</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Your use of our Site is also governed by our Terms of Service, which can be found <a href="[Insert Link]" className="text-orange-700 hover:underline">here</a>.
                    </p>
                </section>
            </motion.div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
