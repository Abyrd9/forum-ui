import React from 'react';
import PropTypes from 'prop-types';
import { ContentContainerContainer } from './ContentContainer.styles';
import Loading from '../../Utilities/Loading';

const ContentContainer = ({ title, loading, inline, children }) => {
  return (
    <ContentContainerContainer inline={inline}>
      <h3 className="typography-block-title">{title}</h3>
      <div className="typography-block-content">
        {loading && <Loading />}
        {children}
      </div>
    </ContentContainerContainer>
  );
};

ContentContainer.defaultProps = {
  title: '',
  children: 'ContentContainer',
  loading: false,
  inline: false,
};

ContentContainer.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  inline: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default ContentContainer;
