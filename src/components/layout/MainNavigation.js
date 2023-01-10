import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.MainNavigation}>
      <div className={classes.logo} />
      <div className={classes.telephone}>
        <a href="tel:0762.604.936">Telefon: 0762.604.936</a>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Acasă</Link>
          </li>
          <li>
            <Link to="/despre">Despre</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
