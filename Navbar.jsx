import React from "react";
import Btn from "./Btn";

function Navbar() {
  return (
    <div className="max-w-screen-xl py-6 mx-auto flex gap-24 justify-between items-center">
      <div className="nleft flex items-center">
        <img
          className="w-20"
          src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="Refokus Logo"
        />
        <div className="flex gap-12 font-extralight font-sans text-sm items-center">
          {["Home", "Work", "About", "News", "Careers"].map((elem, index) => (
            <a key={index} className="flex gap-1 items-center" href="#">
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.25em #00ff19" }}
                  className="inline-block w-[4px] h-[4px] bg-[#00ff19] rounded-full"
                ></span>
              )}
              {elem}
            </a>
          ))}
        </div>
      </div>
      <Btn />
    </div>
  );
}

export default Navbar;