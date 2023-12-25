import React from "react";
import { IoMdTrophy } from "react-icons/io";
import { LuBadgePercent } from "react-icons/lu";
import { GiDiamondTrophy } from "react-icons/gi";
import { IoIosHappy } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";

const Features = () => {
  return (
    <>
      <div className=" flex flex-col w-full h-[400px]    ">
        <div className="text-center text-3xl font-bold w-full ">
          Why Choose Us!!!
        </div>

        <div className="min-h-screen   p-1  grid grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3  md:py-0">
          <div className=" h-32  flex flex-col sm:h-48 md:mt-28 ">
            <div className="bg-blue-500 rounded-full flex items-center mr-96 justify-center mb-3 w-16 h-16 mx-auto">
              <IoMdTrophy className="text-white text-3xl" />
            </div>

            <h3 className="text-xl font-bold ml-5 mb-2">Best In Industry</h3>
            <p className="mb-0 ml-5">
              Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
              diam et diam dolor ea
            </p>
          </div>

          <div className=" flex flex-col h-32 sm:h-48 md:mt-28">
            <div className="bg-blue-500 rounded-full flex items-center mr-96 justify-center mb-3 w-16 h-16 mx-auto">
              <LuBadgePercent className="text-white text-3xl" />
            </div>

            <h3 className="text-xl font-bold ml-5 mb-2">99% Success Rate</h3>
            <p className="mb-0 ml-5">
              Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
              diam et diam dolor ea
            </p>
          </div>

          <div className="  flex flex-col  h-32 sm:h-48 md:mt-28">
            <div className="bg-blue-500 rounded-full flex items-center mr-96 justify-center mb-3 w-16 h-16 mx-auto">
              <GiDiamondTrophy className="text-white text-3xl" />
            </div>

            <h3 className="text-xl font-bold ml-5 mb-2">Award Winning</h3>
            <p className="mb-0 ml-5">
              Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
              diam et diam dolor ea
            </p>
          </div>

          <div className="  flex flex-col h-32 sm:h-48 ">
            <div className="bg-blue-500 rounded-full flex items-center mr-96 justify-center mb-3 w-16 h-16 mx-auto">
              <IoIosHappy className="text-white text-3xl" />
            </div>

            <h3 className="text-xl font-bold ml-5 mb-2">100% Happy Client</h3>
            <p className="mb-0 ml-5">
              Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
              diam et diam dolor ea
            </p>
          </div>

          <div className=" h-32  flex flex-col sm:h-48 mt-2 md:mt-0">
            <div className="bg-blue-500 rounded-full flex items-center mr-96 justify-center mb-3 w-16 h-16 mx-auto">
              <FaUserTie className="text-white text-3xl" />
            </div>

            <h3 className="text-xl font-bold ml-5 mb-2">
              Professional Advisors
            </h3>
            <p className="mb-0 ml-5">
              Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
              diam et diam dolor ea
            </p>
          </div>

          <div className=" flex flex-col   h-32 sm:h-48 ">
            <div className="bg-blue-500 rounded-full flex items-center mr-96 justify-center mb-3 w-16 h-16 mx-auto">
              <RiCustomerService2Line className="text-white text-3xl" />
            </div>

            <h3 className="text-xl font-bold ml-5 mb-2">
              24/7 Customer Support
            </h3>
            <p className="mb-0 ml-5">
              Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
              diam et diam dolor ea
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
