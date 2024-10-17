import React from "react";

function FavouriteBook() {
  return (
    <div className="flex items-center space-x-24 px-4 lg:px-24 w-full">
      <div className="md:w-2/5">
        <img src="src/assets/favoritebook.jpg" alt="favourite book" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold leading-snug">
          Find your favourite <br />
          <span className="text-blue-700">Book here!</span>
        </h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          vitae, modi eaque est cum quidem vero similique quas quibusdam error
          ut aspernatur debitis autem nisi doloribus quia! Possimus, fuga quas.
        </p>
        <div className="flex items-center space-x-24 mt-5">
          <div>
            <p className="font-bold text-xl">800+</p>
            <p>Book listing</p>
          </div>
          <div>
            <p className="font-bold text-xl">500+</p>
            <p>Register User</p>
          </div>
          <div>
            <p className="font-bold text-xl">1200+</p>
            <p>PDF Downloaded</p>
          </div>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 mt-5 rounded-md text-sm hover:bg-black transition-all ease-in duration-200">
          Explore now
        </button>
      </div>
    </div>
  );
}

export default FavouriteBook;
