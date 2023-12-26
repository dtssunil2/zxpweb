import React from "react";
import Design from "./Design";

const About = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-1        md:w-full     lg:pt-[20px] lg:pb-[20px] bg-white dark:bg-dark ">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <Design />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto md:h-[720px] md:w-[550px] flex flex-col md:justify-self-auto">
              <div
                className="text-xl mt-20 font-bold ml-8  w-full justify-center  text-indigo-700 font-sans flex flex-col md:mr-0 md:mt-0 md:mt-[150px]  md:mr-80 md:ml-3"
                style={{ height: "100px" }}
              >
                Why Choose Us
              </div>
              <div className="flex flex-col text-3xl ml-8 font-bold md:ml-3">
                Make your customers{" "}
                <span className="align-top">happy by giving services.</span>
              </div>
              <div className="flex flex-wrap mt-6 ml-8 md:ml-3">
                <h4 className="text-base">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </h4>
                <h4 className="text-base mt-4">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
