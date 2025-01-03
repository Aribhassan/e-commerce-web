import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Logocart = () => {
  return (
    <div className="w-full bg-[#F0F2F3] pt-[20px] pb-[20px] h-[84px]">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <Image
            src="/navbar-logo.png"
            alt="Comforty Logo"
            width={50}
            height={50}
            className="main-logo"
          />
          <h2 className="text-[26px] font-medium">Comforty</h2>
        </div>

        {/* Cart Button */}
        <div className="flex items-center space-x-4 ">
          <Link href="/cart">
            <button className="rounded-xl flex items-center space-x-2 bg-white py-2 px-4 hover:shadow-md">
              <FaShoppingCart className="text-xl" />
              <span className="hidden sm:inline">Cart</span>
              <div className="flex items-center justify-center w-6 h-6 bg-[#007580] text-white text-sm rounded-full">
                2
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logocart;
