/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
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

export const NAV_LIST = [
  { icon: faHomeLg, class: "home", url: "/" },
  { icon: faList, class: "grid", url: "choose-theme" },
  { icon: faEdit, class: "theme", url: "edit-theme" },
  { icon: faCode, class: "code", url: "copy-theme" }
];

const Navigation = () => {
  const [active, toggleActive] = useState(false);
  return (
    <NavigationContainer active={active}>
      <FontAwesomeIcon title="user" />
      <Link to="/">
        <ForumIcon className="nav-bar__icon" />
      </Link>
      <ul className="nav-bar__list">
        {NAV_LIST.map(item => {
          return (
            <Link to={item.url} className="nav-bar__list-item">
              <FontAwesomeIcon
                icon={item.icon}
                className={`icon icon--${item.class}`}
              />
            </Link>
          );
        })}
        <li className="nav-bar__list-item">
          <FontAwesomeIcon icon={faUserCircle} className="icon icon--user" />
        </li>
      </ul>
      <span
        className="nav-bar__list-toggle-container"
        onClick={() => toggleActive(!active)}
      >
        <div className="nav-bar__list-toggle" />
      </span>
    </NavigationContainer>
  );
};

export default Navigation;
