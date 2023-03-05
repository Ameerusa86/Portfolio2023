import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaRegFileCode } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const NavLinks = ({ handleNav }) => {
  return (
    <ul className="nav-links">
      <li onClick={handleNav}>
        <Link
          to="//www.frontendmentor.io/profile/Ameerusa86"
          target="_blank"
          className="nav-link"
        >
          <FaRegFileCode />
        </Link>
      </li>
      <li onClick={handleNav}>
        <Link
          to="//www.linkedin.com/in/ameer86/"
          target="_blank"
          className="nav-link"
        >
          <FaLinkedin />
        </Link>
      </li>
      <li onClick={handleNav}>
        <Link to="//github.com/Ameerusa86" target="_blank" className="nav-link">
          <BsGithub />
        </Link>
      </li>
      <li onClick={handleNav}>
        <Link
          to="//mailto:ameer.usa1986@gmail.com"
          target="_blank"
          className="nav-link"
        >
          <BiEnvelope />
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
