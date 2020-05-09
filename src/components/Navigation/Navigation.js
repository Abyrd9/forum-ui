/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  faHomeLg,
  faList,
  faEdit,
  faCode,
  faUserCircle
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavigationContainer } from "./Navigation.styles";
import ForumIcon from "../Utilities/Icons/ForumIcon";
import { FirebaseContext } from "../../assets/FirebaseProvider";

export const NAV_LIST = [
  { icon: faHomeLg, name: "home", class: "home", url: "/" },
  { icon: faList, name: "themes", class: "themes-list", url: "choose-theme" },
  { icon: faEdit, name: "edit", class: "edit-theme", url: "edit-theme" },
  { icon: faCode, name: "copy", class: "copy-theme", url: "copy-theme" },
  { icon: faUserCircle, name: "", class: "auth", url: "authentication" }
];

const Navigation = () => {
  const { userData } = useContext(FirebaseContext);
  const [active, toggleActive] = useState(false);
  return (
    <NavigationContainer active={active}>
      <FontAwesomeIcon title="user" />
      <Link to="/">
        <ForumIcon className="nav-bar__icon" />
      </Link>
      <div className="nav-bar__list-container">
        <ul className="nav-bar__list nav-bar__list--nav">
          {NAV_LIST.map(item => {
            return (
              <Link to={item.url} className="nav-bar__list-item">
                <p>{item.name}</p>
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`icon icon--${item.class}`}
                />
              </Link>
            );
          })}
        </ul>
        <span
          className="nav-bar__list-toggle-container"
          onClick={() => toggleActive(!active)}
        >
          <div className="nav-bar__list-toggle" />
        </span>
        <span className="nav-bar__divider" />
        <ul className="nav-bar__list nav-bar__list--auth">
          {!userData ? (
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
                  className="nav-bar__link-text nav-bar__link-text--sign-up"
                >
                  Sign up
                </Link>
              </li>
            </>
          ) : (
            <li className="nav-bar__list-item">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="icon icon--user"
              />
            </li>
          )}
        </ul>
      </div>
    </NavigationContainer>
  );
};

export default Navigation;
