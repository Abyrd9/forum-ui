import React from 'react';
import PropTypes from 'prop-types';
import { RowContainer } from './Row.styles';

const Row = ({ children, ...props }) => {
  return <RowContainer {...props}>{children}</RowContainer>;
};

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Row;
