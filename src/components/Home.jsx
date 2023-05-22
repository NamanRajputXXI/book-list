import React from "react";
import Books from "./Books";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  let history = useNavigate();
  const handleDelete = (id) => {
    let index = Books.map((e) => {
      return e.id;
    }).indexOf(id);
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
      <div style={{ margin: "50px" }}>
        <table>
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
            {Books && Books.length > 0
              ? Books.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.author}</td>
                      <td>{item.yearOfPublish}</td>
                      <td>{item.isbn}</td>
                      <td>
                        <Link to={"/edit"}>
                          <button
                            onClick={() => {
                              handleEdit(
                                item.id,
                                item.name,
                                item.author,
                                item.isbn,
                                item.yearOfPublish
                              );
                            }}
                          >
                            Edit
                          </button>
                        </Link>

                        <button onClick={() => handleDelete(item.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              : "no data"}
          </tbody>
        </table>
        <br />
        <Link to="/create">
          <button> Create</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
