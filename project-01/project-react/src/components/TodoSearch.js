import React from "react";
import "../style/todoSearch.scss";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");

  const onSearch = (e) => {
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
