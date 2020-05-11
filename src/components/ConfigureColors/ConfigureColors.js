import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import chroma from "chroma-js";
import generate from "project-name-generator";
import { uuid } from "uuidv4";
import { ConfigureColorsStyled } from "./ConfigureColors.styles";
import { StoreContext, ACTION_TYPES } from "../../assets/StoreProvider";
import ColorsConfigureItem from "../ColorsConfigureItem";
import buildColorPalette from "../../helpers/buildColorPalette";
import Row from "../../library/components/ForumGrid/Row";
import Column from "../../library/components/ForumGrid/Column";

const isPossibleHex = /^$|^#([A-Fa-f0-9]{0,6})$/i;
const isHex = /^#([A-Fa-f0-9]{6})$/i;

const ConfigureColors = ({ colors }) => {
  const { dispatch } = useContext(StoreContext);
  const [colorObjDraft, setColorObjDraft] = useState({
    color: "",
    isFlat: false,
    sortOrder: Object.keys(colors).length + 1,
    palette: {},
    title: "New Color"
  });

  const handleUpdateTitle = (colorId, title) => {
    if (/^\S*$/.test(title)) {
      if (colorId === "creator") {
        setColorObjDraft({ ...colorObjDraft, title });
      } else {
        dispatch({ type: ACTION_TYPES.UPDATE_COLOR_TITLE, colorId, title });
      }
    }
  };

  const handleUpdateColor = (colorId, color) => {
    let value = color;
    // When typing, make sure a pound sign is always the first letter
    if (value.length > 0 && value.charAt(0) !== "#") {
      value = `#${color}`;
    }

    if (isPossibleHex.test(value)) {
      // Build a new color palette for every valid color change
      const palette = buildColorPalette(value);

      if (colorId === "creator") {
        setColorObjDraft({ ...colorObjDraft, color: value, palette });
      } else {
        dispatch({
          type: ACTION_TYPES.UPDATE_COLOR_VALUE,
          colorId,
          color: value,
          palette
        });
      }
    }
  };

  const handleToggleIsFlat = (colorId, color, toggle) => {
    if (isPossibleHex.test(color) && chroma.valid(color)) {
      const palette = toggle ? { 400: color } : buildColorPalette(color);

      if (colorId === "creator") {
        setColorObjDraft({ ...colorObjDraft, isFlat: toggle, palette });
      } else {
        dispatch({
          type: ACTION_TYPES.TOGGLE_COLOR_IS_FLAT,
          colorId,
          toggle,
          palette
        });
      }
    }
  };

  const handleDeleteColor = colorId => {
    dispatch({
      type: ACTION_TYPES.REMOVE_COLOR_ITEM,
      colorId
    });
  };

  const handleAddColor = () => {
    const { color = "", title = "" } = colorObjDraft;
    if (isHex.test(color) && chroma.valid(color)) {
      let colorTitle = title;
      if (colorTitle === "New Color") {
        colorTitle = generate({ words: 2, alliterative: true }).dashed;
      }
      const colorId = uuid();
      const order = Object.keys(colors).length + 1; // Make sure order # is right
      dispatch({
        type: ACTION_TYPES.ADD_COLOR_ITEM,
        colorId,
        colorObj: { ...colorObjDraft, title: colorTitle, sortOrder: order }
      });
      setColorObjDraft({
        color: "",
        isFlat: false,
        sortOrder: order + 1, // order needs to be last so add an extra + 1
        palette: {},
        title: "New Color"
      });
    }
  };

  return (
    <ConfigureColorsStyled>
      <Row fillGrid>
        {Object.entries(colors)
          .sort((colorA, colorB) => {
            return colorA[1].sortOrder - colorB[1].sortOrder;
          })
          .map(([key, colorObj]) => (
            <Column key={key} xsUp={12} mdUp={6} lg={4} autoGutter>
              <ColorsConfigureItem
                colorId={key}
                {...colorObj}
                handleUpdateTitle={handleUpdateTitle}
                handleUpdateColor={handleUpdateColor}
                handleToggleIsFlat={handleToggleIsFlat}
                handleDeleteColor={handleDeleteColor}
              />
            </Column>
          ))}
        <Column key="creator" xsUp={12} mdUp={6} lg={4} autoGutter>
          <ColorsConfigureItem
            colorId="creator"
            {...colorObjDraft}
            handleUpdateTitle={handleUpdateTitle}
            handleUpdateColor={handleUpdateColor}
            handleToggleIsFlat={handleToggleIsFlat}
            handleAddColor={handleAddColor}
          />
        </Column>
      </Row>
    </ConfigureColorsStyled>
  );
};

ConfigureColors.defaultProps = {
  themeId: "",
  colors: {}
};

ConfigureColors.propTypes = {
  themeId: PropTypes.string,
  colors: PropTypes.shape({})
};

export default ConfigureColors;
