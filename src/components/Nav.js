import React, { useEffect, useState } from "react";
import image from "../media/yeetflex-nobackground.png";
import "../sass/nav.scss";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import MainMenu from "./MainMenu";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <Link to="/home">
        <img
          className="nav__logo"
          src={image}
          alt="yeetflex logo"
          width={240}
          height={40}
        />
      </Link>
      {/* <MainMenu className="nav__dashboard" /> */}
      <Dashboard className="nav__dashboard" />
    </nav>
  );
}

export default Nav;
