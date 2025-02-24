import React from "react";
import { motion } from "framer-motion";

const TitleSection = ({ title, description }) => {
  return (
    <motion.div
      className="w-full text-center p-6 md:p-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl md:text-5xl font-bold "
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h1>
      <motion.div
        className="w-16 h-1 bg-blue-500 mx-auto mt-2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      ></motion.div>
      <motion.p
        className="text-sm md:text-lg text-gray-600 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default TitleSection;
