import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

const Topbar = () => {
  return (
    <div className="  hidden md:flex  justify-between p-4 items-center bg-zinc-400 w-full flex-wrap mx-auto h-4/5 ">
      <div className="topbar-left ml-28 h-full  ">
        <ul className="flex gap-5 from-neutral-100">
          <li>FAQs</li>
          <li>Support</li>
          <li>Privacy</li>
          <li>Policy</li>
          <li>Career</li>
        </ul>
      </div>

      <div className="topbar-right mr-28   ">
        <ul className=" flex gap-5">
          <li className="flex gap-2 items-center ">
            <AiTwotoneMail className="text-xl " />
            <h1>info@example.com</h1>
          </li>
          <li className="flex gap-2 items-center">
            <IoCallOutline className="text-xl" />
            <h1>+012 345 6789</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
