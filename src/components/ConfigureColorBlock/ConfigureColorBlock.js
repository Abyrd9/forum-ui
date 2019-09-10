/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ConfigureColorBlockContainer, PaletteBlock } from './ConfigureColorBlock.styles';
import PencilIcon from '../Icons/PencilIcon';
import EditIcon from '../Icons/EditIcon';
import TitleInput from '../TitleInput/TitleInput';
import generatePalette from '../../helpers/generatePalette';

const isHexRegex = /^#[0-9a-zA-Z]{0,6}$/;
const isFullHexRegex = /^#[0-9a-zA-Z]{6}$/;

const genItem = (title, val, flatten = false) => {
  const item = flatten
    ? {
        title,
        flat: true,
        ignore: true,
        draft: val,
        value: '#F1F1F0',
        palette: '#F1F1F0',
      }
    : {
        title,
        flat: false,
        ignore: false,
        draft: val,
        value: val,
        palette: generatePalette(val),
      };
  return item;
};

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
  handleAddColor,
  creator,
}) => {
  const [creatorDraft, setCreatorDraft] = useState('');

  const handleChange = ({ target }, type) => {
    let val = target.value;
    let isHex = isHexRegex.test(val);
    const isFullHex = isFullHexRegex.test(val);

    switch (type) {
      case 'CHANGE_CREATOR_DRAFT':
        if (val.length === 1 && val !== '#') val = `#${val}`;
        isHex = isHexRegex.test(val);
        if (isHex) setCreatorDraft(val);
        break;
      case 'BLUR_CREATOR_DRAFT':
        if (isFullHex) handleAddColor(genItem(`color${index}`, val));
        if (val === '#') setCreatorDraft('');
        break;
      case 'CHANGE_DRAFT':
        if (isFullHex) {
          handleEditColor(genItem(title, val));
        } else if (isHex) {
          handleChangeDraft(val);
        }
        break;
      case 'BLUR_DRAFT':
        if (val === '#') {
          handleRemoveColor();
        } else if (isFullHex) {
          handleEditColor(genItem(title, val));
        } else {
          handleEditColor(genItem(title, val, true));
        }
        break;
      case 'CHANGE_TITLE':
        handleChangeTitle(val);
        break;
      case 'BLUR_TITLE':
        if (val === '') val = `color${index + 1}`;
        handleChangeTitle(val);
        break;
      default:
        break;
    }
  };

  const draftChangeType = creator ? 'CHANGE_CREATOR_DRAFT' : 'CHANGE_DRAFT';
  const draftBlurType = creator ? 'BLUR_CREATOR_DRAFT' : 'BLUR_DRAFT';

  return (
    <ConfigureColorBlockContainer hex={value} palette={palette} flat={flat} creator={creator}>
      <label className="configure-color-block__title-block">
        <TitleInput
          value={title}
          onChange={e => handleChange(e, 'CHANGE_TITLE')}
          onBlur={e => handleChange(e, 'BLUR_TITLE')}
          disabled={creator}
        />
        <EditIcon className="configure-color-block__title-icon" />
      </label>
      <label className="configure-color-block__color-block">
        <span className="configure-color-block__color-icon-container">
          <PencilIcon className="configure-color-block__color-icon" />
        </span>
        <input
          value={creator ? creatorDraft : draft}
          onChange={e => handleChange(e, draftChangeType)}
          onBlur={e => handleChange(e, draftBlurType)}
          className="configure-color-block__color-input"
          placeholder={creator ? '#000000' : ''}
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
