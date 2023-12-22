import React from "react";
import ServiceCards from "./ServiceCards";

const Services = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-between ">
        <div>
          <h1 className="text-center text-4xl font-bold  ">Our Services</h1>
        </div>

        <ServiceCards />
      </div>
    </>
  );
};

export default Services;
