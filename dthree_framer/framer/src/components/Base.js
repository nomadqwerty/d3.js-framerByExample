import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  const baseVariants = {
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

  const itemVariants = {
    whileHover: {
      scale: 1.5,
      color: "#f8e112",
      originX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
      },
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
      className="base container"
      variants={baseVariants}
      initial="init"
      animate="anime"
      exit={{
        x: -1000,
      }}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              variants={itemVariants}
              whileHover="whileHover"
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next">
          <Link to="/toppings">
            <motion.button
              variants={nextVariants}
              whileHover="whileHover"
              initial="initial"
              animate="animate"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
