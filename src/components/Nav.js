import React, { useEffect, useState } from "react";
import image from "../media/yeetflix-no-background.png";
import "../sass/nav.scss";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import SearchBar from "./SearchBar";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <Link to="/">
        <img
          className="nav__logo"
          src={image}
          alt="yeetflex logo"
          width={240}
          height={40}
        />
      </Link>
      <SearchBar className="nav__searchbar" />
      {/* <MainMenu className="nav__dashboard" /> */}
      <Dashboard className="nav__dashboard" />
    </div>
  );
}

export default Nav;
