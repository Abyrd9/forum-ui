import React from 'react';
import PropTypes from 'prop-types';
import { GridContainer } from './Grid.styles';

const Grid = ({ children, ...props }) => {
  return <GridContainer {...props}>{children}</GridContainer>;
};

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Grid;
