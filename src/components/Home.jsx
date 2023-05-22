import React from "react";
import Books from "./Books";
import "../css/global.css";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  let history = useNavigate();

  const handleDelete = (id) => {
    let index = Books.map((e) => e.id).indexOf(id);
    Books.splice(index, 1);
    history("/");
  };

  const handleEdit = (id, bookname, year, isbn, authorName) => {
    localStorage.setItem("name", bookname);
    localStorage.setItem("id", id);
    localStorage.setItem("yearOfPublish", year);
    localStorage.setItem("author", authorName);
    localStorage.setItem("isbn", isbn);
  };

  return (
    <>
      <div className="container">
        <div>
          <table className="book-table">
            <thead>
              <tr>
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Year</th>
                <th>ISBN</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Books && Books.length > 0 ? (
                Books.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.author}</td>
                    <td>{item.yearOfPublish}</td>
                    <td>{item.isbn}</td>
                    <td>
                      <Link to={"/edit"}>
                        <button
                          className="edit-button"
                          onClick={() =>
                            handleEdit(
                              item.id,
                              item.name,
                              item.author,
                              item.isbn,
                              item.yearOfPublish
                            )
                          }
                        >
                          Edit
                        </button>
                      </Link>

                      <button
                        className="delete-button"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No data</td>
                </tr>
              )}
            </tbody>
          </table>
          <br />
          <Link to="/create">
            <button className="create-button">Create</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
