import React from "react";
import PropTypes from "prop-types";
import { SpacingColumnStyled, SpacingBlock } from "./SpacingColumn.styles";
import { getSizingVariations } from "../../helpers/buildTheme";

const SpacingColumn = ({ baseSize, upperRatio, lowerRatio }) => {
  return (
    <SpacingColumnStyled>
      <h3 className="spacing-title">Spacing Values:</h3>
      {Object.entries(
        getSizingVariations(baseSize, {
          upper: upperRatio,
          lower: lowerRatio
        })
      )
        .sort((a, b) => a[0] - b[0])
        .map(([_, spacingSize]) => (
          <SpacingBlock spacingSize={spacingSize}>
            <span className="block" />
            <p className="text">{spacingSize}</p>
          </SpacingBlock>
        ))}
    </SpacingColumnStyled>
  );
};

SpacingColumn.defaultProps = {
  baseSize: 16,
  upperRatio: 4,
  lowerRatio: 1
};

SpacingColumn.propTypes = {
  baseSize: PropTypes.string,
  upperRatio: PropTypes.string,
  lowerRatio: PropTypes.string
};

export default SpacingColumn;
