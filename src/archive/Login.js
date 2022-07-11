// import React, { useState } from "react";
// import "../sass/login.scss";
// import background from "../media/yeetflix-no-background.png";
// import Nav from "./Nav";
// import Register from "./Register";
// import { useNavigate } from "react-router";
// import Footer from "./Footer";

// function Login() {
//   const [login, setLogin] = useState(false);
//   const history = useNavigate();
//   return (
//     <>
//       <nav className="login__nav">
//         <Nav />
//       </nav>
//       <div className="login">
//         <div className="login__background">
//           {/* <img className="login__logo" src={background} /> */}
//           {/* <button className="login__button">Sign In</button> */}
//           <div className="login__gradient" />
//         </div>
//         <div className="login__body">
//           {login ? (
//             <Register />
//           ) : (
//             <>
//               <h1>Unlimited movies, TV shows and more!</h1>
//               <h2>Watch anywhere. Cancel at anytime.</h2>
//               <h3>
//                 Ready to use? Enter your email to create or restart your
//                 membership.
//               </h3>
//               <div className="login__input">
//                 <form>
//                   <input
//                     className="login__inputEmail"
//                     type="email"
//                     placeholder="Email Address"
//                   />
//                   <button
//                     className="login__getStarted"
//                     onClick={() => setLogin(true)}
//                   >
//                     GET STARTED
//                   </button>
//                 </form>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//       <footer className="login__footer">
//         <Footer />
//       </footer>
//     </>
//   );
// }

// export default Login;
