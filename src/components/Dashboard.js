import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "../sass/dashboard.scss";
import * as React from "react";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";

function Dashboard() {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="dashboard">
      <Avatar
        className={open ? "dashboard__icon open" : "dashboard__icon"}
        id="dashboard__menuOpen"
        aria-controls={open ? "dashboard__menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />

      <ul
        className={open ? "dashboard__menu active" : "dashboard__menu"}
        aria-labelledby="dashboard__menuOpen"
        open={open}
        onClose={handleClose}
      >
        <li className="dashboard__menuItem">
          <a href="./login">Sign In</a>
        </li>
        <li className="dashboard__menuItem">
          <a href="./register">Register</a>
        </li>
        <li className="dashboard__menuItem">
          <a href="./profile">Profile</a>
        </li>
        <li className="dashboard__menuItem">
          <a href="./register">Settings</a>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
