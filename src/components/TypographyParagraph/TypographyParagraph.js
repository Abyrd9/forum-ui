import React from "react";
import PropTypes from "prop-types";
import { TypographyParagraphStyled } from "./TypographyParagraph.styles";

const TypographyParagraph = ({ fontFamily }) => {
  return (
    <TypographyParagraphStyled fontFamily={fontFamily}>
      <p className="typography-paragraph-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p className="typography-paragraph-text typography-paragraph-text--bold">
        <b>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </b>
      </p>
      <p className="typography-paragraph-text typography-paragraph-text--italic">
        <i>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </i>
      </p>
    </TypographyParagraphStyled>
  );
};

TypographyParagraph.defaultProps = {
  fontFamily: ""
};

TypographyParagraph.propTypes = {
  fontFamily: PropTypes.string
};

export default TypographyParagraph;
