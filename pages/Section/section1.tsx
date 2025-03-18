import React from "react";
import Image from "next/image";
import logo from "../images/weblogo1.png.png";
import { FaHome } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { AiFillInfoCircle, AiFillPhone, AiFillStar } from "react-icons/ai";

export default function Section1() {
  return (
    <div>
      <div className="bg-[#52353A] h-15 flex justify-center items-center none-">
        <span className="text-white font-bold text-xl">Welcome to our Bakery</span>
      </div>
      <nav className=" dark:bg-gray-900 bg-white w-full z-20  border-b border-gray-200 dark:border-gray-600 h-30  shadow-sm shadow-white ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="flex gap-0 items-center">
            <Image src={logo} alt="My Image" width={100} />
            <div className="border-b  border-amber-700">
              <p className="font-serif text-lg text-amber-900">Fresh Baked</p>
            </div>
          </span>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              sign in
            </button> */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="flex gap-2">
                <span>
                  <FaHome size={20} color="brown" />
                </span>
                <a
                  href="#"
                  className="block py-2 px-3 font-bold text-amber-700 bg-blue-700 rounded-sm md:bg-transparent  md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="flex gap-2">
                <span>
                  <AiFillInfoCircle size={20} color="brown" />
                </span>
                <a
                  href="#"
                  className="block py-2 px-3  font-bold text-amber-700  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About us
                </a>
              </li>
              <li className="flex gap-2">
                <span>
                  <HiMenu size={20} color="brown" />
                </span>
                <a
                  href="#"
                  className="block py-2 px-3  font-bold text-amber-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Menu
                </a>
              </li>
              <li className="flex gap-2">
                <span>
                  <AiFillPhone size={20} color="brown" />
                </span>
                <a
                  href="#"
                  className="block py-2 px-3  font-bold text-amber-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
              <li className="flex gap-2">
                <AiFillStar size={20} color="brown" />

                <a
                  href="#"
                  className="block py-2 px-3  font-bold text-amber-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
