import { motion } from "framer-motion";
import React from "react";

function Maqree({ imagesurl, direction }) {
  return (
    <div className="w-full flex overflow-hidden gap-16">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="flex py-10 gap-16 overflow-hidden flex-shrink-0"
      >
        {imagesurl.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index + 1}`} className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="flex py-5 gap-16 overflow-hidden flex-shrink-0"
      >
        {imagesurl.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index + 1}`} className="" />
        ))}
      </motion.div>
    </div>
  );
}

export default Maqree;
