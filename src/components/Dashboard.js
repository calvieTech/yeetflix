import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "../sass/dashboard.scss";
import * as React from "react";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const history = useNavigate();

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
        <Link to="/account" className="dashboard__menuItem">
          My Account
        </Link>
        <Link to="/list" className="dashboard__menuItem">
          My List
        </Link>
        <Link to="/register" className="dashboard__menuItem">
          Sign In
        </Link>
      </ul>
    </div>
  );
}

export default Dashboard;
