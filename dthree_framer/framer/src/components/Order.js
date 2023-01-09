import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const orderVariants = {
  init: { x: -1000 },
  anime: {
    x: 0,
    transition: {
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};
const childvariants = {
  init: {
    opacity: 0,
  },
  anime: {
    opacity: 1,
  },
};
const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={orderVariants}
      initial="init"
      animate="anime"
      exit={{
        display: "none",
      }}
    >
      <motion.h2
        initial={{
          opacity: 1,
        }}
        animate={{ opacity: 0, transition: { delay: 2, duration: 1 } }}
      >
        Thank you for your order :)
      </motion.h2>
      <motion.p variants={childvariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping, i) => {
        console.log(i);
        return (
          <motion.div
            key={topping}
            variants={orderVariants}
            transition={{
              duration: `0.${i}`,
              delay: `0.${i}`,
              when: "",
            }}
          >
            {topping}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Order;
