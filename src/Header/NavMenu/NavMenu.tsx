import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

const NavMenu = (props: any) => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://react-bootstrap.github.io/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        RoastMePoetry
      </Navbar.Brand>
      <Nav className="justify-content-end" style={{ width: "100%" }}>
        <Button variant="outline-info">Buy Now</Button>
      </Nav>
    </Navbar>
  );
};

export default NavMenu;
