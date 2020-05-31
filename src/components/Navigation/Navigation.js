/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { faBookUser, faSignInAlt } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import isEmpty from "lodash.isempty";
import { NavigationContainer } from "./Navigation.styles";
import ForumIcon from "../Utilities/Icons/ForumIcon";
import { FirebaseContext } from "../../assets/FirebaseProvider";

const Navigation = () => {
  const { userData } = useContext(FirebaseContext);

  return (
    <NavigationContainer>
      <FontAwesomeIcon title="user" />
      <Link to="/">
        <ForumIcon className="nav-bar__icon" />
      </Link>
      <ul className="nav-bar__list">
        <li className="nav-bar__list-item">
          <Link to="/" className="nav-bar__link-text">
            Home
          </Link>
        </li>
        <li className="nav-bar__list-item">
          <Link to="/choose-theme" className="nav-bar__link-text">
            Themes
          </Link>
        </li>
        <span className="nav-bar__divider" />
        {isEmpty(userData) ? (
          <li className="nav-bar__list-item">
            <Link to="/register" className="nav-bar__link-text">
              <p>Register</p>
              <FontAwesomeIcon icon={faSignInAlt} className="icon icon--user" />
            </Link>
          </li>
        ) : (
          <li className="nav-bar__list-item">
            <Link to="/profile" className="nav-bar__link-text">
              <p>Profile</p>
              <FontAwesomeIcon icon={faBookUser} className="icon icon--user" />
            </Link>
          </li>
        )}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
