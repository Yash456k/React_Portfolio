import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Quotes by Marcus Aurelius",
    img: "/marcus.png",
    desc: "A fullstack website , allowing you to signup/login , and bookmark some handpicked quotes by Marcus Aurelius. Uses Express, nodeJs and MongoDB(The website might take time to load on first try ! This is because it is hosted on render's free tier)",
    url: "https://marcus-aurelius-3n3y.onrender.com/",
  },
  {
    id: 2,
    title: "Portfolio Website (This website)",
    img: "/portfolio.png",
    desc: "The website you are currently viewing ! Built using React, framer-motion and SCSS. ",
    url: "/",
  },
  {
    id: 3,
    title: "(In progress) A fullstack E-commerce website",
    img: "/inprogress.jpg",
    desc: "Currently working on a fullstack E-commerce website using React, Redux, Express, NodeJs and MongoDB. The website will allow users to signup/login, add items to cart, checkout and make payments. The website will also have an admin panel, allowing the admin to add new products, edit existing products and delete products.",
    url: "null",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    viewportY: 0.2,
    viewportHeight: 0.8,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a
              href={item.url}
              target="_blank"
              style={{ display: item.url != "null" ? "" : "none" }}
            >
              See Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
