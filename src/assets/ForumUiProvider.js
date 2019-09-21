import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import forumUiTheme from './forumUiTheme';
import ForumUiGlobalStyle from './ForumUiGlobalStyle';

const ForumUiProvider = ({ children }) => {
  return (
    <ThemeProvider theme={forumUiTheme}>
      <>
        <ForumUiGlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

ForumUiProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ForumUiProvider;
