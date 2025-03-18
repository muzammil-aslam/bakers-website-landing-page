import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Section8() {
  return (
    <div className="flex justify-around mt-30 bg-[#4A2D31] p-15">
      <div>
        <h1 className="text-[#D6A21A] text-2xl font-bold">Fresh Baked</h1>
        <p className="text-white mt-5">
          freshlly baked good made with <br /> love and the firest ingredient
          <br /> taste the sweetness in every bitel
          <br /> we are dedicated to bringing you
          <br /> the best baked treats cralted with
          <br /> care and tradition.
        </p>
      </div>
      <div>
        <h1 className="text-[#D6A21A] text-2xl font-bold">Quick Links</h1>
        <p className="text-white mt-5">Home</p>
        <p className="text-white mt-5">About </p>
        <p className="text-white mt-5">Menu</p>
        <p className="text-white mt-5">Contact</p>
      </div>
      <div>
        <h1 className="text-[#D6A21A] text-2xl font-bold">Contact Us</h1>
        <p className="text-white mt-5">123 bakery street,xyz,12345</p>
        <p className="text-white mt-5">123-456-7890</p>
        <p className="text-white mt-5">info@freshbaked.com</p>
      </div>
      <div>
        <h1 className="text-[#D6A21A] text-2xl font-bold">Follow Us</h1>
        <div>
          <div className="flex gap-5 mt-4">
            <FaFacebookF size={30} color="white" />
            <FaInstagram size={30} color="white" />
            <FaTwitter size={30} color="white" />
          </div>
          <p className=" text-white mt-4">
            Stay connected with us on social <br /> media for the letest update
            <br /> promotions, and deliouse tests
          </p>
        </div>
      </div>
    </div>
  );
}
