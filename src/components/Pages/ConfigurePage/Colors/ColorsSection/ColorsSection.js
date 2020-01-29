/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import { ColorsSectionContainer } from './ColorsSection.styles';
import ColorBlock from '../ColorBlock';
import Row from '../../../../../library/ForumGrid/Row';
import Column from '../../../../../library/ForumGrid/Column';
import generateUniqueKey from '../../../../../helpers/generateUniqueKey';
import { StoreContext, ACTION_TYPES } from '../../../../../assets/StoreProvider';

const ColorsSection = () => {
  const { store, dispatch } = useContext(StoreContext);
  const { colors } = store;

  const handleUpdateColorObj = (colorId, colorObj) => {
    if (colorObj) dispatch({ type: ACTION_TYPES.UPDATE_COLOR, colorId, colorObj });
    if (!colorObj) dispatch({ type: ACTION_TYPES.REMOVE_COLOR, colorId });
  };

  const handleCreateColorObj = colorObj => {
    const colorsArr = Object.keys(colors).reduce((acc, key) => [...acc, { key }], []);
    const key = generateUniqueKey(colorsArr);
    if (colorObj) dispatch({ type: ACTION_TYPES.ADD_COLOR, key, colorObj });
  };

  return (
    <ColorsSectionContainer>
      <Row stretch>
        {Object.entries(colors)
          .slice(1)
          .map(([key, colorObj]) => (
            <Column xsUp={12} mdUp={6} lgUp={4}>
              <ColorBlock
                key={key}
                colorId={key}
                colorObj={colorObj}
                handleUpdateColorObj={handleUpdateColorObj}
              />
            </Column>
          ))}
        <Column xsUp={12} mdUp={6} lgUp={4}>
          {/* <ColorBlock
            key="creator"
            colorId="creator"
            colorObj={colors.creator}
            handleUpdateColorObj={handleUpdateColorObj}
            handleCreateColorObj={handleCreateColorObj}
            isCreator
          /> */}
        </Column>
      </Row>
    </ColorsSectionContainer>
  );
};

export default ColorsSection;
