import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "../HeaderComponent/Dropdown";
const NavbarNavigation = () => {
  return (
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex flex-col font-medium  items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 px-3 text-white ${
                isActive ? "sm:text-blue-500" : "sm:text-white"
              }  rounded md:bg-transparent md: md:p-0 md:  md:dark:bg-transparent  md:hover:text-blue-700 md:dark:hover:text-blue-500`
            }
            aria-current="page"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `block py-2 px-3 text-white ${
                isActive ? "sm:text-blue-500" : "sm:text-white"
              }  rounded md:bg-transparent md: md:p-0 md:  md:dark:bg-transparent  md:hover:text-blue-700 md:dark:hover:text-blue-500`
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `block py-2 px-3 text-white ${
                isActive ? "sm:text-blue-500" : "sm:text-white"
              }  rounded md:bg-transparent md: md:p-0 md:  md:dark:bg-transparent  md:hover:text-blue-700 md:dark:hover:text-blue-500`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `block py-2 px-3 text-white ${
                isActive ? "sm:text-blue-500" : "sm:text-white"
              }  rounded md:bg-transparent md: md:p-0 md:  md:dark:bg-transparent  md:hover:text-blue-700 md:dark:hover:text-blue-500`
            }
          >
            Contact
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              `block py-2 px-3 text-white ${
                isActive ? "sm:text-blue-500" : "sm:text-white"
              }  rounded md:bg-transparent md: md:p-0 md:  md:dark:bg-transparent  md:hover:text-blue-700 md:dark:hover:text-blue-500`
            }
          >
            Pricing
          </NavLink>
        </li> */}
        <li>
          <Dropdown />
        </li>
      </ul>
    </div>
  );
};

export default NavbarNavigation;
