import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import React from "react";

function Layout(props) {
  return (
    <>
      <div className={classes.background}>
        <div align="center">
          <div className={classes.container}>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
