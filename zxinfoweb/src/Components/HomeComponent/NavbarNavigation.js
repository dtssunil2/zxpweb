import React from "react";
import {NavLink} from "react-router-dom";
import Dropdown from "../HeaderComponent/Dropdown";
const NavbarNavigation = () => {
  return (
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex flex-col font-medium  items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink
            to="/"
            className={({isActive})=>`block py-2 px-3 text-white ${isActive ? "sm:text-blue-500" :"sm:text-white"}  rounded md:bg-transparent md: md:p-0 md:  md:dark:bg-transparent  md:hover:text-blue-700 md:dark:hover:text-blue-500`}
            aria-current="page"
          >
            Home
          </NavLink>
        </li>
        {/* <li>
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            Pages{" "}
          </button>

          <div
            id="dropdownNavbar"
            className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-400"
              aria-labelledby="dropdownLargeButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
            </ul>
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </li> */}
        <li>
        <Dropdown/>
        </li>
        <li>
          <NavLink
           to="/services"
            // className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            className={({isActive})=>`block py-2 px-3 text-white ${isActive ? "sm:text-blue-500" :"sm:text-white"}  rounded md:bg-transparent md: md:p-0 md:  md:dark:bg-transparent  md:hover:text-blue-700 md:dark:hover:text-blue-500`}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            // className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            className={({isActive})=>`block py-2 px-3 text-white ${isActive ? "sm:text-blue-500" :"sm:text-white"}  rounded md:bg-transparent md: md:p-0 md:  md:dark:bg-transparent  md:hover:text-blue-700 md:dark:hover:text-blue-500`}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            // className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            className={({isActive})=>`block py-2 px-3 text-white ${isActive ? "sm:text-blue-500" :"sm:text-white"}  rounded md:bg-transparent md: md:p-0 md:  md:dark:bg-transparent  md:hover:text-blue-700 md:dark:hover:text-blue-500`}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavbarNavigation;
