import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  const toppingsVariants = {
    init: { x: -1000 },
    anime: {
      x: 0,
      // transition: {
      //   type: "spring",
      //   stiffness: 300,
      //   duration: 0.1,
      //   delay: 0.1,
      // },
    },
  };
  const nextVariants = {
    whileHover: {
      scale: 1.5,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
    },
    initial: { x: -1000 },
    animate: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div
      className="toppings container"
      variants={toppingsVariants}
      initial="init"
      animate="anime"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              whileHover={{
                scale: 1.5,
                color: "#f8e112",
                originX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={nextVariants}
          initial="initial"
          whileHover="whileHover"
          animate="animate"
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
