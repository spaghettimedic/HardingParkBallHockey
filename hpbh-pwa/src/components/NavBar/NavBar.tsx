import React from "react";
import { Link } from "react-router-dom";

import { PATHS } from "../../constants";
import "./styles.css";

const NavBar: React.FC = () => {
  const user = false;

  return (
    <>
      <div className="header">
        <h1>Harding Park Ball Hockey</h1>
      </div>

      <ul>
        <li>
          <Link to={PATHS.HOME} className="link">
            <h3>Home</h3>
          </Link>
        </li>

        <li>
          <Link to={PATHS.GAME_DAYS} className="link">
            <h3>Game Days</h3>
          </Link>
        </li>

        <li>
          <Link to={PATHS.GALLERY} className="link">
            <h3>Gallery</h3>
          </Link>
        </li>

        <li>
          {user ? (
            <Link to={PATHS.PROFILE} className="link">
              <h3>My Profile</h3>
            </Link>
          ) : (
            <Link to={PATHS.LOGIN_SIGNUP} className="link">
              <h3>Login/Signup</h3>
            </Link>
          )}
        </li>

        <li>
          <Link to={PATHS.ABOUT} className="link">
            <h3>About</h3>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
