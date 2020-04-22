import React from "react";
import PropTypes from "prop-types";
import { SpacingExampleCardHeaderStyled } from "./SpacingExampleCardHeader.styles";
import Toggle from "../../library/components/Toggle";

const SpacingExampleCardHeader = ({
  title,
  toggleLabel,
  toggleValue,
  handleToggleChange
}) => {
  return (
    <SpacingExampleCardHeaderStyled>
      <h3 className="header-title">{title}</h3>
      <div className="toggle-container">
        <p className="toggle-container__label">{toggleLabel}</p>
        <Toggle
          primary
          className="toggle-container__toggle"
          checked={toggleValue}
          handleOnChange={() => handleToggleChange(!toggleValue)}
        />
      </div>
    </SpacingExampleCardHeaderStyled>
  );
};

SpacingExampleCardHeader.defaultProps = {
  title: "",
  toggleLabel: "",
  toggleValue: true,
  handleToggleChange: () => {}
};

SpacingExampleCardHeader.propTypes = {
  title: PropTypes.string,
  toggleLabel: PropTypes.string,
  toggleValue: PropTypes.bool,
  handleToggleChange: PropTypes.func
};

export default SpacingExampleCardHeader;
