import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card({ width, start, para, hover, head }) {
  return (
    <div className={`${width} ${hover} min-h-96 bg-zinc-800 p-7 rounded-2xl flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>{head.topheading}</h3>
          <FaArrowRightLong />
        </div>
        <h1 className="text-3xl font-medium mt-7">{head.bottomheading}</h1>
      </div>
      <div className="w-full">
        {start === true && (
          <>
            <h1 className="text-8xl font-medium tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="px-6 mt-6 py-2 border-2 rounded-full border-white ">
              Contact us
            </button>
          </>
        )}
        {para === true && (
          <p className="text-sm text-zinc-500">
            Explore what drives our team.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;