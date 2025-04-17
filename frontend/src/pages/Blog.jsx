import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaCommentAlt, FaShareAlt } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
const blogPosts = [
  {
    title: "How to Plan a Successful Corporate Event",
    date: "January 15, 2025",
    content: "Corporate events require careful planning to align with business objectives and leave a lasting impact. Here's how you can plan a successful corporate event...",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB5ZlI1Gzh4qTdLjnBp00KGg46Ri1tKzm1jw&s",
    readMoreLink: "/blog",
  },
  {
    title: "The Role of Brand Activation in Event Success",
    date: "January 10, 2025",
    content: "Brand activations are a key component of successful events, creating an immersive experience that strengthens brand recognition...",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cWVCVvJ5pltSYVos01M35MsO7Shjd70qhQ&s",
    readMoreLink: "/blog",
  },
  {
    title: "5 Tips for Managing Large-Scale Events Smoothly",
    date: "January 5, 2025",
    content: "Managing large events involves coordinating multiple moving parts. Here are 5 essential tips to ensure everything goes smoothly...",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKeefFs6EVuqzIyIQKTH9DlEM5LE1xjfMIw&s",
    readMoreLink: "/blog",
  },
  
];

const BlogPage = () => {
  return (
    <>
    <Header />
    <section className="py-32 px-6 lg:px-12 bg-black">
      <div className="container mx-auto text-center mb-12">
        <motion.h1
          className="text-4xl font-extrabold text-orange-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Event Management Insights and Tips
        </motion.h1>
        <p className="text-lg text-white">
          Stay updated with the latest event management trends, tips, and strategies from the experts at Efnet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-[#FFF3CD] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <FaCalendarAlt className="mr-2" />
              <span>{post.date}</span>
              <div className="mx-2">|</div>
              <FaCommentAlt className="mr-2" />
              <span>12 Comments</span>
            </div>
            <p className="text-gray-600 mb-4">{post.content.slice(0, 150)}...</p>
            <a
              href={post.readMoreLink}
              className="inline-flex items-center text-purple-500 hover:text-purple-700 font-semibold"
            >
              <span>Read More</span>
              <FaShareAlt className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
};

export default BlogPage;
