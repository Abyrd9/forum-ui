/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ConfigureColorBlockContainer, PaletteBlock } from './ConfigureColorBlock.styles';
import PencilIcon from '../../Icons/PencilIcon';
import TitleInput from './components/TitleInput';
import buildColorPalette from '../../../helpers/buildColorPalette';
import PaletteToggle from './components/PaletteToggle';
import DeleteOverlay from './components/DeleteOverlay/DeleteOverlay';
import DeleteButton from './components/DeleteButton';

const isPossibleHex = /^$|^#([A-Fa-f0-9]{0,6})$/i;

const ConfigureColorBlock = ({ colorId, colorObj, handleUpdateColorObj }) => {
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

  const handleUpdateTitle = ({ target: { value = '' } }) => {
    handleUpdateColorObj(colorId, { ...colorObj, title: value });
  };

  const [draft, setDraft] = useState(color);
  const handleUpdateDraft = ({ target: { value = '' } }) => {
    const val = draft.length === 0 ? `#${value}` : value;
    if (isPossibleHex.test(val)) setDraft(val);
  };

  useEffect(() => {
    handleUpdateColorObj(colorId, {
      ...colorObj,
      color: draft,
      palette: buildColorPalette(draft),
    });
  }, [draft]);

  return (
    <ConfigureColorBlockContainer color={color} inProgress={inProgress}>
      {deleteOverlayVisible && (
        <DeleteOverlay
          handleOnClose={() => setDeleteOverlayVisible(false)}
          handleOnDelete={() => handleUpdateColorObj(colorId)}
        />
      )}
      <div className="title-section">
        <TitleInput value={title} handleOnChange={handleUpdateTitle} />
        <PaletteToggle color={color} isFlat={isFlat} toggleIsFlat={toggleIsFlat} />
        <DeleteButton handleOnClick={() => setDeleteOverlayVisible(true)} />
      </div>
      <label className="color-block__color-block">
        <span className="color-block__color-icon-container">
          <PencilIcon className="color-block__color-icon" />
        </span>
        <input
          value={draft}
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
    </ConfigureColorBlockContainer>
  );
};

ConfigureColorBlock.defaultProps = {
  colorId: '',
  colorObj: {
    title: '',
    color: '',
    palette: {},
  },
  handleUpdateColorObj: () => {},
};

ConfigureColorBlock.propTypes = {
  colorId: PropTypes.string,
  colorObj: PropTypes.shape({
    title: PropTypes.string,
    color: PropTypes.string,
    palette: PropTypes.objectOf(PropTypes.string),
  }),
  handleUpdateColorObj: PropTypes.func,
};

export default ConfigureColorBlock;
