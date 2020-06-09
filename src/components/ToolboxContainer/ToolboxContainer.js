import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/pro-duotone-svg-icons";
import { ToolboxContainerStyled } from "./ToolboxContainer.styles";

const ToolboxContainer = ({ children }) => {
  return (
    <ToolboxContainerStyled>
      <FontAwesomeIcon icon={faTools} className="toolbox__tool-icon" />
      <span className="toolbox__divider" />
      {children}
    </ToolboxContainerStyled>
  );
};

ToolboxContainer.defaultProps = {
  children: null
};

ToolboxContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ])
};

export default ToolboxContainer;
