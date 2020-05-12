import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const ErrorBlockStyled = styled.div`
  ${({ theme = {} }) => {
    const { spacing = {}, colors = {} } = theme;
    return css`
      background-color: #ffffff;
      border-radius: 5px;
      width: 100%;
      min-height: 280px;
      height: calc(100% - ${spacing[600]});
      margin-bottom: ${spacing[600]};
      border: 2px dashed ${colors.neutral[200]};
      display: flex;
      justify-content: center;
      align-items: center;
      .error-message {
        max-width: 240px;
        font-weight: bold;
        color: ${colors.neutral[500]};
        text-align: center;
      }
    `;
  }}
`;

const ErrorBlock = ({ text }) => {
  return (
    <ErrorBlockStyled>
      <p className="error-message">{text}</p>
    </ErrorBlockStyled>
  );
};

ErrorBlock.defaultProps = {
  text: ""
};

ErrorBlock.propTypes = {
  text: PropTypes.string
};

export default ErrorBlock;
