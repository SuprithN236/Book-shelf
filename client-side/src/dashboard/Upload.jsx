import React, { useRef, useState } from "react";

import { Button } from "flowbite-react";
import { useParams } from "react-router-dom";

function Upload() {
  const form = useRef(null);

  const categoryOptions = [
    "Fiction",
    "Non-fiction",
    "Mistery",
    "Science Fiction",
    "Fantasy",
    "Biography",
    "Horror",
    "AutoBiography",
    "History",
    "Self-Help",
    "Business",
  ];
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const bookTitle = e.target.bookTitle.value;
    const authorName = e.target.authorName.value;
    const imageURL = e.target.imageURL.value;
    const category = e.target.category.value;
    const bookDescription = e.target.bookDescription.value;
    const bookPDFURL = e.target.bookPDFURL.value;

    const bookObject = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };

    fetch("http://localhost:3000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObject),
    }).then((response) => {
      alert("book uploaded successfully");
      form.current.reset();
    });
  };

  const [selectedOption, setSelectedOption] = useState(categoryOptions[0]);
  return (
    <div className="px-4 lg:px-16 my-12 flex-grow">
      <h2 className="text-3xl font-bold mb-8">Upload a Book</h2>
      <form
        className="flex flex-wrap gap-4 lg:w-1/2"
        onSubmit={handleFormSubmit}
        ref={form}
      >
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="bookTitle">Book Title:</label>
          <input
            type="text"
            placeholder="Book name"
            className="w-full rounded-lg border-[#dee2e6] border placeholder-[#6c757d]"
            id="bookTitle"
            name="bookTitle"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="authorName">Author Name:</label>
          <input
            type="text"
            placeholder="****"
            className="w-full rounded-lg border-[#dee2e6] border placeholder-[#6c757d]"
            id="authorName"
            name="authorName"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="imageURL">Image URL:</label>
          <input
            type="text"
            placeholder=""
            className="w-full rounded-lg border-[#dee2e6] border placeholder-[#6c757d]"
            id="imageURL"
            name="imageURL"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            id="category"
            value={selectedOption}
            className="w-full rounded-lg border-[#dee2e6] border"
            onChange={handleSelectChange}
          >
            <option value="">--Select--</option>
            {categoryOptions.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="bookDescription">Book Description:</label>
          <textarea
            placeholder="Write your book description"
            className="w-full rounded-lg border-[#dee2e6] border placeholder-[#6c757d]"
            id="bookDescription"
            name="bookDescription"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="bookPDFURL">Book PDF URL:</label>
          <input
            type="text"
            placeholder=""
            className="w-full rounded-lg border-[#dee2e6] border placeholder-[#6c757d]"
            id="bookPDFURL"
            name="bookPDFURL"
          />
        </div>
        <Button type="submit">Upload Book</Button>
      </form>
    </div>
  );
}

export default Upload;
