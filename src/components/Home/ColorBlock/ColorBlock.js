import React from "react";
import PropTypes from "prop-types";
import { ColorBlockStyled, ColorItem } from "./ColorBlock.styles";

const ColorBlock = ({ title, palette }) => {
  const paletteArr = Object.entries(palette);
  return (
    <ColorBlockStyled>
      <h3 className="color-block-title">{title}</h3>
      <ul className="color-block-list">
        {paletteArr.map(([key, value]) => (
          <ColorItem color={value} isFlat={paletteArr.length <= 1}>
            {key}
          </ColorItem>
        ))}
      </ul>
    </ColorBlockStyled>
  );
};

ColorBlock.defaultProps = {
  title: "",
  palette: []
};

ColorBlock.propTypes = {
  title: PropTypes.string,
  palette: PropTypes.arrayOf([PropTypes.string])
};

export default ColorBlock;
