import React from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import img from "../../logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant={"dark"} expand="lg" className="navbar">
      <Container>
        <Navbar.Brand to="/home">
          <img src={img} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            navbarScroll
          >
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </Nav>
          <Form inline className="ml-auto">
            <FormControl
              type="text"
              placeholder="Type Course & Enter"
              className="mr-sm-2 m-lg-auto search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
