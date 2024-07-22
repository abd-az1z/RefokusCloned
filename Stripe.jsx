import React from "react";

function Stripe({ val }) {
  return (
    <div className="w-1/5 px-8 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-700 flex justify-between items-center">
      <div className="w-fit h-6 ">
        <img className="w-full h-full object-cover" src={val.URL} alt="" />
      </div>
      <span className="font-semibold ">{val.number}</span>
    </div>
  );
}

export default Stripe;
