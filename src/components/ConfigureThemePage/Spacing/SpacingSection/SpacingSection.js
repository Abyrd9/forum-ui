import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SpacingSectionStyled } from './SpacingSection.styles';
import Row from '../../../../library/ForumGrid/Row';
import Column from '../../../../library/ForumGrid/Column';
import InputContainer from '../../../InputContainer';
import Counter from '../../../../library/Counter';
import ExampleCard from '../ExampleCard';
import SpacingLegend from '../SpacingLegend';
import { getSizingVariations } from '../../../../helpers/buildTheme';
import ContentContainer from '../../../ContentContainer';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import Tabs from '../../../../library/Tabs';

const tabs = [
  {
    name: 'base-spacing',
    value: 'Base Font',
    content: null,
  },
  {
    name: 'spacing-ratio-lower',
    value: 'Lower Ratio',
    content: null,
  },
  {
    name: 'spacing-ratio-upper',
    value: 'Upper Ratio',
    content: null,
  },
];

const SpacingSection = () => {
  const [config, updateConfig] = useState({
    baseSize: 16,
    upperRatio: 1,
    lowerRatio: 1,
  });

  const [tabIndex, setTabIndex] = useState(0);
  const handleSetTabIndex = (_, { index }) => setTabIndex(index);
  const mobile = window.matchMedia('(max-width: 768px)');
  const isMobile = useMediaQuery(mobile);

  const BaseSize = (
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
  );

  const LowerRatio = (
    <InputContainer title="Spacing Size Ratio (100 - 300)">
      <Counter
        readOnly
        value={config.lowerRatio}
        multiplier={1}
        min={1}
        handleOnChange={({ target }) => updateConfig({ ...config, lowerRatio: target.value })}
      />
    </InputContainer>
  );

  const UpperRatio = (
    <InputContainer title="Spacing Size Ratio (500 - 800)">
      <Counter
        readOnly
        value={config.upperRatio}
        multiplier={1}
        min={1}
        handleOnChange={({ target }) => updateConfig({ ...config, upperRatio: target.value })}
      />
    </InputContainer>
  );

  return (
    <SpacingSectionStyled>
      {isMobile ? (
        <Row stretch>
          <Column col={12}>
            <Tabs tabsList={tabs} tabActiveIndex={tabIndex} handleTabClick={handleSetTabIndex} />
          </Column>
          <Column>
            {tabIndex === 0 && BaseSize}
            {tabIndex === 1 && LowerRatio}
            {tabIndex === 2 && UpperRatio}
          </Column>
        </Row>
      ) : (
        <Row stretch>
          <Column shrink>{BaseSize}</Column>
          <Column shrink>{LowerRatio}</Column>
          <Column shrink>{UpperRatio}</Column>
        </Row>
      )}

      <Row stretch>
        <Column>
          <ContentContainer title="Spacing Size Legend">
            <SpacingLegend
              spacingSizingArray={Object.entries(
                getSizingVariations(config.baseSize, {
                  upper: config.upperRatio,
                  lower: config.lowerRatio,
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
              upper: config.upperRatio,
              lower: config.lowerRatio,
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
