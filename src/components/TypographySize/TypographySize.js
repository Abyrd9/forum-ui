import React from "react";
import PropTypes from "prop-types";
import { TypographySizeStyled, SizeBlock } from "./TypographySize.styles";
import { getSizingVariations } from "../../helpers/buildTheme";

const TypographySize = ({
  title,
  fontFamily,
  baseSize,
  upperRatio,
  lowerRatio
}) => {
  return (
    <TypographySizeStyled>
      <h3 className="typography-title">{title}</h3>
      {Object.entries(
        getSizingVariations(baseSize, {
          upper: upperRatio,
          lower: lowerRatio
        })
      )
        .sort((a, b) => b[0] - a[0])
        .map(([key, fontSize]) => (
          <SizeBlock fontFamily={fontFamily} fontSize={fontSize}>
            Font Size {key}
          </SizeBlock>
        ))}
    </TypographySizeStyled>
  );
};

TypographySize.defaultProps = {
  title: "",
  fontFamily: "",
  baseSize: 16,
  upperRatio: 1,
  lowerRatio: 1
};

TypographySize.propTypes = {
  title: PropTypes.string,
  fontFamily: PropTypes.string,
  baseSize: PropTypes.number,
  upperRatio: PropTypes.number,
  lowerRatio: PropTypes.number
};

export default TypographySize;
