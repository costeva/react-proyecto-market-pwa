import React from "react";
import { todoContext } from "../TodoContext";
import "../style/todoCounter.scss";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(todoContext);
  return (
    <div className="col-12 card-header text-center">
    <div className="titulo">
      <h2>
        Lista total de productos {totalTodos} comprados {completedTodos} 
      </h2>
    </div>
    </div>
  );
}

export { TodoCounter };
