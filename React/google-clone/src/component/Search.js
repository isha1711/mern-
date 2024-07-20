import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../pages/Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false}) {
  const [{},dispatch] = useStateValue()
  const [input, setInput] = useState ('');
  const navigate = useNavigate();

  
  const search = (e) => {
    e.preventDefault();
    console.log('you hit btn', input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })
    navigate(`/search?q=${input}`);
  };

  return (
    <form className="search" onSubmit={search}>
      <div className="search_input">
        <SearchIcon className="search_inputicon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Google or type a URL"
        />
        <MicIcon />
        <FilterCenterFocusIcon />
      </div>

      {!hideButtons ? (
        <div className="search_btn">
          <button type="submit" variant="outlined">
          Google Search
          </button>
          <span></span>
        </div>
      ) : (
        <div className="search_btn">
          <button className="search_btnhidden" type="submit" variant="outlined">
            +
          </button>
          {/* <span>Add shortcut</span> */}
        </div>
      )}
    </form>
  );
}

export default Search;
