import React from 'react';
import PropTypes from 'prop-types';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialSignInButtonStyled } from './SocialSignInButton.styles';
import GoogleLogo from './assets/GoogleLogo';

const SocialSignInButton = ({ children, ...props }) => {
  return (
    <SocialSignInButtonStyled {...props}>
      <div className="white-tile">
        {props.google && <GoogleLogo />}
        {props.github && <FontAwesomeIcon icon={faGithub} />}
      </div>
      <p className="text">{children}</p>
    </SocialSignInButtonStyled>
  );
};

SocialSignInButton.defaultProps = {
  children: 'SocialSignInButton',
  google: false,
  github: false,
};

SocialSignInButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  google: PropTypes.bool,
  github: PropTypes.bool,
};

export default SocialSignInButton;
