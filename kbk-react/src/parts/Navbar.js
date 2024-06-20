import React from "react";
import { Link } from "react-router-dom";
import image from "../images/logos/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="KBKLOGO">
        <img src={image} alt="KBKlogo" width="250" height="auto" />
      </div>
      <div className="navBar">
        <div className="homeNAV">
          <Link style={{ textDecoration: "none", color: "black" }} to="/home">
            Home
          </Link>
        </div>
        <div className="Team">
          <Link style={{ textDecoration: "none", color: "black" }} to="/team">
            The Team
          </Link>
        </div>
        <div className="About">
          <Link style={{ textDecoration: "none", color: "black" }} to="/about">
            About
          </Link>
        </div>
        <div className="Location">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/location"
          >
            Location
          </Link>
        </div>
        <div className="Team">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/gallery"
          >
            Gallery
          </Link>
        </div>
        <div className="Team">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="Team">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/testimonials"
          >
            Testimonial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
