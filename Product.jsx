import React from "react";
import Btn from "./Btn";

function Product({ val, moveAnime, count }) {
  return (
    <div className="w-full h-[20rem] py-10 ">
      <div
        onMouseEnter={() => moveAnime(count)}
        className="max-w-screen-xl mx-auto mt-6 flex items-center justify-between hover:bg-[#7442FF] p-5 rounded-2xl  "
      >
        <h1 className="text-5xl capitalize font-medium">{val.title}</h1>
        <div className="w-1/3 pl-8">
          <p className="mb-5 w-[70%] font-light">{val.description}</p>
          <div className="flex gap-5 items-center">
            {val.live && <Btn title="Live Website" />}
            {val.case && <Btn title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;