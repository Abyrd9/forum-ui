import React from 'react';
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

export default Footer;
