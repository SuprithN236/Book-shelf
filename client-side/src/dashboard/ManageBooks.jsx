import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

function ManageBooks() {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((data) => setAllBooks(data));
  }, [allBooks]);
  return (
    <div className="px-4 lg:px-16 my-12 flex-grow">
      <h2 className="text-3xl font-bold mb-8">Manage your Book</h2>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Sl.no</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allBooks.map((item, index) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={item._id}
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell>{item.bookTitle}</Table.Cell>
              <Table.Cell>{item.authorName}</Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell>$ 10.00</Table.Cell>

              <Table.Cell className="flex gap-2">
                <Link
                  to={`/admin/dashboard/edit-books/${item._id}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  state={item}
                >
                  Edit
                </Link>
                <div>|</div>
                <button
                  onClick={() => {
                    fetch(`http://localhost:3000/book/${item._id}`, {
                      method: "DELETE",
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        setAllBooks(
                          allBooks.filter(
                            (eachItem) => eachItem._id !== item._id
                          )
                        );
                      });
                  }}
                  className="font-medium text-red-700 hover:underline dark:text-cyan-500"
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ManageBooks;
