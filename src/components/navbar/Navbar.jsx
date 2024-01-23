import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/*sidbar*/}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <p>Yash's Portfolio </p>
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/yash-khambhatta/">
            <img src="/linkedin.png" alt="" />{" "}
          </a>
          <a href="https://twitter.com/yash654k">
            <img src="/twitter.png" alt="" />{" "}
          </a>
          <a href="https://github.com/Yash456k">
            <img src="/github.png" alt="" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
