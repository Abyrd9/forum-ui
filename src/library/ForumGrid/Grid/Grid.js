import React from 'react';
import PropTypes from 'prop-types';
import { GridContainer } from './GridStyled';

const Grid = ({ children, ...props }) => {
  return <GridContainer {...props}>{children}</GridContainer>;
};

Grid.displayName = 'Grid';

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Grid;
