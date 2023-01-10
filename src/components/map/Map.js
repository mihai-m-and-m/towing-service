import React from "react";
import classes from "./Map.module.css";

const Map = () => (
  <div className={classes.mapouter}>
    <div className={classes.gmap_canvas}>
      <iframe
        title="map"
        id="gmap_canvas"
        width="100%"
        height="100%"
        src="https://maps.google.com/maps?q=targoviste%20Diaconu%20Coresi,%20bloc%20B8&t=&z=11&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  </div>
);

export default Map;
