import ImagesItem from "./MainItem.js";
import classes from "./MainList.module.css";
import React from "react";

function MainList(props) {
  return (
    <div className={classes.list}>
      {props.main.map((Images) => (
        <ImagesItem
          key={Images.id}
          id={Images.id}
          image={Images.image}
          title={Images.title}
          description={Images.description}
        />
      ))}
    </div>
  );
}

export default MainList;
