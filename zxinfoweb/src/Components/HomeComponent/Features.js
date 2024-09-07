import React from "react";
import { IoMdTrophy } from "react-icons/io";
import { LuBadgePercent } from "react-icons/lu";
import { GiDiamondTrophy } from "react-icons/gi";
import { IoIosHappy } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";


const FeatureCard = ({ Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
    <div className="bg-blue-500 rounded-full flex items-center justify-center mb-4 w-16 h-16">
      <Icon className="text-white text-3xl" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    { Icon: IoMdTrophy, title: "Best In Industry", description: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea" },
    { Icon: LuBadgePercent, title: "99% Success Rate", description: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea" },
    { Icon: GiDiamondTrophy, title: "Award Winning", description: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea" },
    { Icon: IoIosHappy, title: "100% Happy Client", description: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea" },
    { Icon: FaUserTie, title: "Professional Advisors", description: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea" },
    { Icon: RiCustomerService2Line, title: "24/7 Customer Support", description: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea" },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
