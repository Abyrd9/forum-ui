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
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
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
