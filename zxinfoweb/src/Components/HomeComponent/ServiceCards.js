import React from "react";
import { FaUserTie } from "react-icons/fa6";
import { TiChartPie } from "react-icons/ti";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa6";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { FaHouseChimneyCrack } from "react-icons/fa6";

const ServiceCards = () => {
  return (
    <section className="bg-blue-50">
      <div className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaUserTie, title: "Business Research" },
              { icon: TiChartPie, title: "Strategic Planning" },
              { icon: FaMagnifyingGlassChart, title: "Market Analysis" },
              { icon: FaChartArea, title: "Financial Analysis" },
              { icon: FaBalanceScaleLeft, title: "Legal Advisory" },
              { icon: FaHouseChimneyCrack, title: "Tax & Insurance" }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-24 h-1 bg-blue-500/50 transition-all duration-300 group-hover:w-1/2 group-hover:bg-blue-600"></div>
                  <service.icon className="w-16 h-16 text-gray-400 group-hover:text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;