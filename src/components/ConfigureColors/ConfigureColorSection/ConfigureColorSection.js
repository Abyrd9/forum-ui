/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { ConfigureColorSectionContainer } from './ConfigureColorSection.styles';
import ConfigureColorBlock from '../ConfigureColorBlock';
import Row from '../../../library/ForumGrid/Row';
import Column from '../../../library/ForumGrid/Column';
import { INITIAL_COLORS } from '../../../constants';

const ConfigureColorSection = () => {
  const [colors, updateColors] = useState(INITIAL_COLORS);

  const handleUpdateColorObj = (key, value) => {
    const obj = { ...colors };
    if (value) obj[key] = value;
    if (!value) delete obj[key];
    updateColors(obj);
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
            isCreator
          />
        </Column>
      </Row>
    </ConfigureColorSectionContainer>
  );
};

export default ConfigureColorSection;
