import React from "react";
import PropTypes from "prop-types";
import { GenericTitleWrapperStyled } from "./GenericTitleWrapper.styles";

const GenericTitleWrapper = ({ title, children }) => {
  return (
    <GenericTitleWrapperStyled>
      <h3 className="typography-title">{title}</h3>
      {children}
    </GenericTitleWrapperStyled>
  );
};

GenericTitleWrapper.defaultProps = {
  title: "",
  children: "GenericTitleWrapper"
};

GenericTitleWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ])
};

export default GenericTitleWrapper;
