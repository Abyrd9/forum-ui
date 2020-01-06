import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SpacingSectionStyled } from './SpacingSection.styles';
import Row from '../../../../library/ForumGrid/Row';
import Column from '../../../../library/ForumGrid/Column';
import InputContainer from '../../Typography/InputContainer';
import Counter from '../../../../library/Counter';
import ExampleCard from '../ExampleCard/ExampleCard';
import { getSizingVariations } from '../../../../helpers/buildTheme';

const SpacingSection = () => {
  const [config, updateConfig] = useState({
    baseSize: 16,
    ratio: (1.5).toFixed(2),
  });

  return (
    <SpacingSectionStyled>
      <Row stretch>
        <Column shrink smDown={12} smDownGutter={24}>
          <InputContainer title="Base Spacing Size">
            <Counter
              readOnly
              roundToWholeNumber
              value={config.baseSize}
              multiplier={2}
              handleOnChange={({ target }) => updateConfig({ ...config, baseSize: target.value })}
            />
          </InputContainer>
        </Column>
        <Column shrink smDownGutter={24}>
          <InputContainer title="Spacing Size Ratio (500 - 800)">
            <Counter
              readOnly
              value={config.ratio}
              multiplier={0.05}
              handleOnChange={({ target }) => updateConfig({ ...config, ratio: target.value })}
            />
          </InputContainer>
        </Column>
      </Row>
      <Row>
        <ExampleCard
          spacing={getSizingVariations(config.baseSize, {
            positive: config.ratio,
            negative: config.ratio,
          })}
        />
      </Row>
    </SpacingSectionStyled>
  );
};

SpacingSection.defaultProps = {};

SpacingSection.propTypes = {};

export default SpacingSection;
