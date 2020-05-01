import React from "react";
import PropTypes from "prop-types";
import { TypographyFamilyStyled } from "./TypographyFamily.styles";

const TypographyFamily = ({ title, fontFamily }) => {
  return (
    <TypographyFamilyStyled fontFamily={fontFamily}>
      <h3 className="title">{title}</h3>
      <p className="font-family">{fontFamily}</p>
    </TypographyFamilyStyled>
  );
};

TypographyFamily.defaultProps = {
  title: "",
  fontFamily: ""
};

TypographyFamily.propTypes = {
  title: PropTypes.string,
  fontFamily: PropTypes.string
};

export default TypographyFamily;
