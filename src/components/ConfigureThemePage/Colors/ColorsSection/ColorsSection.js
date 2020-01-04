/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { ColorsSectionContainer } from './ColorsSection.styles';
import ColorBlock from '../ColorBlock';
import Row from '../../../../library/ForumGrid/Row';
import Column from '../../../../library/ForumGrid/Column';
import { INITIAL_COLORS, INITIAL_CREATOR } from '../../../../constants';
import generateUniqueKey from '../../../../helpers/generateUniqueKey';

const ColorsSection = () => {
  const [colors, updateColors] = useState(INITIAL_COLORS);

  const handleUpdateColorObj = (colorId, colorObj) => {
    const colorsListObj = { ...colors };
    if (colorObj) colorsListObj[colorId] = colorObj;
    if (!colorObj) delete colorsListObj[colorId];
    updateColors(colorsListObj);
  };

  const handleCreateColorObj = newColorObj => {
    const colorsArr = Object.keys(colors).reduce((acc, key) => [...acc, { key }], []);
    const newKey = generateUniqueKey(colorsArr);
    const colorsListObj = { ...colors };
    if (newColorObj) colorsListObj[newKey] = newColorObj;
    colorsListObj.creator = INITIAL_CREATOR;
    updateColors(colorsListObj);
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
          <ColorBlock
            key="creator"
            colorId="creator"
            colorObj={colors.creator}
            handleUpdateColorObj={handleUpdateColorObj}
            handleCreateColorObj={handleCreateColorObj}
            isCreator
          />
        </Column>
      </Row>
    </ColorsSectionContainer>
  );
};

export default ColorsSection;
