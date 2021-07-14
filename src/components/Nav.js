import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faGift, faBell } from "@fortawesome/free-solid-svg-icons";
import "./../css/Nav.css";

function Nav() {
  const [showNav, setShowNav] = useState(false);

  const transitionNav = () => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => {
      window.removeEventListener("scroll", transitionNav);
    };
  }, []);

  return (
    <div className={`nav ${showNav && "nav__black"}`}>
      <div className="nav__contents">
        <div className="nav__left">
          <img
            className="nav__logo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="netflix-logo"
          />
          <div className="links">
            <a href="/" className="link">
              Home
            </a>
            <a href="/" className="link">
              Series
            </a>
            <a href="/" className="link">
              Movies
            </a>
            <a href="/" className="link">
              Top Trending
            </a>
            <a href="/" className="link">
              My list
            </a>
          </div>
        </div>
        <div className="nav__right">
          <div className="icons">
            <FontAwesomeIcon className="icon" icon={faSearch} />
            <FontAwesomeIcon className="icon" icon={faGift} />
            <FontAwesomeIcon className="icon" icon={faBell} />
          </div>
          <img
            className="nav__avatar"
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
