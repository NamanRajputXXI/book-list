import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Books from "./Books";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import "../css/global.css";
const Add = () => {
  const [bookname, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [year, setYear] = useState("");
  const [isbn, setIsbn] = useState("");
  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);
    let a = bookname;
    let b = authorName;
    let c = year;
    let d = isbn;
    Books.push({ id: uniqueId, name: a, author: b, yearOfPublish: c, isbn: d });
    history("/");
  };
  return (
    <div className="container">
      <Form className="edit-form">
        <Form.Group controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Book Name"
            required
            onChange={(e) => setBookName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Control
            type="text"
            placeholder="Enter Author Name"
            required
            onChange={(e) => setAuthorName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formYear">
          <Form.Control
            type="number"
            placeholder="Enter Year "
            required
            onChange={(e) => setYear(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIsbn">
          <Form.Control
            type="text"
            placeholder="Enter Isbn"
            required
            onChange={(e) => setIsbn(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          className="button"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Add;
