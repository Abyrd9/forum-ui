/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { NavigationContainer } from './Navigation.styles';
import { NAV_LIST } from '../../constants';
import ForumIcon from '../Utilities/Icons/ForumIcon';

const Navigation = () => {
  const [active, toggleActive] = useState(false);
  return (
    <NavigationContainer active={active}>
      <ForumIcon className="nav-bar__icon" />
      <ul className="nav-bar__list">
        {NAV_LIST.map(item => {
          const Image = item.image;
          return (
            <li className="nav-bar__list-item">
              <Image />
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
      <span className="nav-bar__list-toggle-container" onClick={() => toggleActive(!active)}>
        <div className="nav-bar__list-toggle" />
      </span>
    </NavigationContainer>
  );
};

export default Navigation;
