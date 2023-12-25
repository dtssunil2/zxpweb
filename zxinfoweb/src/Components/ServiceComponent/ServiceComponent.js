import React from "react";
import ServiceCard from "./ServiceCard";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { TbBrandTailwind } from "react-icons/tb";
import { CiGrid41 } from "react-icons/ci";
import { GiSpeedometer } from "react-icons/gi";
import { FaCubesStacked } from "react-icons/fa6";
import { RxUpdate } from "react-icons/rx";

const ServiceComponent = () => {
  return (
    <section className="pb-12 pt-20  lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block  font-semibold text-blue-500 text-2xl">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2]  sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base ">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="ml-16 flex flex-wrap md:w-[1400px]">
          <ServiceCard
            title="Refreshing Design"
            details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={<BiSolidPieChartAlt2 className="text-white text-3xl" />}
          />
          <ServiceCard
            title="Based on New Tech"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={<TbBrandTailwind className="text-white text-3xl" />}
          />
          <ServiceCard
            title="100+ Components"
            details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={<CiGrid41 className="text-white text-3xl" />}
          />
          <ServiceCard
            title="Speed Optimized"
            details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={<GiSpeedometer className="text-white text-3xl" />}
          />
          <ServiceCard
            title="Fully Customizable"
            details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={<FaCubesStacked className="text-white text-3xl" />}
          />
          <ServiceCard
            title="Regular Updates"
            details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={<RxUpdate className="text-white text-3xl" />}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
