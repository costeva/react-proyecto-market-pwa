import React from "react";
import "../style/todoSearch.scss";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearch = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  return (
    <div className="search">
      <label>
        Buscar
        <input placeholder="pepe" value={searchValue} onChange={onSearch} />
      </label>
    </div>
  );
}

export { TodoSearch };
