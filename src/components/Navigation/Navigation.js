/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { faUserCircle } from "@fortawesome/pro-duotone-svg-icons";
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
        {isEmpty(userData) ? (
          <>
            <li className="nav-bar__list-item">
              <Link
                to="/authentication?auth_type=sign-in"
                className="nav-bar__link-text"
              >
                Sign in
              </Link>
            </li>
            <li className="nav-bar__list-item">
              <Link
                to="/authentication?auth_type=sign-up"
                className="nav-bar__link-text nav-bar__link-text--button"
              >
                Sign up
              </Link>
            </li>
          </>
        ) : (
          <li className="nav-bar__list-item">
            <Link to="/profile" className="nav-bar__link-text">
              <p>Profile</p>
              <FontAwesomeIcon
                icon={faUserCircle}
                className="icon icon--user"
              />
            </Link>
          </li>
        )}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
