import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://variety.com/wp-content/uploads/2017/02/netflix-logo.jpg"
          alt=""
        />

        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
