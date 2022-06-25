import React from "react";
import "../sass/footer.scss";
import tmdb from "../media/tmdb-short.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__copyright">
        <p>
          &copy; 2021-2022{" "}
          <span style={{ color: "#FE6152" }}>Calvie Tech Inc.</span> All Rights
          Reserved.
        </p>

        <div className="footer__tmdb">
          Made with:{" "}
          <a
            className="footer__tmdbLink"
            href="https://www.themoviedb.org/?language=en-US"
            rel="noopener"
            style={{ textDecoration: "none", color: "white" }}
          >
            TMDB API <img src={tmdb} height={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
