import React from "react";
import "./Banner.css";
function Banner() {
  function truncateDescript(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://wallpapercave.com/wp/wp1917118.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
          <h1 className="banner_description">
            {truncateDescript(`testtesttsttesttesttesttesttesttesttest`, 150)}
          </h1>
        </div>
      </div>
      <div className="banner--fadebottom"></div>
    </header>
  );
}

export default Banner;
