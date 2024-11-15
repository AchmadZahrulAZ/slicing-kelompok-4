import React from "react";
import logo from "../assets/Vector.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-whitecstm font-raleway">
      <div className="text-white flex justify-around">
        <Link to="/">
          <div className="flex space-x-2">
            <img src={logo} alt="Logo" />
            <h1 className="text-darkblue text-3xl font-bold">Logoipsum</h1>
          </div>
        </Link>
        <ul className="text-darkblue text-base font-semibold flex items-center space-x-4">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/ourservices">
            <li>Our Services</li>
          </Link>
          <Link to="/portfolio">
            <li>Portfolio</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li className="ml-8">
            <button className="bg-peachred px-4 py-2 ml-8 text-whitecstm rounded-md font-medium">
              Get In Touch
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
