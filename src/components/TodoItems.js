import React from "react";
import "../style/todoItems.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

function TodoItems(props) {
  return (
    <li className="list">
      <span className="circle circleShaw">
        <FontAwesomeIcon
          onClick={() => props.onComplete()}
          className={`ico-check ${props.completed && "ico-check--active"}`}
          icon={faCheck}
        />
      </span>
      <p className={`textItem ${props.completed && "textItem--completed"}`}>
        {props.text}
      </p>
      <span className="circle">
        <FontAwesomeIcon
          onClick={() => props.onDelete()}
          className="ico-tacho"
          icon={faTrash}
        />
      </span>
    </li>
  );
}

export { TodoItems };
