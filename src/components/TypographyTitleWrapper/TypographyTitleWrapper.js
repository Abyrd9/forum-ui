import React from "react";
import PropTypes from "prop-types";
import { TypographyTitleWrapperStyled } from "./TypographyTitleWrapper.styles";

const TypographyTitleWrapper = ({ title, children }) => {
  return (
    <TypographyTitleWrapperStyled>
      <h3 className="typography-title">{title}</h3>
      {children}
    </TypographyTitleWrapperStyled>
  );
};

TypographyTitleWrapper.defaultProps = {
  title: "",
  children: "TypographyTitleWrapper"
};

TypographyTitleWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ])
};

export default TypographyTitleWrapper;
