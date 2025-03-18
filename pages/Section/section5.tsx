import React from "react";
import favitempic from "../images/sliderimg1.png";
import categoryimg1 from "../images/categoryimg1.png";
import categoryimg2 from "../images/categoryimg2.png";
import categoryimg3 from "../images/categoryimg3.png";
import Image from "next/image";
export default function Section5() {
  return (
    <div className="mt-20">
      <h1 className="font-bold text-2xl text-center">Explore Our Categories</h1>

      <div className="flex justify-evenly mt-15 ">
        <div className="bg-amber-50 w-100 h-120 p-10 rounded-lg shadow-lg shadow-amber-900">
          <div className="text-center">
            <div className="flex justify-center">
              <Image
                alt="My Image"
                src={categoryimg1}
                className=" rounded-2xl"
              />
            </div>

            <h1 className="text-2xl mt-10 font-bold">Biscuits & Cookies</h1>
            <p>
              delicious and crunchy biscuits and cookies for every occasion.
            </p>
            <button className="bg-[#D6A21A] p-2 rounded-md text-amber-50 mt-5">
              Explore Biscuits & Cookies
            </button>
          </div>
        </div>
        <div className="bg-amber-50 w-100 h-120 p-10 rounded-lg shadow-lg shadow-amber-900">
          <div className="text-center">
            <div className="flex justify-center">
              <Image
                alt="My Image"
                src={categoryimg2}
                className=" rounded-2xl"
              />
            </div>
            <h1 className="text-2xl mt-10 font-bold">Brownies & Cupcake</h1>
            <p>
              delicious and crunchy biscuits and cookies for every occasion.
            </p>
            <button className="bg-[#D6A21A] p-2 rounded-md text-amber-50 mt-5">
              Explore Biscuits & Cookies
            </button>
          </div>
        </div>
        <div className="bg-amber-50 w-100 h-120  p-10 rounded-lg shadow-lg shadow-amber-900">
          <div className="text-center">
            <div className="flex justify-center">
              <Image
                alt="My Image"
                src={categoryimg3}
                className=" rounded-2xl"
              />
            </div>
            <h1 className="text-2xl mt-10 font-bold">Cakes</h1>
            <p>
              delicious and crunchy biscuits and cookies for every occasion.
            </p>
            <button className="bg-[#D6A21A] p-2 rounded-md text-amber-50 mt-5">
              Explore Biscuits & Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
