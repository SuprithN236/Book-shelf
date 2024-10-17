import React from "react";
import { useLoaderData } from "react-router-dom";

function SingleBook() {
  const { _id, bookTitle } = useLoaderData();
  return (
    <>
      <div className="mt-28 px-4 lg:px-24">{bookTitle}</div>
    </>
  );
}

export default SingleBook;
