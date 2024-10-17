import React from "react";
import BannerCard from "./BannerCard";

function Banner() {
  return (
    <div className="px-4 lg:px-28 flex items-center bg-[#6b9080]">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-32">
        <div className="space-y-5 md:w-1/2 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and sell your books{" "}
            <span className="text-blue-700">for the best prices</span>
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            atque et laboriosam? Corporis totam, neque quos, repellendus odio
            assumenda sequi natus incidunt architecto, earum quia repudiandae
            sint id ex pariatur.
          </p>
          <div className="flex gap-2 items-center">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search a book"
              className="px-2 py-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
}

export default Banner;
