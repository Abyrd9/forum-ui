import React from 'react';
import PropTypes from 'prop-types';
import { TypographyBlockContainer } from './TypographyBlock.styles';

const TypographyBlock = ({ title, children }) => {
  return (
    <TypographyBlockContainer>
      <h3 className="typography-block-title">{title}</h3>
      {children}
    </TypographyBlockContainer>
  );
};

TypographyBlock.defaultProps = {
  title: '',
  children: 'TypographyBlock',
};

TypographyBlock.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default TypographyBlock;