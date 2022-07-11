import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../sass/searchbar.scss";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";

function SearchBar() {
  const [inputText, setInputText] = useState("");

  const styles = () => ({
    multiLineColor: {
      color: "#fe0039",
    },
  });

  let searchHandler = (event) => {
    let lowerCaseText = event.target.value.toLowerCase();
    setInputText(lowerCaseText);
  };

  return (
    <div className="searchbar">
      <Box className="searchbar__box">
        <div className="searchbar__results">
          <SearchIcon
            className="searchbar__icon"
            sx={{ color: "#fca311" }}
            onClick={searchHandler}
          />
          <input
            className="searchbar__text"
            type="search"
            placeholder="Search for titles, people, genres"
            spellCheck="true"
            minLength="4"
            maxLength="64"
          />
        </div>
      </Box>
    </div>
  );
}

export default SearchBar;
