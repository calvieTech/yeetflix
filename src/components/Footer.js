import React from "react";
import "../sass/footer.scss";
import tmdb from "../media/tmdb-short.svg";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="#fca311"
        sx={{ textDecoration: "none" }}
        href="https://cthang94.github.io/"
      >
        CalvieTech
      </Link>{" "}
      {new Date().getFullYear()}
      {"."} <br />
      All Rights Reserved.
    </Typography>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <Copyright sx={{ color: "white", fontSize: "16px" }} />
        <p>
          Made with: TMDB API{" "}
          <a
            className="footer__tmdbLink"
            href="https://www.themoviedb.org/?language=en-US"
            rel="noopener"
            style={{ textDecoration: "none", color: "white" }}
          >
            <img src={tmdb} height={20} alt="tmdb logo" />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
