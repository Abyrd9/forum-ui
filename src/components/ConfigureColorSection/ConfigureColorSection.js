import React, { useReducer } from 'react';
import generatePalette from '../../helpers/generatePalette';

import { ConfigureColorSectionContainer } from './ConfigureColorSection.styles';
import ConfigureColorBlock from '../ConfigureColorBlock/ConfigureColorBlock';
import Row from '../../library/ForumGrid/Row';
import Column from '../../library/ForumGrid/Column';

const palettes = [
  {
    title: 'primary',
    flat: false,
    ignore: false,
    draft: '#84DCC6',
    value: '#84DCC6',
    palette: generatePalette('#84DCC6'),
  },
  {
    title: 'secondary',
    flat: false,
    ignore: false,
    draft: '#FE5F55',
    value: '#FE5F55',
    palette: generatePalette('#FE5F55'),
  },
  {
    title: 'tertiary',
    flat: false,
    ignore: false,
    draft: '#006989',
    value: '#006989',
    palette: generatePalette('#006989'),
  },
  {
    title: 'neutral',
    flat: false,
    ignore: false,
    draft: '#BEBEBE',
    value: '#BEBEBE',
    palette: generatePalette('#BEBEBE'),
  },
];

// const flats = [
//   { title: 'black', draft: '#0C0C0C', value: '#0C0C0C', palette: '#0C0C0C' },
//   { title: 'white', draft: '#F1F1F0', value: '#F1F1F0', palette: '#F1F1F0' },
// ];

const reducer = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'ADD_COLOR_ITEM':
      return [...newState, action.payload];
    case 'REMOVE_COLOR_ITEM':
      return newState.filter((_, index) => index !== action.index);
    case 'EDIT_COLOR_ITEM':
      newState[action.index] = action.payload;
      return newState;
    case 'EDIT_COLOR_TITLE':
      newState[action.index].title = action.value;
      return newState;
    case 'EDIT_COLOR_DRAFT':
      newState[action.index].draft = action.value;
      return newState;
    default:
      return state;
  }
};

const ConfigureColorSection = () => {
  const [state, dispatch] = useReducer(reducer, palettes);
  // console.log(state);
  return (
    <ConfigureColorSectionContainer>
      <Row stretch>
        {state.map((colorBlock, index) => (
          <Column col={4}>
            <ConfigureColorBlock
              handleChangeTitle={value => dispatch({ type: 'EDIT_COLOR_TITLE', index, value })}
              handleChangeDraft={value => dispatch({ type: 'EDIT_COLOR_DRAFT', index, value })}
              handleEditColor={payload => dispatch({ type: 'EDIT_COLOR_ITEM', index, payload })}
              handleRemoveColor={() => dispatch({ type: 'REMOVE_COLOR_ITEM', index })}
              handleAddColor={payload => dispatch({ type: 'ADD_COLOR_ITEM', payload })}
              title={colorBlock.title}
              value={colorBlock.value}
              draft={colorBlock.draft}
              palette={colorBlock.palette}
              flat={colorBlock.flat}
              index={index}
            />
          </Column>
        ))}
        <Column col={4}>
          <ConfigureColorBlock
            handleAddColor={payload => dispatch({ type: 'ADD_COLOR_ITEM', payload })}
            title="Create New Color"
            palette="#F1F1F0"
            index={state.length}
            creator
            flat
          />
        </Column>
      </Row>
    </ConfigureColorSectionContainer>
  );
};

export default ConfigureColorSection;
