import React, { useState, useEffect } from "react";
import BookCards from "./BookCards";

function OtherBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.slice(6));
      });
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  );
}

export default OtherBooks;
