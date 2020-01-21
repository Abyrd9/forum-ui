import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/vs2015';
import { faCopy } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import copyToClipboard from '../../../../helpers/copyToClipboard';
import { CodeBlockStyled } from './CodeBlock.styles';
import Notification from '../Notification';

const CodeBlock = ({ code }) => {
  const [message, setMessage] = useState('');
  const TextareaRef = useRef();
  const handleCopyToClipboard = () => {
    let res;
    if (TextareaRef.current) res = copyToClipboard(TextareaRef.current)
    if (res) setMessage(res);
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('');
      }, 1000);
    }
  }, [message]);

  return (
    <CodeBlockStyled>
      <div className="icon-container">
        <Notification message={message} />
        <FontAwesomeIcon icon={faCopy} className="icon" onClick={() => handleCopyToClipboard()} />
      </div>
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
