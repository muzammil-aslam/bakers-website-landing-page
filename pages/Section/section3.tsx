import React from "react";
import Image from "next/image";
import aboutpic from "@/pages/images/aboutpic.png";

export default function Section3() {
  return (
    <div>
      <div className="flex justify-center gap-15 mt-20">
        <div>
          <Image
            alt="My Image"
            src={aboutpic}
            className="rounded-2xl  w-100"
          />
        </div>
        <div>
          <h1 className="font-extrabold text-4xl">About Our Bakery</h1>
          <p className="mt-6">
            At fresh baked, we believe in the magic of homemade baking from the
            first whiff of <br /> freshly baked bread to the sweet delight of a
            warm pasty, evry bite is a moment of
            <br /> pure hapiness
          </p>
          <p className="mt-5">
            Our bakery is more than just a place to buy treats-it's a space
            filled with warmth <br /> tradition,and passion, every day. we craft
            our baked goods using high-quality.locally
            <br /> sourced ingredient ensuring thaht each item is made with love
            and care
          </p>
          <button className="bg-[#D6A21A] text-amber-50 font-bold mt-7 p-2 rounded-lg cursor-pointer w-35 font-serif">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
