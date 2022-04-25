import React from "react";
import "../style/todoCounter.scss";

function TodoCounter({ total, completed }) {
  return (
    <div className="titulo">
      <h2>
        Has comprado la cantidad{completed} de {total}
      </h2>
    </div>
  );
}

export { TodoCounter };
