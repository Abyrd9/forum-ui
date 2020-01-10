import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SpacingSectionStyled } from './SpacingSection.styles';
import Row from '../../../../library/ForumGrid/Row';
import Column from '../../../../library/ForumGrid/Column';
import InputContainer from '../../Typography/InputContainer';
import Counter from '../../../../library/Counter';
import ExampleCard from '../ExampleCard';
import SpacingLegend from '../SpacingLegend';
import { getSizingVariations } from '../../../../helpers/buildTheme';
import ContentContainer from '../../Typography/ContentContainer';

const SpacingSection = () => {
  const [config, updateConfig] = useState({
    baseSize: 16,
    upperRatio: (1.5).toFixed(2),
    lowerRatio: (1.5).toFixed(2),
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
              min={2}
              max={50}
              handleOnChange={({ target }) => updateConfig({ ...config, baseSize: target.value })}
            />
          </InputContainer>
        </Column>
        <Column shrink smDownGutter={24}>
          <InputContainer title="Spacing Size Ratio (100 - 300)">
            <Counter
              readOnly
              value={config.lowerRatio}
              multiplier={0.05}
              min={1}
              max={2}
              handleOnChange={({ target }) => updateConfig({ ...config, lowerRatio: target.value })}
            />
          </InputContainer>
        </Column>
        <Column shrink smDownGutter={24}>
          <InputContainer title="Spacing Size Ratio (500 - 800)">
            <Counter
              readOnly
              value={config.upperRatio}
              multiplier={0.05}
              min={1}
              max={2}
              handleOnChange={({ target }) => updateConfig({ ...config, upperRatio: target.value })}
            />
          </InputContainer>
        </Column>
      </Row>
      <Row stretch>
        <Column>
          <ContentContainer title="Spacing Size Legend">
            <SpacingLegend
              spacingSizingArray={Object.entries(
                getSizingVariations(config.baseSize, {
                  positive: config.upperRatio,
                  negative: config.lowerRatio,
                }),
              )}
            />
          </ContentContainer>
        </Column>
      </Row>
      <Row stretch>
        <Column>
          <ExampleCard
            spacing={getSizingVariations(config.baseSize, {
              positive: config.upperRatio,
              negative: config.lowerRatio,
            })}
          />
        </Column>
      </Row>
    </SpacingSectionStyled>
  );
};

SpacingSection.defaultProps = {};

SpacingSection.propTypes = {};

export default SpacingSection;
