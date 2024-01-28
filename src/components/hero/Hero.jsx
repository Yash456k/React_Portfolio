import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton: {
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>YASH KHAMBHATTA</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Web Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a href="#Projects" variants={textVariants}>
              See the latest works
            </motion.a>
            <motion.a href="#Contact" variants={textVariants}>
              Contact me
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer , web designer , freelancer
      </motion.div>
      <div className="imageContainer">
        <img src="/jojo-removebg-preview.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
