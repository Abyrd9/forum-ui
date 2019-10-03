import React from 'react';
import PropTypes from 'prop-types';
import { BlockTitleContainer } from './BlockTitle.styles';

const BlockTitle = ({ title, description }) => {
  return (
    <BlockTitleContainer>
      <h2 className="block-title__title">{title}</h2>
      <span className="block-title__divider" />
      <p className="block-title__description">{description}</p>
    </BlockTitleContainer>
  );
};

BlockTitle.defaultProps = {
  title: '',
  description: '',
};

BlockTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default BlockTitle;
