import React, { useEffect, useState } from "react";
import axios from "../axios";
import { trackPromise } from "react-promise-tracker";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

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
    const request = await axios.get(fetchUrl).then((res) => {
      setLoading(true);
      let data = res.data.results;
      let filteredData = data.filter(filterMovie);
      setMovie(filteredData);
      return filteredData;
    });
    setLoading(false);
    return request;
  }

  useEffect(() => {
    trackPromise(fetchData());
  }, [fetchUrl]);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      {/* <div className="banner__logo">
        <img src="./media/yeetflex-nobackground.png" alt="banner" />
      </div> */}
      <div className="banner__contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner__buttons">
          <button className="banner__button">Play Now</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">${movie?.overview}</h1>
      </div>
    </div>
  );
}

export default Banner;
