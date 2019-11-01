import React from 'react';
import PropTypes from 'prop-types';
import { ConfigurationBlockContainer } from './ConfigurationBlock.styles';

const ConfigurationBlock = ({ title, children }) => {
  return (
    <ConfigurationBlockContainer>
      {title && <p className="configuration-block-title">{title}</p>}
      {children}
    </ConfigurationBlockContainer>
  );
};

ConfigurationBlock.defaultProps = {
  title: '',
  children: 'ConfigurationBlock',
};

ConfigurationBlock.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default ConfigurationBlock;
