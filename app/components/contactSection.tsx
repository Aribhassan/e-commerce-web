import React from "react";
import { Poppins } from "next/font/google";
import { BsTrophy } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

const ContactSection = () => {
  return (
    <div className="w-full max-w-screen-xl h-auto bg-[#F4F4F4] flex flex-wrap items-center justify-between px-8 py-6 sm:px-12 sm:py-8">
      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mb-6 sm:mb-0">
        <BsTrophy className="w-[52.77px] h-[60px] text-black" />
        <div className="text-center sm:text-left">
          <h2 className={`${poppins.className} font-semibold text-[20px] sm:text-[25px]`}>
            High Quality
          </h2>
          <p className={`${poppins.className} font-medium text-[16px] sm:text-[20px] text-[#898989]`}>
            crafted from top materials
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mb-6 sm:mb-0">
        <GoVerified className="w-[60px] h-[60px] text-black" />
        <div className="text-center sm:text-left">
          <h2 className={`${poppins.className} font-semibold text-[20px] sm:text-[25px]`}>
            Warranty Protection
          </h2>
          <p className={`${poppins.className} font-medium text-[16px] sm:text-[20px] text-[#898989]`}>
            Over 2 years
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4">
        <MdSupportAgent className="w-[52.77px] h-[60px] text-black" />
        <div className="text-center sm:text-left">
          <h2 className={`${poppins.className} font-semibold text-[20px] sm:text-[25px]`}>
            24 / 7 Support
          </h2>
          <p className={`${poppins.className} font-medium text-[16px] sm:text-[20px] text-[#898989]`}>
            Dedicated support
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
