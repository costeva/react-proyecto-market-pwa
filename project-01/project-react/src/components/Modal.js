import React from "react";
import ReactDOM from "react-dom";
import "../style/modal.scss";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
