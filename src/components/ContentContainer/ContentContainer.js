import React from 'react';
import PropTypes from 'prop-types';
import { ContentContainerContainer } from './ContentContainer.styles';
import Loading from '../../components/Utilities/Loading';

const ContentContainer = ({ title, loading, children }) => {
  return (
    <ContentContainerContainer>
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
};

ContentContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default ContentContainer;
