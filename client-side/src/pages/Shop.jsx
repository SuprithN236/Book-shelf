import React from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "flowbite-react";

function Shop() {
  const allBooks = useLoaderData();
  return (
    <div className="mt-20 px-4 md:px-24 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 gap-y-14">
      {allBooks.map((item) => (
        <Card
          className="max-w-sm shadow-lg"
          key={item._id}
          imgSrc={item.imageURL}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.bookTitle}
          </h5>

          <h6 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.authorName}
          </h6>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.bookDescription}
          </p>
          <button className="w-full bg-blue-700 font-bold text-white py-2 rounded-lg">
            Buy now
          </button>
        </Card>
      ))}
    </div>
  );
}

export default Shop;
