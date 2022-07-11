import React, { useEffect, useState, useRef } from "react";
import axios from "../axios";
import "../sass/row.scss";
import { trackPromise } from "react-promise-tracker";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Movie from "./Movie";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Row({ title, isLargeRow, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  // const [trailerURL, setTrailerURL] = useState("");
  const [currentMovie, setCurrentMovie] = useState(null);
  let baseURL = `https://image.tmdb.org/t/p/original/`;
  let sliders = useRef(null);
  let posterRef = useRef(null);
  const IMAGE_PADDING = 20;
  let scrollPerClick = 0;
  let scrollAmount = 0;

  const removeCurrentMovie = () => {
    setCurrentMovie(null);
  };

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    setCurrentMovie(movie);
  };

  const scrollLeft = () => {
    scrollPerClick = posterRef.current.width + IMAGE_PADDING;
    sliders.current.scrollTop = 0;
    sliders.current.scrollLeft = scrollAmount -= scrollPerClick;

    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
  };

  const scrollRight = () => {
    if (scrollAmount <= posterRef.current.width - sliders.current.width) {
      sliders.current.scrollTop = 0;
      sliders.current.scrollLeft = scrollAmount += scrollPerClick;
    }
  };

  /*
   * Fetches youtube trailer video
   */
  // const handleClick = (movie) => {
  //   if (trailerURL) {
  //     setTrailerURL("");
  //   } else {
  //     movieTrailer(`${movie.name}`, {
  //       tmdbId: `${movie.id}`,
  //       year: `${movie.year}`,
  //     })
  //       .then((url) => {
  //         let urlForTrailer = new URL(url).search;
  //         let urlParams = new URLSearchParams(urlForTrailer);
  //         let v = urlParams.get("v");
  //         setTrailerURL(v);
  //         return v;
  //       })
  //       .catch((err) => console.log(`Error has occurred: ` + err));
  //   }
  // };

  const isNotNull = (item) => {
    if (
      item !== undefined ||
      item.name ||
      item.backdrop_path !== undefined ||
      item.poster_path !== undefined
    ) {
      // console.log(item);
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
      <h2 className={`row__title ${isLargeRow && "row__titleLarge"}`}>
        {title}
      </h2>
      <div className="row__posters" ref={sliders}>
        <ChevronLeftIcon className="row__postersLeft" onClick={scrollLeft} />
        {movies.map((movie) => {
          let newURL = `${baseURL}${movie?.poster_path}`;
          let altURL = `${baseURL}${movie?.backdrop_path}`;
          return (
            <img
              key={movie?.id}
              id={movie?.id}
              ref={posterRef}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={isLargeRow ? `${newURL}` : `${altURL}`}
              // src={`${newURL}` || `${altURL}`}
              alt={movie.name}
            />
          );
        })}
        <ChevronRightIcon className="row__postersRight" onClick={scrollRight} />
      </div>
      <div className="row__movie">
        {/* {trailerURL ? <YouTube videoId={trailerURL} opts={opts} /> : ""} */}
        {/* {open ? <Movie movie={currentMovie} /> : ""} */}
        {currentMovie !== null ? (
          <Movie movie={currentMovie} removeCurrentMovie={removeCurrentMovie} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Row;
