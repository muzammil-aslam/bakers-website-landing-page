import React from "react";
import Image from "next/image";
import googlemappic from "../images/googlemapic.png"
export default function Section7() {
  return (
    <div className="flex justify-around mt-20 w-full">
      <div className="bg-white shadow-lg shadow-gray-400 w-[50%] p-10">
        <h1 className="font-bold text-3xl">Send Us a Message</h1>
        <div className="mt-5">
          <p className="font-bold text-md">Name :</p>
          <input
            placeholder="your name"
            className="border-2 border-gray-400 outline-0 p-3 rounded-lg w-full mt-2"
          />
        </div>
        <div className="mt-5">
          <p className="font-bold text-md">Email :</p>
          <input
            placeholder="your Email"
            className="border-2 border-gray-400 outline-0 p-3 rounded-lg w-full mt-2"
          />
        </div>
        <div className="mt-5">
          <p className="font-bold text-md">Message :</p>
          <textarea
            className="w-full h-50 p-4 border-2 mt-2  border-gray-400 rounded-md outline-0 "
            placeholder="Type your message..."
          ></textarea>
        </div>
        <button className="bg-[#D6A21A] text-white p-3 text-md rounded-md w-full mt-12 ">
          Send
        </button>
      </div>
      <div>
        <h1 className="font-bold text-4xl">Contact Information</h1>
        <div className="mt-10">
          <div className="flex gap-2">
            <p>Email:</p>
            <p className="text-blue-400">muzammilaslam878@gmail.com</p>
          </div>
          <div className="flex gap-2 mt-5">
            <p>Phone:</p>
            <p className="text-red-400">04345647686</p>
          </div>
        </div>
        <div className="mt-5">
            <Image   alt="My Image" src={googlemappic} className="w-[85%] rounded-md"/>
        </div>
      </div>
    </div>
  );
}
