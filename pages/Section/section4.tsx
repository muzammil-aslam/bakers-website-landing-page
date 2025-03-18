import React from "react";
import chocolatemni from "../images/img1.png";
import nutellacake from "../images/img2.png";
import chillichips from "../images/img3.png";
import chocolatecake from "../images/img4.png";
import Image from "next/image";

export default function Section4() {
  return (
    <div className="bg-[#4A2D31] mt-30 p-20">
      <div className="">
        <h1 className="text-amber-400 text-3xl font-bold text-center">
          Customer Favorites
        </h1>
        <p className="text-amber-50 text-center m-5">
          Expolre our most loved products by our customers
        </p>
      </div>
      <div className="flex  gap-10  mt-15">
        <div className="bg-[#52353A]  p-10 rounded-lg shadow-lg shadow-amber-300">
          <div>
            <Image
              alt="My Image"
              src={chocolatemni}
              className=" rounded-2xl w-full h-50"
            />
            <p className="text-amber-400 mt-10 font-bold text-lg text-center">
              Mini Chocolate Chip Muffins
            </p>
          </div>
        </div>
        <div className="bg-[#52353A]  p-10 rounded-lg shadow-lg shadow-amber-300">
          <div>
            <Image
              alt="My Image"
              src={nutellacake}
              className=" rounded-2xl w-full h-50"
            />
            <p className="text-amber-400 mt-10 font-bold text-lg text-center">
              Nutella Sundae
            </p>
          </div>
        </div>
        <div className="bg-[#52353A]  p-10 rounded-lg shadow-lg shadow-amber-300">
          <div>
            <Image
              alt="My Image"
              src={chillichips}
              className=" rounded-2xl w-full h-50"
            />
            <p className="text-amber-400 mt-10 font-bold text-lg text-center">
              Chilli Chips
            </p>
          </div>
        </div>
        <div className="bg-[#52353A] p-10 rounded-lg shadow-lg shadow-amber-300">
          <div>
            <Image
              alt="My Image"
              src={chocolatecake}
              className=" rounded-2xl w-full h-50"
            />
            <p className="text-amber-400 mt-10 font-bold text-lg text-center">
              Chocolate Chip cookies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
