import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import { slides } from "./Data";
import About from "./About";
import Services from "./Services";
import Features from "./Features";
import Quotes from "./Quotes";
import Team from "./Team";
import Testimonial from "./Testimonials";
import Blog from "./Blog";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Carousel slides={slides} />
      <About />
      <Services />
      <Features />
      <Quotes />
      <Team />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
