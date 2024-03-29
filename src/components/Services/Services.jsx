import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref);

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}></motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <motion.div className="title">
          <img src="/mern.png" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Technologies</motion.b> /
            Stack
          </h1>
        </motion.div>
        <motion.div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>I Use</motion.b>
          </h1>
        </motion.div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Databases </h2>
          <div className="stack">MongoDB</div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Backend</h2>

          <div className="stack">Express, NodeJS</div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Frontend</h2>

          <div className="stack">React, Vanilla JS</div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Styling</h2>

          <div className="stack">CSS , SCSS , Tailwind</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
