import React from 'react';
import PropTypes from 'prop-types';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import lang from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import style from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

SyntaxHighlighter.registerLanguage('json', lang);

const CodeBlock = ({ code }) => {
  return (
    <SyntaxHighlighter language="json" style={style}>
      {code}
    </SyntaxHighlighter>
  );
};

CodeBlock.defaultProps = {
  code: 'const thing = () => {}',
};

CodeBlock.propTypes = {
  code: PropTypes.string,
};

export default CodeBlock;
