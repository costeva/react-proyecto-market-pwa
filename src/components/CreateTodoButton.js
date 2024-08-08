import React from "react";
import "../style/createTodoButton.scss";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };
 

  return (
    <div className="contButon">
      <button className=" btn btn-primary" onClick={onClickButton}>
        +
      </button>
    </div>
  );
}
export { CreateTodoButton };
