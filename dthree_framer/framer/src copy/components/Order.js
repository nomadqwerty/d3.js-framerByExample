import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 2000);
  return (
    <motion.div
      className="container order"
      variants={orderVariants}
      initial="init"
      animate="anime"
    >
      <AnimatePresence>
        {showTitle && (
          <motion.h2
            exit={{ opacity: 0, transition: { delay: 2, duration: 1 } }}
          >
            Thank you for your order :)
          </motion.h2>
        )}
      </AnimatePresence>
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
