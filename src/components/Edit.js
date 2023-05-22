import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Books from "./Books";
import { useNavigate } from "react-router-dom";
import "../css/global.css";
const Edit = () => {
  const [bookname, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [year, setYear] = useState("");
  const [isbn, setIsbn] = useState("");
  const [id, setId] = useState("");
  let history = useNavigate();

  let index = Books.map((e) => {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    let a = Books[index];
    a.name = bookname;
    a.author = authorName;
    a.yearOfPublish = year;
    a.isbn = isbn;
    history("/");
  };

  useEffect(() => {
    setBookName(localStorage.getItem("name"));
    setAuthorName(localStorage.getItem("author"));
    setYear(localStorage.getItem("yearOfPublish"));
    setIsbn(localStorage.getItem("isbn"));
    setId(localStorage.getItem("id"));
  }, []);

  return (
    <div className="container">
      <Form className="edit-form">
        <Form.Group controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Book Name"
            value={bookname}
            required
            onChange={(e) => setBookName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formAuthor">
          <Form.Control
            type="text"
            placeholder="Enter Author Name"
            value={authorName}
            required
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formYear">
          <Form.Control
            type="number"
            placeholder="Enter Year"
            value={year}
            required
            onChange={(e) => setYear(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formIsbn">
          <Form.Control
            type="text"
            placeholder="Enter ISBN"
            value={isbn}
            required
            onChange={(e) => setIsbn(e.target.value)}
          />
        </Form.Group>
        <Button
          className="update-button"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
