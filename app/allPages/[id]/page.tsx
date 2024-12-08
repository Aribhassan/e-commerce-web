import React from "react";



const ProductCard = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          src={'/1.jpg'}
          alt={'image'}
          className="w-full md:w-1/2 h-auto rounded-md shadow-lg"
        />
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-800">Somfortable Sofa </h1>
          <p className="text-lg bg-teal-600 w-28 rounded-full text-center font-medium my-6 text-white">2500 USD</p>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          <button className="w-40 mt-4 px-6 py-2 bg-teal-500 text-white rounded-xl shadow-md hover:bg-teal-600">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-24">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-14">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <div key={index} className="text-center">
                <img
                  src={`/01.jpg`}
                  alt={`Chair ${index + 1}`}
                  className="w-full h-auto rounded-md"
                />
                <p className="mt-2 text-gray-600">Library Stool Chair</p>
                <p className="text-sm text-gray-800 font-semibold">$50</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
