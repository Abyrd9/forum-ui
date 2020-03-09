import React from 'react';
import PropTypes from 'prop-types';
import { PageTitleContainer } from './PageTitle.styles';

const PageTitle = ({ title, subtitle }) => {
  return (
    <PageTitleContainer>
      <h1 className="page-title__title">{title}</h1>
      <p className="page-title__subtitle">{subtitle}</p>
    </PageTitleContainer>
  );
};

PageTitle.defaultProps = {
  title: '',
  subtitle: '',
};

PageTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default PageTitle;
