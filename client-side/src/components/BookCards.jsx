import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../BookCards.css";
import { Mousewheel, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

function BookCards({ books, headline }) {
  console.log(books);
  return (
    <>
      <div className="my-16 px-4 lg:px-24 ">
        <h2 className="text-black text-5xl text-center font-bold my-5">
          {headline}
        </h2>
      </div>
      <div className="my-16 px-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Mousewheel]}
          className="mySwiper w-full h-full "
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
                <div className="relative">
                  <img src={`${book.imageURL}`} alt="book image" />
                  <div className="absolute top-3 right-3 bg-blue-700 hover:bg-black p-1 rounded">
                    <FaCartShopping className="w-5 h-5 text-white font-bold" />
                  </div>
                </div>
                <div>
                  <h3>{book.bookTitle}</h3>
                  <p>{book.authorName}</p>
                </div>
                <div>
                  <p>$10.00</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default BookCards;
