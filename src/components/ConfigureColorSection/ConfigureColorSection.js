/* eslint-disable no-param-reassign */
import React from 'react';
import { useImmerReducer } from 'use-immer';
import buildColorPalette from '../../helpers/buildColorPalette';
import generateUniqueKey from '../../helpers/generateUniqueKey';
import { ConfigureColorSectionContainer } from './ConfigureColorSection.styles';
import ConfigureColorBlock from '../ConfigureColorBlock/ConfigureColorBlock';
import Row from '../../library/ForumGrid/Row';
import Column from '../../library/ForumGrid/Column';

const palettes = {
  creator: {
    title: 'Create New Color',
    value: '',
    inProgress: true,
    palette: null,
  },
  custom: [
    {
      title: 'primary',
      value: '#84DCC6',
      inProgress: false,
      palette: buildColorPalette('#84DCC6'),
      key: `${generateUniqueKey([])}1`,
    },
    {
      title: 'secondary',
      value: '#FE5F55',
      inProgress: false,
      palette: buildColorPalette('#FE5F55'),
      key: `${generateUniqueKey([])}2`,
    },
    {
      title: 'tertiary',
      value: '#006989',
      inProgress: false,
      palette: buildColorPalette('#006989'),
      key: `${generateUniqueKey([])}3`,
    },
    {
      title: 'neutral',
      value: '#BEBEBE',
      inProgress: false,
      palette: buildColorPalette('#BEBEBE'),
      key: `${generateUniqueKey([])}4`,
    },
  ],
};

const reducer = (draft, action) => {
  const { type = '', paletteType = '', payload = {}, index = null } = action;
  switch (type) {
    case 'ADD_COLOR_PALETTE': {
      const key = `${generateUniqueKey([])}${index}`;
      draft[paletteType] = [...draft[paletteType], { ...payload, key }];
      return draft;
    }
    case 'REMOVE_COLOR_PALETTE': {
      draft[paletteType] = draft[paletteType].filter((_, i) => index !== i);
      return draft;
    }
    case 'EDIT_COLOR_PALETTE': {
      draft[paletteType][index] = payload;
      return draft;
    }
    default:
      return draft;
  }
};

const ConfigureColorSection = () => {
  const [state, dispatch] = useImmerReducer(reducer, palettes);
  const { creator, custom } = state;

  const handleEditColorPaletteObj = (payload, index, paletteType) => {
    dispatch({ type: 'EDIT_COLOR_PALETTE', paletteType, payload, index });
  };

  const handleRemoveColorPaletteObj = (payload, index, paletteType) => {
    dispatch({ type: 'REMOVE_COLOR_PALETTE', paletteType, payload, index });
  };

  const handleAddColorPaletteObj = (payload, index, paletteType) => {
    dispatch({ type: 'ADD_COLOR_PALETTE', paletteType, payload, index });
  };

  return (
    <ConfigureColorSectionContainer>
      <Row stretch>
        {custom.map((colorPaletteObj, index) => (
          <Column xsUp={12} mdUp={6} lgUp={4}>
            <ConfigureColorBlock
              colorPaletteObj={colorPaletteObj}
              handleEditColorPaletteObj={handleEditColorPaletteObj}
              handleRemoveColorPaletteObj={handleRemoveColorPaletteObj}
              key={colorPaletteObj.key}
              index={index}
            />
          </Column>
        ))}
        <Column col={4}>
          <ConfigureColorBlock
            colorPaletteObj={creator}
            handleAddColorPaletteObj={handleAddColorPaletteObj}
            handleEditColorPaletteObj={handleEditColorPaletteObj}
            key="color-creator"
            isCreator
          />
        </Column>
      </Row>
    </ConfigureColorSectionContainer>
  );
};

export default ConfigureColorSection;
