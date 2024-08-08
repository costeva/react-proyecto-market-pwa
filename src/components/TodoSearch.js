import React from "react";
import "../style/todoSearch.scss";
import { todoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(todoContext);
  const onSearch = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  return (
    <div className="col-12">
      <div className=" cont">
        <div className="search card cardSty m-2">
          <label  className="py-3">
            Buscar
            <input placeholder="pepe" value={searchValue} onChange={onSearch} />
          </label>
        </div>
      </div>
    </div>
  );
}

export { TodoSearch };
