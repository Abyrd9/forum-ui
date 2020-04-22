import React from "react";
import PropTypes from "prop-types";
import { ColorsVisualBlockStyled, ColorItem } from "./ColorsVisualBlock.styles";

const ColorsVisualBlock = ({ title, palette }) => {
  const paletteArr = Object.entries(palette);
  return (
    <ColorsVisualBlockStyled>
      <h3 className="color-block-title">{title}</h3>
      <ul className="color-block-list">
        {paletteArr.map(([key, value]) => (
          <ColorItem color={value} isFlat={paletteArr.length <= 1}>
            {key}
          </ColorItem>
        ))}
      </ul>
    </ColorsVisualBlockStyled>
  );
};

ColorsVisualBlock.defaultProps = {
  title: "",
  palette: []
};

ColorsVisualBlock.propTypes = {
  title: PropTypes.string,
  palette: PropTypes.arrayOf([PropTypes.string])
};

export default ColorsVisualBlock;
