import React from "react";
import Carousel from "./Carousel";
import { slides } from "./Data";
import About from "./About";
import Services from "./Services";
import Features from "./Features";
import Quotes from "./Quotes";
import Team from "./Team";
import Testimonial from "./Testimonials";
import Blog from "./Blog";

const Home = () => {
  return (
    <>
      <Carousel slides={slides} />
      <About />
      <Services />
      <Features />
      <Quotes />
      <Team />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;
