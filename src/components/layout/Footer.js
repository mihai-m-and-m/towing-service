import classes from "./Footer.module.css";
import React from "react";

function Footer() {
  return (
    <>
      <footer className={classes.footer}>
        <h4>© 2022 Toate drepturile rezervate. Powered by M&M</h4>
        <div className={classes.menu}>
          <ul>
            <li>
              <iframe
                title="fb_like"
                src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ftractariautodb.ro%2F&width=77&layout=button_count&action=like&size=small&share=false&height=21&appId"
                width="99"
                height="20"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </li>
            <li>
              <iframe
                title="fb_share"
                src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Ftractariautodb.ro%2F&layout=button_count&size=small&width=77&height=20&appId"
                width="99"
                height="20"
                style={{ frameBorder: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
