import Test from "./Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Projects">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Skills">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Contact">
        <Contact />
      </section>

      {/* {<div style={{ backgroundColor: "blue", padding: "25px" }}>
        <Test />
      </div>} */}
    </div>
  );
};

export default App;
