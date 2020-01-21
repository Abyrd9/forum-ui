/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import chroma from 'chroma-js';
import { ColorBlockContainer, PaletteBlock } from './ColorBlock.styles';
import buildColorPalette from '../../../../../helpers/buildColorPalette';
import PencilIcon from '../../../../Utilities/Icons/PencilIcon';
import Transition from '../../../../Utilities/Transition';
import TitleInput from '../TitleInput';
import PaletteToggle from '../PaletteToggle';
import DeleteOverlay from '../DeleteOverlay';
import AddButton from '../AddButton';
import DeleteButton from '../DeleteButton';

const isPossibleHex = /^$|^#([A-Fa-f0-9]{0,6})$/i;

const ColorBlock = ({
  colorId,
  colorObj,
  handleUpdateColorObj,
  handleCreateColorObj,
  isCreator,
}) => {
  const [deleteOverlayVisible, setDeleteOverlayVisible] = useState(false);
  const { title, color, palette } = colorObj;

  const flat = Object.keys(palette).length === 1 && Object.keys(palette)[0] === '400';
  const [isFlat, toggleIsFlat] = useState(flat);
  useEffect(() => {
    const newPalette = isFlat ? { 400: color } : buildColorPalette(color);
    handleUpdateColorObj(colorId, { ...colorObj, palette: newPalette });
  }, [isFlat]);

  const [inProgress, updateInProgress] = useState(palette.inProgress);
  useEffect(() => {
    updateInProgress(palette.inProgress);
  }, [palette.inProgress]);

  const handleUpdateTitle = event => {
    const { value = '' } = event.target;
    handleUpdateColorObj(colorId, { ...colorObj, title: value });
  };

  const [colorDraft, setColorDraft] = useState(color);
  const handleUpdateDraft = event => {
    const { value = '' } = event.target;
    const val = colorDraft.length === 0 ? `#${value}` : value;
    if (isPossibleHex.test(val)) setColorDraft(val);
  };

  const createColor = () => {
    if (chroma.valid(color)) {
      setColorDraft('');
      handleCreateColorObj({
        title,
        color,
        palette: isFlat ? { 400: color } : buildColorPalette(color),
      });
    }
  };

  const handleKeyPress = event => {
    if (isCreator && event.key === 'Enter') createColor();
  };

  useEffect(() => {
    handleUpdateColorObj(colorId, {
      ...colorObj,
      color: colorDraft,
      palette: isFlat ? { 400: color } : buildColorPalette(color),
    });
  }, [colorDraft]);

  return (
    <ColorBlockContainer color={color} inProgress={inProgress}>
      <Transition show={deleteOverlayVisible}>
        <DeleteOverlay
          handleOnClose={() => setDeleteOverlayVisible(false)}
          handleOnDelete={() => handleUpdateColorObj(colorId)}
        />
      </Transition>
      <div className="title-section">
        <TitleInput
          placeholder={isCreator ? '' : ''}
          value={title}
          handleOnChange={handleUpdateTitle}
        />
        <PaletteToggle
          color={color}
          isFlat={isFlat}
          toggleIsFlat={toggleIsFlat}
          disabled={inProgress}
        />
        {isCreator ? (
          <AddButton handleOnClick={() => createColor()} disabled={inProgress} />
        ) : (
          <DeleteButton handleOnClick={() => setDeleteOverlayVisible(true)} />
        )}
      </div>
      <label className="color-block__color-block">
        <span className="color-block__color-icon-container">
          <PencilIcon className="color-block__color-icon" />
        </span>
        <input
          value={colorDraft}
          onKeyPress={handleKeyPress}
          onChange={handleUpdateDraft}
          className="color-block__color-input"
          placeholder="#000000"
        />
      </label>
      <div className="color-block__palette-block">
        {inProgress ? (
          <PaletteBlock inProgress={inProgress} />
        ) : (
          <>
            {palette &&
              Object.entries(palette).map(([key, shade]) => {
                return (
                  <PaletteBlock color={shade} isSingleColor={Object.keys(palette).length === 1}>
                    {key}
                  </PaletteBlock>
                );
              })}
          </>
        )}
      </div>
    </ColorBlockContainer>
  );
};

ColorBlock.defaultProps = {
  colorId: '',
  colorObj: {
    title: '',
    color: '',
    palette: {},
  },
  handleUpdateColorObj: () => {},
  handleCreateColorObj: () => {},
  isCreator: false,
};

ColorBlock.propTypes = {
  colorId: PropTypes.string,
  colorObj: PropTypes.shape({
    title: PropTypes.string,
    color: PropTypes.string,
    palette: PropTypes.objectOf(PropTypes.string),
  }),
  handleUpdateColorObj: PropTypes.func,
  handleCreateColorObj: PropTypes.func,
  isCreator: PropTypes.bool,
};

export default ColorBlock;
