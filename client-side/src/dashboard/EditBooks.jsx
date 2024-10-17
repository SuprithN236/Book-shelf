import React, { useEffect, useState } from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Button } from "flowbite-react";
import { useRef } from "react";

function EditBooks() {
  const location = useLocation();
  const form = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    form.current.bookTitle.value = location.state.bookTitle;
    form.current.authorName.value = location.state.authorName;
    form.current.imageURL.value = location.state.imageURL;
    form.current.category.value = location.state.category;
    form.current.bookDescription.value = location.state.bookDescription;
    form.current.bookPDFURL.value = location.state.bookPDFURL;
  }, []);

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

  const [selectedOption, setSelectedOption] = useState("");

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

    fetch(`http://localhost:3000/book/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObject),
    }).then((response) => {
      alert("book edited successfully");
      navigate("/admin/dashboard/manage");
    });
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="px-4 lg:px-16 my-12 flex-grow">
      <h2 className="text-3xl font-bold mb-8">Edit a Book</h2>
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
            placeholder=""
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
        <Button type="submit">Update Book</Button>
      </form>
    </div>
  );
}

export default EditBooks;
