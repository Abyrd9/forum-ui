import React from "react";
import PropTypes from "prop-types";
import { ConfigValueGridStyled } from "./ConfigValueGrid.styles";

const ConfigValueGrid = ({ config, activeTabIndex }) => {
  let activeKeys = [];
  let clearBorders = [];
  switch (activeTabIndex) {
    case 0:
      clearBorders = ["300"];
      activeKeys = ["400"];
      break;
    case 1:
      clearBorders = ["100"];
      activeKeys = ["100", "200", "300"];
      break;
    case 2:
      clearBorders = ["400"];
      activeKeys = ["500", "600", "700", "800"];
      break;
    default:
      break;
  }

  return (
    <ConfigValueGridStyled>
      {Object.entries(config)
        .sort((a, b) => a[0] - b[0])
        .map(([key, value]) => {
          let className = "grid-item";
          if (activeKeys.includes(key))
            className += ` grid-item--${key} grid-item--selected`;
          if (clearBorders.includes(key))
            className += " grid-item--clear-border";
          return (
            <div className={className}>
              <p className="key">{key}</p>
              <span className="divider" />
              <p className="value">{value}</p>
            </div>
          );
        })}
    </ConfigValueGridStyled>
  );
};

ConfigValueGrid.defaultProps = {
  config: {},
  activeTabIndex: 0
};

ConfigValueGrid.propTypes = {
  config: PropTypes.shape({
    [PropTypes.string]: PropTypes.string
  }),
  activeTabIndex: PropTypes.number
};

export default ConfigValueGrid;
