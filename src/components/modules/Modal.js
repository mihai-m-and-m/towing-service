import React from "react";
import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.image}>
        <img src={props.modalImage} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.modalTitles}</h3>
        <h1>{props.modalDescription}</h1>
      </div>
      <button className="btn btn--alt" onClick={props.onCancel}>
        Inapoi
      </button>
    </div>
  );
}

export default Modal;
