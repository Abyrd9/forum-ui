import React from 'react';
import PropTypes from 'prop-types';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark-reasonable';

SyntaxHighlighter.registerLanguage('javascript', js);

const CodeBlock = ({ code }) => {
  return (
    <SyntaxHighlighter language="javascript" style={style}>
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
