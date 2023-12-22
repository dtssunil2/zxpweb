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
      <Team/>
    
    </>
  );
};

export default Home;
