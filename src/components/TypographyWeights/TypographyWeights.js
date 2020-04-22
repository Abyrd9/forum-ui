import React from "react";
import PropTypes from "prop-types";
import {
  TypographyWeightsStyled,
  WeightBlock
} from "./TypographyWeights.styles";

const TypographyWeights = ({ fontFamily, fontVariants }) => {
  return (
    <TypographyWeightsStyled>
      <ul className="font-variant-list">
        {fontVariants
          .slice()
          .sort((a, b) => b - a)
          .map(weight => (
            <WeightBlock fontFamily={fontFamily} fontWeight={weight}>
              <h3
                style={{
                  fontWeight: weight,
                  lineHeight: 1,
                  fontFamily
                }}
              >
                Aa
              </h3>
              <p
                style={{
                  fontWeight: weight,
                  lineHeight: 1,
                  fontFamily,
                  marginBottom: "8px"
                }}
              >
                {weight}
              </p>
            </WeightBlock>
          ))}
      </ul>
    </TypographyWeightsStyled>
  );
};

TypographyWeights.defaultProps = {
  fontFamily: "",
  fontVariants: []
};

TypographyWeights.propTypes = {
  fontFamily: PropTypes.string,
  fontVariants: PropTypes.arrayOf([PropTypes.string])
};

export default TypographyWeights;
