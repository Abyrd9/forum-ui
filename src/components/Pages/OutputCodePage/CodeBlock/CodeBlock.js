import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/vs2015';
import { faCopy } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import copyToClipboard from '../../../../helpers/copyToClipboard';
import { CodeBlockStyled } from './CodeBlock.styles';

const CodeBlock = ({ code }) => {
  const TextareaRef = useRef();
  const handleCopyToClipboard = () => {
    if (TextareaRef.current) copyToClipboard(TextareaRef.current);
  };

  return (
    <CodeBlockStyled>
      <FontAwesomeIcon icon={faCopy} className="icon" onClick={() => handleCopyToClipboard()} />
      <SyntaxHighlighter language="json" style={style}>
        {code}
      </SyntaxHighlighter>
      <div className="copy-portal">
        <textarea ref={TextareaRef} value={code} />
      </div>
    </CodeBlockStyled>
  );
};

CodeBlock.defaultProps = {
  code: 'const thing = () => {}',
};

CodeBlock.propTypes = {
  code: PropTypes.string,
};

export default CodeBlock;
