// Footer.jsx
import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import { IoMdHome, IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuMessageSquare } from "react-icons/lu";
import { FaBriefcase } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <Link to="/homepage" style={{ color: "white" }}>
          <IoMdHome />
        </Link>
        <Link to="/search" style={{ color: "white" }}>
          <IoIosSearch />
        </Link>
        <Link to="/jobs" style={{ color: "white" }}>
        <FaBriefcase />
        </Link>
        <Link to="/message" style={{ color: "white" }}>
          <LuMessageSquare />
        </Link>
        <Link to="/myprofile" style={{ color: "white" }}>
          <FaRegUser />
        </Link>
       

      </div>
    </footer>
  );
};

export default Footer;
