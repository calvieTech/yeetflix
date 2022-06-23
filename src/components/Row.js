import React, { useEffect, useState } from "react";
import axios from "../axios";
// import axios from "axios";
import { TMDB_API_KEY } from "../request";
import "../sass/row.scss";
import { trackPromise } from "react-promise-tracker";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  let image_baseURL = `https://image.tmdb.org/t/p/original`;

  const filterMovie = (item) => {
    if (
      item !== null ||
      item !== undefined ||
      item.backdrop_path !== null ||
      item.backdrop_path !== undefined ||
      item.poster_path !== null ||
      item.poster_path !== undefined
    ) {
      return true;
    }
    return false;
  };

  async function fetchData() {
    const req = await axios.get(fetchUrl).then((response) => {
      let moviesResults = response.data.results;
      let filteredMovies = moviesResults.filter(filterMovie);
      setMovies(filteredMovies);
      return filteredMovies;
    });
    return req;
  }

  useEffect(() => {
    trackPromise(fetchData());
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          let baseURL = `https://image.tmdb.org/t/p/original/`;
          let newURL = `${baseURL}${movie.poster_path}`;
          let altURL = `${baseURL}${movie.backdrop_path}`;
          return (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={isLargeRow ? `${newURL}` : `${altURL}`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
