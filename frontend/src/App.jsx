import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Service from "./components/Service";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <>
      <Navbar />

      <section id="home">
        <Banner />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="service">
        <Service />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="testimonial">
        <Testimonial />
      </section>
    </>
  );
};

export default App;
