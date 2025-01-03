import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" w-full max-w-screen-xl h-auto bg-[#F0F2F3] rounded-bl-[48] full flex flex-col sm:flex-row justify-center items-center px-6 sm:px-10 lg:px-16 py-24">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-sm md:text-base font-normal text-[#272343]">
            WELCOME TO CHAIRY
          </h1>
          <p className="w-full md:w-[557px] text-3xl md:text-5xl font-black leading-tight">
            Best Furniture Collection for your interior.
          </p>
          <button className="bg-[#029FAE] text-white py-3 px-6 rounded-[8px] flex items-center gap-4 hover:bg-blue-700 mx-auto lg:mx-0">
            <span>Shop Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12h18M15 18l6-6-6-6"
              />
            </svg>
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <Image
            src="/Product Image.png" // Path relative to the public folder
            alt="Product Image"
            width={380}
            height={380}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;