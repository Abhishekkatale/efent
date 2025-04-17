import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 20, label: "Corporate Clients" },
  { value: 30, label: "Events" },
  { value: 40, label: "Exhibitions" },
  { value: 25, label: "Activations" },
];

const Counter = ({ endValue }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = Math.ceil(endValue / (duration / 10));

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 10);

    return () => clearInterval(counter);
  }, [endValue]);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {count}+
    </motion.span>
  );
};

const App = () => {
  return (
    <motion.div
      className="bg-black text-center py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-2xl md:text-4xl text-orange-400 font-bold mb-8">
        SUCCESSFULLY COMPLETED 100+ PROJECTS
      </h1>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-black rounded-lg shadow-lg hover:scale-105 transition-transform"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="text-3xl md:text-5xl font-bold text-orange-400">
              <Counter endValue={stat.value} />
            </p>
            <p className="text-sm md:text-lg uppercase mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default App;
