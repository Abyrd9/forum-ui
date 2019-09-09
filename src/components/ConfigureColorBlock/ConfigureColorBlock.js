/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { ConfigureColorBlockContainer, PaletteBlock } from './ConfigureColorBlock.styles';
import PencilIcon from '../Icons/PencilIcon';
import EditIcon from '../Icons/EditIcon';
import TitleInput from '../TitleInput/TitleInput';
import generatePalette from '../../helpers/generatePalette';

const ConfigureColorBlock = ({
  title,
  value,
  draft,
  palette,
  flat,
  index,
  handleChangeTitle,
  handleChangeDraft,
  handleEditColor,
  handleRemoveColor,
}) => {
  const handleOnChangeDraft = ({ target }) => {
    const val = target.value;
    const isHex = /^#[0-9a-zA-Z]{0,6}$/.test(val);
    if (isHex) {
      handleChangeDraft(target.value);
    }
  };

  const handleOnBlurDraft = ({ target }) => {
    const val = target.value;
    const isHex = /^#[0-9a-zA-Z]{6}$/.test(val);
    if (val === '#') {
      handleRemoveColor();
    } else if (isHex) {
      handleEditColor({ title, draft: val, value: val, palette: generatePalette(val) });
    } else {
      handleEditColor({ title, draft: val, value: '#F1F1F0', flat: true, palette: '#F1F1F0' });
    }
  };

  const handleOnChangeTitle = ({ target }) => {
    handleChangeTitle(target.value);
  };

  const handleOnBlurTitle = ({ target }) => {
    let val = target.value;
    if (val === '') val = `color${index + 1}`;
    handleChangeTitle(val);
  };

  return (
    <ConfigureColorBlockContainer hex={value} palette={palette} flat={flat}>
      <label className="configure-color-block__title-block">
        <TitleInput value={title} onChange={handleOnChangeTitle} onBlur={handleOnBlurTitle} />
        <EditIcon className="configure-color-block__title-icon" />
      </label>
      <label className="configure-color-block__color-block">
        <span className="configure-color-block__color-icon-container">
          <PencilIcon className="configure-color-block__color-icon" />
        </span>
        <input
          value={draft}
          onChange={handleOnChangeDraft}
          onBlur={handleOnBlurDraft}
          className="configure-color-block__color-input"
        />
      </label>
      <div className="configure-color-block__palette-block">
        {flat ? (
          <PaletteBlock color={palette} />
        ) : (
          Object.entries(palette).map(([key, color]) => {
            return <PaletteBlock color={color}>{key}</PaletteBlock>;
          })
        )}
      </div>
    </ConfigureColorBlockContainer>
  );
};

ConfigureColorBlock.defaultProps = {
  title: '',
  value: '',
  draft: '',
  palette: {},
  flat: false,
  handleChangeTitle: () => {},
  handleChangeDraft: () => {},
  handleEditColor: () => {},
  handleRemoveColor: () => {},
};

ConfigureColorBlock.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  draft: PropTypes.string,
  palette: PropTypes.shape({}),
  flat: PropTypes.bool,
  handleChangeTitle: PropTypes.func,
  handleChangeDraft: PropTypes.func,
  handleEditColor: PropTypes.func,
  handleRemoveColor: PropTypes.func,
};

export default ConfigureColorBlock;
