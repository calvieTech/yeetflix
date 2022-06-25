import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../sass/row.scss";
import { trackPromise } from "react-promise-tracker";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, isLargeRow, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  let baseURL = `https://image.tmdb.org/t/p/original/`;

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(`${movie.name}`, {
        tmdbId: `${movie.id}`,
        year: `${movie.year}`,
      })
        .then((url) => {
          let urlForTrailer = new URL(url).search;
          let urlParams = new URLSearchParams(urlForTrailer);
          let v = urlParams.get("v");
          setTrailerURL(v);
          return v;
        })
        .catch((err) => console.log(`Error has occurred: ` + err));
    }
  };

  const isNotNull = (item) => {
    if (item || item.name || item.backdrop_path || item.poster_path) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    async function fetchData() {
      let req = await axios.get(fetchUrl).then((response) => {
        let moviesResults = response.data.results;
        let filteredMovies = moviesResults.filter(isNotNull);
        setMovies(filteredMovies);
        return filteredMovies;
      });
      return req;
    }
    trackPromise(fetchData());
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1 className={`row__title ${isLargeRow && "row__titleLarge"}`}>
        {title}
      </h1>
      <div className="row__posters">
        {movies.map((movie) => {
          let newURL = `${baseURL}${movie.poster_path}`;
          let altURL = `${baseURL}${movie.backdrop_path}`;
          return (
            <img
              key={movie?.id}
              id={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={isLargeRow ? `${newURL}` : `${altURL}`}
              alt={movie.name}
            />
          );
        })}
      </div>
      <div className="row__trailer">
        {trailerURL ? <YouTube videoId={trailerURL} opts={opts} /> : ""}
      </div>
    </div>
  );
}

export default Row;
