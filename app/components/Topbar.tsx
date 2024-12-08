import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaCheck, FaExclamationCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="w-full bg-[#272343] py-2 sm:py-3">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 gap-y-2">
        {/* Left Section */}
        <p className="text-white flex items-center space-x-2 font-normal text-[10px] sm:text-[12px]">
          <FaCheck className="text-white" />
          <span>Free shipping on all orders over $50</span>
        </p>

        {/* Right Section */}
        <ul className="flex items-center flex-wrap gap-4 text-white font-normal text-[10px] sm:text-[12px]">
          <li className="flex items-center space-x-1 cursor-pointer">
            <span>Eng</span>
            <ChevronDown className="w-4 h-4" />
          </li>
          <li>
            <Link href="/faq" className="cursor-pointer hover:underline">
              FAQs
            </Link>
          </li>
          <li className="flex items-center space-x-1 cursor-pointer">
            <FaExclamationCircle className="text-white" />
            <span>Need Help</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
