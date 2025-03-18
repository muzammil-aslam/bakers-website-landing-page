import React from "react";
import avatar from "../images/avatarpic.png";
import Image from "next/image";
export default function section6() {
  return (
    <div className="bg-[#4A2D31]  p-10  mt-20">
      <div className="text-center ">
        <h1 className="font-bold text-2xl text-amber-400">
          What Our Customers Say
        </h1>
        <p className="mt-5 text-amber-50">
          See what our customers have to say about our baked items
        </p>
      </div>

      <div className="flex justify-center mt-7 ">
        <div className="bg-[#52353A] rounded-xl shadow-lg shadow-amber-300 p-4">
          <p className="   text-amber-50 p-10  text-center">
            " This bakery is a hidden gem! their sourdough bread is my weekly
            staple--it's crusty on the outide.
            <br />
            soft on the inside and just deliciouse. I also tried seasonal fruit
            tarts,and they were incredible.
            <br />
            fresh, flavorful, and beatifully made. I'm so glad i found this
            place!"
          </p>
          <div className="flex justify-center gap-5 items-center">
            <Image
              alt="My Image"
              src={avatar}
              width={50}
              className="rounded-3xl"
            />
            <div>
              <p className="text-amber-500 font-bold">Emily J.</p>
              <p className="text-amber-50">Housewife</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
