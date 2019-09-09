import React from 'react';
import PropTypes from 'prop-types';
import { ColumnContainer } from './Column.styles';

const Column = ({ children, ...props }) => {
  return <ColumnContainer {...props}>{children}</ColumnContainer>;
};

Column.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Column;
