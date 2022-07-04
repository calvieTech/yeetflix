import React from "react";
import "../sass/notfound.scss";

function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__error">
        <h2 className="notfound__title">404 Error Status!</h2>
        <div className="notfound__desc">
          {/* <p>Cannot found the page!</p> */}
        </div>
      </div>
    </div>
  );
}

export default NotFound;
