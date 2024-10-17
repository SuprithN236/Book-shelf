import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Mousewheel } from "swiper/modules";
import CustomerIndividual from "./CustomerIndividual";

function CustomerReview() {
  return (
    <>
      <div className="my-16 px-4 lg:px-24 ">
        <h2 className="text-black text-5xl text-center font-bold my-5">
          Our Customers
        </h2>
      </div>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
          className="mySwiper px-4 md:px-24"
        >
          <SwiperSlide className="border py-5 px-5 w-2/5 shadow-xl mb-10">
            <CustomerIndividual />
          </SwiperSlide>
          <SwiperSlide className="border py-5 px-5 w-2/5 shadow-xl mb-10">
            <CustomerIndividual />
          </SwiperSlide>
          <SwiperSlide className="border py-5 px-5 w-2/5 shadow-xl mb-10">
            <CustomerIndividual />
          </SwiperSlide>
          <SwiperSlide className="border py-5 px-5 w-2/5 shadow-xl mb-10">
            <CustomerIndividual />
          </SwiperSlide>
          <SwiperSlide className="border py-5 px-5 w-2/5 shadow-xl mb-10">
            <CustomerIndividual />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default CustomerReview;
