


import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-white flex flex-col py-6 px-6 md:px-12 gap-5 border-t-[1.2px] border-slate-500 poppins-medium">
      {/* Main content row */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-14 flex-wrap">
        {/* Funiro Section */}
        <div className="flex flex-col mb-6 md:mb-0">
          <h1 className="poppins-bold text-2xl md:text-3xl font-bold mb-4 md:mb-6">Funiro</h1>
          <p className="text-sm md:text-base font-normal text-slate-500 leading-relaxed">400 University Drive Suite 200 Coral</p>
          <p className="text-sm md:text-base font-normal text-slate-500 leading-relaxed">Gables</p>
          <p className="text-sm md:text-base font-normal text-slate-500 leading-relaxed">FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-6 md:gap-10">
          <h2 className="text-lg md:text-xl text-slate-500 font-normal">Links</h2>
          <ul className="text-sm md:text-base font-medium text-black flex flex-col gap-6 md:gap-10">
            <li><Link href={"/"} className="hover:text-gray-700 transition duration-300">Home</Link></li>
            <li><Link href={"/Shop"} className="hover:text-gray-700 transition duration-300">Shop</Link></li>
            <li><Link href={"/About"} className="hover:text-gray-700 transition duration-300">About</Link></li>
            <li><Link href={"/Contact"} className="hover:text-gray-700 transition duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="flex flex-col gap-6 md:gap-10">
          <h2 className="text-lg md:text-xl text-slate-500 font-normal">Help</h2>
          <ul className="text-sm md:text-base font-medium text-black flex flex-col gap-6 md:gap-10">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-6 md:gap-10">
          <h2 className="text-lg md:text-xl text-slate-500 font-normal">News Letter</h2>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-auto text-slate-500 font-normal border-b-2 border-black outline-none md:mb-0 mb-2 p-2 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              aria-label="Enter your email address"
            />
            <p className="text-lg md:text-xl text-black font-medium cursor-pointer border-b-2 border-black hover:text-blue-500 transition duration-300" role="button">
              SUBSCRIBE
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-4 border-t-[1.2px] border-slate-500 text-center md:text-left">
        <p className="text-sm md:text-base text-slate-500">2023 Funiro. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;