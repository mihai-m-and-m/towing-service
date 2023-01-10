import Card from "../ui/Card";
import classes from "./MainItem.module.css";
import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function ImagesItem(props) {
  const [modalIsOpen, setModelIsOpen] = useState(false);

  function deleteHandler(e) {
    e.preventDefault();
    setModelIsOpen(true);
  }
  function closeModalHandler(e) {
    e.preventDefault();
    setModelIsOpen(false);
  }

  return (
    <>
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <a href="/" onClick={deleteHandler}>
              <img src={props.image} alt={props.title} />
            </a>
            {modalIsOpen && (
              <Modal
                onCancel={closeModalHandler}
                modalTitles={props.title}
                modalImage={props.image}
                modalDescription={props.description}
              />
            )}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
          </div>
          <div className={classes.content}>
            <h2>{props.title}</h2>
          </div>
        </Card>
      </li>
    </>
  );
}

export default ImagesItem;
