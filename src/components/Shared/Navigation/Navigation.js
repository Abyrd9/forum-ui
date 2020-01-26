/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  faHomeLg,
  faGripHorizontal,
  faPencilPaintbrush,
  faCode,
  faUserCircle,
} from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigationContainer } from './Navigation.styles';
import ForumIcon from '../../Utilities/Icons/ForumIcon';
import { FirebaseContext } from '../../../firebase/FirebaseProvider';
// import Modal from '../Modal/Modal';

export const NAV_LIST = [
  { icon: faHomeLg, class: 'home', url: '/' },
  { icon: faGripHorizontal, class: 'grid', url: '/grid-docs' },
  { icon: faPencilPaintbrush, class: 'theme', url: 'theme-configuration' },
  { icon: faCode, class: 'code', url: 'theme-code' },
];

const Navigation = () => {
  const { user } = useContext(FirebaseContext);
  const notAuthenticated = !user || user.isAnonymous;

  const [active, toggleActive] = useState(false);
  return (
    <NavigationContainer active={active}>
      <FontAwesomeIcon title="user" />
      <ForumIcon className="nav-bar__icon" />
      <ul className="nav-bar__list">
        {NAV_LIST.map(item => {
          return (
            <Link to={item.url} className="nav-bar__list-item">
              <FontAwesomeIcon icon={item.icon} className={`icon icon--${item.class}`} />
            </Link>
          );
        })}
        <li className="nav-bar__list-item">
          <FontAwesomeIcon icon={faUserCircle} className="icon icon--user" />
        </li>
      </ul>
      <span className="nav-bar__list-toggle-container" onClick={() => toggleActive(!active)}>
        <div className="nav-bar__list-toggle" />
      </span>
      {/* {notAuthenticated && <Modal />} */}
    </NavigationContainer>
  );
};

export default Navigation;
