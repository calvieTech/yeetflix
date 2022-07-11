import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Rating,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import "../sass/movie.scss";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PageviewIcon from "@mui/icons-material/Pageview";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Movie({ movie, removeCurrentMovie }) {
  const [trailerURL, setTrailerURL] = useState("");
  let baseURL = `https://image.tmdb.org/t/p/original/`;
  let newURL = `${baseURL}${movie.poster_path}`;
  console.log(movie);
  return (
    <div>
      <Dialog className="movie" open={true} fullWidth={true}>
        <DialogTitle className="movie__title">
          <span className="movie__name">
            {movie?.name || movie?.original_title || movie?.title} <br />
          </span>
          <span className="movie__aired">
            ({movie?.release_date || movie?.first_air_date || ""})
          </span>
          <span className="movie__rating">
            <Rating
              value={movie?.vote_average}
              max={10}
              precision={0.5}
              readOnly
            />
            {(Math.round(movie?.vote_average * 100) / 100).toFixed(2)}
          </span>
        </DialogTitle>
        <DialogContent
          className="movie__content"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="movie__poster"
            key={movie?.id}
            id={movie.id}
            src={`${newURL}`}
            alt={movie.name}
            height={400}
            width={320}
          />
          <DialogContentText sx={{ padding: "16px", fontSize: "24px" }}>
            {movie?.overview}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px 16px",
          }}
        >
          {movie.video !== null ? (
            <Button autoFocus startIcon={<YouTubeIcon />}>
              View Trailer
            </Button>
          ) : (
            ""
          )}
          <Button startIcon={<PageviewIcon />}>Movie Homepage</Button>
          <Button
            onClick={() => {
              removeCurrentMovie();
            }}
            startIcon={<CancelIcon />}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
