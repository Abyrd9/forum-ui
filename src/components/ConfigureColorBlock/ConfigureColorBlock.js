/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import produce from 'immer';
import { ConfigureColorBlockContainer, PaletteBlock } from './ConfigureColorBlock.styles';
import PencilIcon from '../Icons/PencilIcon';
import EditIcon from '../Icons/EditIcon';
import TitleInput from '../TitleInput/TitleInput';
import buildColorPalette from '../../helpers/buildColorPalette';

const isPossibleHex = /^$|^#([A-Fa-f0-9]{0,6})$/;
const isValidHex = /^#([A-Fa-f0-9]{6})$/;

const ConfigureColorBlock = ({
  colorPaletteObj,
  handleEditColorPaletteObj,
  handleRemoveColorPaletteObj,
  handleAddColorPaletteObj,
  isCreator,
  isRequired,
  index,
}) => {
  const { title, value, inProgress, palette } = colorPaletteObj;
  const isFlatColor = palette && Object.values(palette).length === 1;

  const [colorValueDraft, updateColorValueDraft] = useState(value);
  useEffect(() => {
    updateColorValueDraft(value);
  }, [colorPaletteObj]);

  const handleOnChange = callback => ({ target = {} }) => {
    const newPaletteObj = produce(colorPaletteObj, draft => callback(draft, target.value));
    let paletteType = 'custom';
    if (isRequired) paletteType = 'required';
    if (isCreator) {
      if (!newPaletteObj.inProgress) {
        handleAddColorPaletteObj(newPaletteObj, index, paletteType);
        handleEditColorPaletteObj(
          {
            title: 'Create New Color',
            value: '',
            inProgress: true,
            palette: null,
          },
          index,
          'creator',
        );
      }
    } else if (newPaletteObj.value === '') {
      handleRemoveColorPaletteObj(newPaletteObj, index, paletteType);
    } else {
      handleEditColorPaletteObj(newPaletteObj, index, paletteType);
    }
  };

  const onChangeTitle = handleOnChange((draft, inputVal) => {
    draft.title = inputVal;
    return draft;
  });

  const onBlurTitle = handleOnChange((draft, inputVal) => {
    let val = inputVal || '';
    if (val === '') val = `color${index + 1}`;
    draft.title = val;
    return draft;
  });

  const onChangeColorVal = ({ code = '', target = {} }) => {
    let val = target.value;
    if (code.toLowerCase() !== 'backspace') {
      if (val.length === 1 && val !== '#') val = `#${val}`;
    }
    if (isPossibleHex.test(val)) updateColorValueDraft(val);
  };

  const onBlurColorVal = handleOnChange((draft, inputVal) => {
    draft.value = inputVal;
    draft.inProgress = true;
    draft.palette = null;
    if (isValidHex.test(inputVal)) {
      draft.inProgress = false;
      draft.palette = buildColorPalette(inputVal);
    }
    if (isCreator) draft.title = `Color Title`
    return draft;
  });

  return (
    <ConfigureColorBlockContainer
      colorValue={value}
      colorPalette={palette}
      inProgress={inProgress}
      isFlatColor={isFlatColor}
    >
      <label className="color-block__title-block">
        <TitleInput value={title} onChange={onChangeTitle} onBlur={onBlurTitle} />
        <EditIcon className="color-block__title-icon" />
      </label>
      <label className="color-block__color-block">
        <span className="color-block__color-icon-container">
          <PencilIcon className="color-block__color-icon" />
        </span>
        <input
          value={colorValueDraft}
          onChange={onChangeColorVal}
          onBlur={onBlurColorVal}
          className="color-block__color-input"
          placeholder="#######"
        />
      </label>
      <div className="color-block__palette-block">
        {inProgress || isFlatColor ? (
          <PaletteBlock inProgress={inProgress} color={palette ? palette[400] : ''} />
        ) : (
          palette &&
          Object.entries(palette).map(([key, color]) => {
            return <PaletteBlock color={color}>{key}</PaletteBlock>;
          })
        )}
      </div>
    </ConfigureColorBlockContainer>
  );
};

ConfigureColorBlock.defaultProps = {
  colorPaletteObj: {
    title: '',
    value: '',
    inProgress: false,
    palette: {},
  },
};

ConfigureColorBlock.propTypes = {
  colorPaletteObj: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string,
    inProgress: PropTypes.bool,
    palette: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default ConfigureColorBlock;
