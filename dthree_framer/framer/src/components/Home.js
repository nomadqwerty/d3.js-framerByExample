import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ rotateZ: 360, marginTop: 200, opacity: 1 }}
      exit={{
        display: "none",
      }}
      className="home container"
    >
      <motion.h2 animate={{ fontSize: 50, color: "aliceblue", y: -100 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          animate={{
            x: [0, -20, 0, -20, 0, -20, 0],
            transition: { duration: 0.4, delay: 1 },
          }}
          whileHover={{
            scale: 1.3,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
            transition: {
              yoyo: Infinity,
            },
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
