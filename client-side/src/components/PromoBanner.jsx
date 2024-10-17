import React from "react";

function PromoBanner() {
  return (
    <div className="h-64 bg-[#beef00] my-16 flex items-center justify-between px-4 lg:px-24">
      <div className="w-1/2">
        <h2 className="text-3xl font-bold">
          2024 National Books Awards for Fiction Shortlist
        </h2>
        <button className="mt-5 bg-blue-700 text-white py-2 px-4 text-sm rounded-md hover:bg-black transition-all ease-in duration-200">
          Explore Now
        </button>
      </div>
      <div className="w-1/5">
        <img className="w-full" src="src/assets/awardbooks.png" alt="" />
      </div>
    </div>
  );
}

export default PromoBanner;
