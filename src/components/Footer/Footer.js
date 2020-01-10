import React from 'react';
import PropTypes from 'prop-types';
import { FooterStyled } from './Footer.styles';

const Footer = () => {
  return (
    <FooterStyled>
      <p className="all-rights-reserved">@ all rights reserved</p>
      <div className="divider" />
      <p>Forum-Ui</p>
    </FooterStyled>
  );
};

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
