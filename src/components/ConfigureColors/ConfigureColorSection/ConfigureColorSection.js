/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { ConfigureColorSectionContainer } from './ConfigureColorSection.styles';
import ConfigureColorBlock from '../ConfigureColorBlock';
import Row from '../../../library/ForumGrid/Row';
import Column from '../../../library/ForumGrid/Column';
import { INITIAL_COLORS, INITIAL_CREATOR } from '../../../constants';
import generateUniqueKey from '../../../helpers/generateUniqueKey';

const ConfigureColorSection = () => {
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
    <ConfigureColorSectionContainer>
      <Row stretch>
        {Object.entries(colors)
          .slice(1)
          .map(([key, colorObj]) => (
            <Column xsUp={12} mdUp={6} lgUp={4}>
              <ConfigureColorBlock
                key={key}
                colorId={key}
                colorObj={colorObj}
                handleUpdateColorObj={handleUpdateColorObj}
              />
            </Column>
          ))}
        <Column xsUp={12} mdUp={6} lgUp={4}>
          <ConfigureColorBlock
            key="creator"
            colorId="creator"
            colorObj={colors.creator}
            handleUpdateColorObj={handleUpdateColorObj}
            handleCreateColorObj={handleCreateColorObj}
            isCreator
          />
        </Column>
      </Row>
    </ConfigureColorSectionContainer>
  );
};

export default ConfigureColorSection;
