import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <>
      <Navbar variant="dark" style={{ height: "90px" }}>
        <Container>
          <NavLink
            to="/"
            className="navbar-brand text-dark text-decoration-none"
            style={{ fontSize: "40px", fontWeight: "700", marginRight:"-70px"}}
          >
            Ecommerce
          </NavLink>
          <Nav className="mr-auto text-dark  ">
            <NavLink
              to="/category"
              className="nav-link text-dark"
              style={{  fontWeight: "400" }}
            >
              Category
            </NavLink>
            <NavLink
              to="/sales"
              className="nav-link text-dark"
              style={{  fontWeight: "400" }}
            >
              Sales
            </NavLink>
            <NavLink
              to="/clearance"
              className="nav-link text-dark"
              style={{  fontWeight: "400" }}
            >
              Clearance
            </NavLink>
            <NavLink
              to="/new-stock"
              className="nav-link text-dark"
              style={{  fontWeight: "400" }}
            >
              New Stock
            </NavLink>
            <NavLink
              to="/trending"
              className="nav-link text-dark"
              style={{  fontWeight: "400" }}
            >
              Trending
            </NavLink>
          </Nav>
          <Nav>
            <Nav.Link
              href="#search"
              className="text-dark"
              style={{ fontSize: "20px", fontWeight: "400" }}
            >
              <span class="material-symbols-outlined">search</span>
            </Nav.Link>
            <Nav.Link
              href="#cart"
              className="text-dark"
              style={{ fontSize: "20px", fontWeight: "400" }}
            >
              <span class="material-symbols-outlined">shopping_cart</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar
        style={{
          height: "30px",
          backgroundColor: "#EEEEEE",
          justifyContent: "center",
        }}
      >
        <span class="material-symbols-outlined">chevron_left</span>
        Get 10% off on business sign up
        <span class="material-symbols-outlined">chevron_right</span>
      </Navbar>
    </>
  );
};

export default Headers;
