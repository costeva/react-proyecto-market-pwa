import React from "react";
import "../style/createTodoButton.scss";

function CreateTodoButton() {
  const onClickButton = () => {
    alert("Hola");
  };
  return (
    <div className="contButon">
      <button className="button" onClick={() => onClickButton()}>
        hola
      </button>
    </div>
  );
}
export { CreateTodoButton };
