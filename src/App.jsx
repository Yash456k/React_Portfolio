import Test from "./Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">parallax</section>
      <section>Skills</section>
      <section id="Projects">parallax</section>
      <section>Portfolio</section>
      <section id="Contact">Contact</section>

      {/* {<div style={{ backgroundColor: "blue", padding: "25px" }}>
        <Test />
      </div>} */}
    </div>
  );
};

export default App;
