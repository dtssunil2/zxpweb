import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="  hidden md:flex  justify-between p-4 items-center bg-indigo-950 w-full flex-wrap mx-auto h-4/5 ">
      <div className="topbar-left ml-28 h-full  ">
        <ul className="flex gap-5 from-neutral-100 hover:cursor-pointer">
          <li className="text-white">FAQs</li>
          <li className="text-white">Support</li>
          <li className="text-white">Privacy</li>
          <li className="text-white"> Policy</li>
          <li className="text-white">Career</li>
        </ul>
      </div>

      <div className="topbar-right mr-28 hover:cursor-pointer  ">
        <ul className=" flex gap-5">
          <li className="flex gap-2 items-center ">
            <IoIosMail className="text-xl text-white  " />
            <h1 className="text-white">info@example.com</h1>
          </li>
          <li className="flex gap-2 items-center">
            <IoCallOutline className="text-xl text-white" />
            <h1 className="text-white">+012 345 6789</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
