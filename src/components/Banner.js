import React, { useEffect, useState } from "react";
import axios from "../axios";
import { trackPromise } from "react-promise-tracker";
import "../sass/banner.scss";

function Banner({ fetchUrl, requests }) {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const isNotNull = (item) => {
    if (item || item.name || item.backdrop_path || item.poster_path) {
      return true;
    }
    return false;
  };

  let truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl).then((res) => {
        setLoading(true);
        let data = res.data.results;
        let filteredData = data.filter(isNotNull);
        let specificFilteredData =
          filteredData[Math.floor(Math.random() * filteredData.length)];
        setMovie(specificFilteredData);
        return specificFilteredData;
      });
      setLoading(false);
      return request;
    }
    trackPromise(fetchData());
  }, [fetchUrl]);

  return (
    <header>
      {loading ? (
        " "
      ) : (
        <div
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banner__contents">
            <h1 className="banner__title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>

            <div className="banner__buttons">
              <button className="banner__button">Play Now</button>
              <button className="banner__button">My List</button>
            </div>
            <p className="banner__description">
              {truncate(movie?.overview, 200)}
            </p>
          </div>
          <div className="banner--fadeBottom" />
          <div className="banner__divider">
            <hr />
          </div>
        </div>
      )}
    </header>
  );
}

export default Banner;
