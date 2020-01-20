import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { MarkdownRendererStyled } from './MarkdownRenderer.styles';
import CodeBlock from '../CodeBlock/CodeBlock';

const MarkdownRenderer = ({ input }) => {
  return (
    <MarkdownRendererStyled>
      <ReactMarkdown source={input} renderers={{ code: CodeBlock }} />
    </MarkdownRendererStyled>
  );
};

MarkdownRenderer.defaultProps = {
  input: 'MarkdownRenderer',
};

MarkdownRenderer.propTypes = {
  input: PropTypes.string,
};

export default MarkdownRenderer;
