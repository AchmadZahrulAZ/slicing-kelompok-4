import React, { useState } from "react";
import logo from "../assets/Vector.png";
import { Link } from "react-router-dom";
import ButtonSmall from "./Buttons/ButtonSmall";
import Button from "./Buttons/Button";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const toggleHamburger = () => {
    setClicked(!clicked);
  }

  return (
    <nav className="bg-whitecstm font-raleway my-2 py-4 md:px-24 px-10">
      <div className="text-white flex items-center justify-between gap-4">
        <Link to="/">
          <div className="flex space-x-2 items-center">
            <img className="scale-75" src={logo} alt="Logo" />
            <h1 className="text-darkblue text-xl font-bold">Logoipsum</h1>
          </div>
        </Link>
        <ul className="text-darkblue md:flex hidden text-base font-semibold flex flex-wrap items-center space-x-4">
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
            <ButtonSmall text={"Get In Touch"}/>
          </li>
        </ul>
        <div className="md:hidden flex">
        <Button onClick={toggleHamburger} text={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>}/>
        </div>
      </div>
      {clicked && (
        <ul className="text-darkblue md:hidden flex flex-col text-base font-semibold items-center space-y-4 mt-4">
          <Link to="/about">
            <li><button onClick={toggleHamburger}>About</button></li>
          </Link>
          <Link to="/ourservices">
            <li><button onClick={toggleHamburger}>Our Services</button></li>
          </Link>
          <Link to="/portfolio">
            <li><button onClick={toggleHamburger}>Portfolio</button></li>
          </Link>
          <Link to="/blog">
            <li><button onClick={toggleHamburger}>Blog</button></li>
          </Link>
          <Link to="/contact">
            <li><button onClick={toggleHamburger}>Contact</button></li>
          </Link>
          <li>
            <ButtonSmall text={"Get In Touch"} />
          </li>
        </ul>
      )}
    </nav>
  );
}
