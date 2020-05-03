import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/vs2015";
import { faCopy } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import copyToClipboard from "../../helpers/copyToClipboard";
import Transition from "../Utilities/Transition";
import Loading from "../Utilities/Loading";
import {
  CopyCodeBlockStyled,
  CopyCodeNotification
} from "./CopyCodeBlock.styles";

const CopyCodeBlock = ({ code }) => {
  const [loading, setLoading] = useState(true);

  const [message, setMessage] = useState("");
  const [show, toggleShow] = useState(false);
  const TextareaRef = useRef();
  const handleCopyToClipboard = () => {
    let res;
    if (TextareaRef.current) res = copyToClipboard(TextareaRef.current);
    if (res) {
      setMessage(res);
      toggleShow(true);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        toggleShow(false);
      }, 1000);
    }
  }, [show]);

  return (
    <CopyCodeBlockStyled>
      {loading && <Loading />}
      <div className="icon-container">
        <Transition show={show}>
          <CopyCodeNotification>{message}</CopyCodeNotification>
        </Transition>
        <FontAwesomeIcon
          icon={faCopy}
          className="icon"
          onClick={() => handleCopyToClipboard()}
        />
      </div>
      <SyntaxHighlighter language="json" style={style}>
        {code}
      </SyntaxHighlighter>
      <div className="copy-portal">
        <textarea ref={TextareaRef} value={code} />
      </div>
    </CopyCodeBlockStyled>
  );
};

CopyCodeBlock.defaultProps = {
  code: "const thing = () => {}"
};

CopyCodeBlock.propTypes = {
  code: PropTypes.string
};

export default CopyCodeBlock;
