import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState, useEffect } from "react";

function Work() {
  const [images, setImages] = useState([
    {
      top: "50%",
      left: "50%",
      URL: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      isActive: false,
    },
    {
      top: "56%",
      left: "46%",
      URL: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      isActive: false,
    },
    {
      top: "40%",
      left: "54%",
      URL: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      isActive: false,
    },
    {
      top: "60%",
      left: "50%",
      URL: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      isActive: false,
    },
    {
      top: "50%",
      left: "56%",
      URL: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      isActive: false,
    },
    {
      top: "44%",
      left: "48%",
      URL: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 5:
        imagesShow([0, 1, 2, 4]);
        break;
      case 6:
        imagesShow([0, 1, 2, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full font-sans">
      <div className="relative max-w-screen-xl mx-auto">
        <h1 className="text-[37vw] select-none font-medium text-center tracking-wide leading-none ">
          work
        </h1>
        <h4 className="text-center text-zinc-500 ">
          Web Design, Webflow Development, Creative Development
        </h4>
        <div className="absolute top-0 w-full h-full ">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-80 rounded-2xl -translate-x-1/2 -translate-y-1/3 "
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.URL}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
