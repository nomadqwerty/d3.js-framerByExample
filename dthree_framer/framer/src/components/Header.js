import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <motion.div
        className="logo"
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.1, delay: 0.1 }}
      >
        <svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          />
        </svg>
      </motion.div>
      <motion.div
        className="title"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{
          duration: 0.25,
          delay: 0.25,
          type: "spring",
          stiffness: 200,
        }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
