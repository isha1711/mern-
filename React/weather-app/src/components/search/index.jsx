import React from "react";

function Search({ search, setsearch ,handlesearch}) {
  return (
    <div>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Enter name..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <button onClick={handlesearch}>Search</button>
      </div>
    </div>
  );
}

export default Search;
