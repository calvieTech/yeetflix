import React, { useEffect, useState } from "react";
import image from "../media/yeetflex-nobackground.png";
import Avatar from "@mui/material/Avatar";
import "../sass/nav.scss";

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
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src={image}
        alt="yeetflex logo"
        width={150}
        height={40}
      ></img>
      <Avatar
        className="nav__avatar"
        sx={{ color: "#FE6152", bgcolor: "#FFFFFF", cursor: "pointer" }}
      />
    </div>
  );
}

export default Nav;
