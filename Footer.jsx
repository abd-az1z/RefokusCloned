import React from "react";

function Footer() {
  return (
    <div className="w-full font-sans pb-10 text-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between ">
        <div className="flex gap-10 text-zinc-500 ">
          <h1>Privacy Policy</h1>
          <h1>Cookie Policy</h1>
          <h1>Impressum</h1>
          <h1>Terms</h1>
          <h1>Webflow Agency</h1>
        </div>
        <div className="">
            <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
