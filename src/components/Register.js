import React, { useRef } from "react";
import "../sass/register.scss";
import { authMe } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Nav from "./Nav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Register() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      authMe,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        navigate("/");
        // console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      authMe,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        navigate("/");
        // console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <nav className="register__nav">
        <Nav />
      </nav>
      <div className="register">
        <form className="register__form">
          <h1>Sign In</h1>
          <input
            ref={emailRef}
            className="register__email"
            placeholder="Email Address"
            type="email"
          />
          <input
            ref={passwordRef}
            className="register__pw"
            placeholder="Password"
            type="password"
          />
          <button
            className="register__formSubmit"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
          <h4 className="register__signUp">
            <span className="register__gray">New to YEETFLIX? </span>
            <span className="register__link" onClick={signUp}>
              Sign Up now!
            </span>
            <span className="register__notice">
              NOTE: To sign up, you only need to type in your email address &
              password and click the Sign Up link above
            </span>
          </h4>
        </form>
      </div>
      <footer className="register__footer">
        <Footer />
      </footer>
    </>
  );
}

export default Register;
