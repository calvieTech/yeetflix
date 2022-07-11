import React from "react";
import "../sass/account.scss";
import Nav from "./Nav";
import Avatar from "@mui/material/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userSlice";
import { authMe } from "../firebase";
import Footer from "./Footer";
import { useNavigate } from "react-router";
import Plans from "./Plans";

function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  // const logout = (e) => {
  //   e.preventDefault();
  //   dispatch(logout());
  //   navigate("/")
  // };

  return (
    <>
      <nav className="account__nav">
        <Nav />
      </nav>
      <div className="account">
        <div className="account__body">
          <h2 className="account__bodyTitle">Edit Account</h2>
          <div className="account__info">
            <Avatar
              className="account__icon"
              id="account__iconOpen"
              sx={{
                width: 96,
                height: 96,
                backgroundColor: "#fe0039",
                color: "black",
              }}
            />
            <div className="account__details">
              <h2 className="account__detailsEmail">Email: {user?.email}</h2>
              <div className="account__plans">
                <h3 className="account__plansTitle">Plans</h3>
                <Plans />
                <button onClick={authMe.logout} className="account__signOut">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="account__footer">
        <Footer />
      </footer>
    </>
  );
}

export default Account;
