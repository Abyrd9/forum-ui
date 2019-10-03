import React from 'react';
import PropTypes from 'prop-types';
import { ConfigureFontSectionContainer } from './ConfigureFontSection.styles';

const ConfigureFontSection = ({ children }) => {
  return <ConfigureFontSectionContainer>{children}</ConfigureFontSectionContainer>;
};

ConfigureFontSection.defaultProps = {
  children: 'ConfigureFontSection',
};

ConfigureFontSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default ConfigureFontSection;
