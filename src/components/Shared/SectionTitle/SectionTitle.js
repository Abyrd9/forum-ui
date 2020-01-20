import React from 'react';
import PropTypes from 'prop-types';
import { SectionTitleContainer } from './SectionTitle.styles';

const SectionTitle = ({ title, description }) => {
  return (
    <SectionTitleContainer>
      <h2 className="block-title__title">{title}</h2>
      <span className="block-title__divider" />
      <p className="block-title__description">{description}</p>
    </SectionTitleContainer>
  );
};

SectionTitle.defaultProps = {
  title: '',
  description: '',
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default SectionTitle;
