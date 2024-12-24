import React from "react";
import { Poppins } from "next/font/google";
import { BsTrophy } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

const ContactSection = () => {
  return (
    <div className="w-full max-w-screen-xl h-auto bg-[#F4F4F4] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8 gap-8">
      {/* High Quality */}
      <div className="flex flex-col md:flex-row items-center md:space-x-4 text-center md:text-left">
        <BsTrophy className="w-14 h-14 text-black mb-4 md:mb-0" />
        <div>
          <h2 className={`${poppins.className} font-semibold text-lg md:text-xl`}>
            High Quality
          </h2>
          <p className={`${poppins.className} font-medium text-sm md:text-base text-[#898989]`}>
            crafted from top materials
          </p>
        </div>
      </div>

      {/* Warranty Protection */}
      <div className="flex flex-col md:flex-row items-center md:space-x-4 text-center md:text-left">
        <GoVerified className="w-14 h-14 text-black mb-4 md:mb-0" />
        <div>
          <h2 className={`${poppins.className} font-semibold text-lg md:text-xl`}>
            Warranty Protection
          </h2>
          <p className={`${poppins.className} font-medium text-sm md:text-base text-[#898989]`}>
            Over 2 years
          </p>
        </div>
      </div>

      {/* 24/7 Support */}
      <div className="flex flex-col md:flex-row items-center md:space-x-4 text-center md:text-left">
        <MdSupportAgent className="w-14 h-14 text-black mb-4 md:mb-0" />
        <div>
          <h2 className={`${poppins.className} font-semibold text-lg md:text-xl`}>
            24 / 7 Support
          </h2>
          <p className={`${poppins.className} font-medium text-sm md:text-base text-[#898989]`}>
            Dedicated support
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
