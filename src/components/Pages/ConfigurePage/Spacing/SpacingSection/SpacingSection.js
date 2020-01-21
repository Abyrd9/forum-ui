/* eslint-disable import/no-named-as-default */
import React, { useState, useContext } from 'react';
import { SpacingSectionStyled } from './SpacingSection.styles';
import Row from '../../../../../library/ForumGrid/Row';
import Column from '../../../../../library/ForumGrid/Column';
import InputContainer from '../../../../Shared/InputContainer';
import Counter from '../../../../../library/Counter';
import ExampleCard from '../ExampleCard';
import SpacingLegend from '../SpacingLegend';
import { getSizingVariations } from '../../../../../helpers/buildTheme';
import ContentContainer from '../../../../Shared/ContentContainer';
import useMediaQuery from '../../../../../hooks/useMediaQuery';
import Tabs from '../../../../../library/Tabs';
import { StoreContext } from '../../../../../state';
import ACTION_TYPES from '../../../../../state/actionTypes';

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
  const { store, dispatch } = useContext(StoreContext);
  const { spacing } = store;

  const [tabIndex, setTabIndex] = useState(0);
  const handleSetTabIndex = (_, { index }) => setTabIndex(index);
  const mobile = window.matchMedia('(max-width: 768px)');
  const isMobile = useMediaQuery(mobile);

  const BaseSize = (
    <InputContainer title="Base Spacing Size">
      <Counter
        readOnly
        roundToWholeNumber
        value={spacing.baseSize}
        multiplier={2}
        min={2}
        max={50}
        handleOnChange={({ target }) =>
          dispatch({
            type: ACTION_TYPES.UPDATE_SPACING_CONFIG,
            key: 'baseSize',
            payload: target.value,
          })
        }
      />
    </InputContainer>
  );

  const LowerRatio = (
    <InputContainer title="Spacing Size Ratio (100 - 300)">
      <Counter
        readOnly
        roundToWholeNumber
        value={spacing.lowerRatio}
        multiplier={1}
        min={1}
        handleOnChange={({ target }) =>
          dispatch({
            type: ACTION_TYPES.UPDATE_SPACING_CONFIG,
            key: 'lowerRatio',
            payload: target.value,
          })
        }
      />
    </InputContainer>
  );

  const UpperRatio = (
    <InputContainer title="Spacing Size Ratio (500 - 800)">
      <Counter
        readOnly
        roundToWholeNumber
        value={spacing.upperRatio}
        multiplier={1}
        min={1}
        handleOnChange={({ target }) =>
          dispatch({
            type: ACTION_TYPES.UPDATE_SPACING_CONFIG,
            key: 'upperRatio',
            payload: target.value,
          })
        }
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
                getSizingVariations(spacing.baseSize, {
                  upper: spacing.upperRatio,
                  lower: spacing.lowerRatio,
                }),
              )}
            />
          </ContentContainer>
        </Column>
      </Row>
      <Row stretch>
        <Column>
          <ExampleCard
            spacing={getSizingVariations(spacing.baseSize, {
              upper: spacing.upperRatio,
              lower: spacing.lowerRatio,
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
