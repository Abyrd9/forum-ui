import React from 'react';
import PropTypes from 'prop-types';
import { ExampleCardHeaderStyled } from './ExampleCardHeader.styles';
import Toggle from '../../../../../library/Toggle';

const ExampleCardHeader = ({ title, toggleLabel, toggleValue, handleToggleChange }) => {
  return (
    <ExampleCardHeaderStyled>
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
    </ExampleCardHeaderStyled>
  );
};

ExampleCardHeader.defaultProps = {
  title: '',
  toggleLabel: '',
  toggleValue: true,
  handleToggleChange: () => {},
};

ExampleCardHeader.propTypes = {
  title: PropTypes.string,
  toggleLabel: PropTypes.string,
  toggleValue: PropTypes.bool,
  handleToggleChange: PropTypes.func,
};

export default ExampleCardHeader;
