/* eslint-disable import/no-named-as-default */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React, { useState, useEffect, useContext } from 'react';
// import PropTypes from 'prop-types';
import { TypographySectionContainer } from './TypographySection.styles';
import { GOOGLE_FONTS_API_KEY } from '../../../../../constants';
import Select from '../../../../../library/Select';
import Counter from '../../../../../library/Counter';
import Row from '../../../../../library/ForumGrid/Row';
import Column from '../../../../../library/ForumGrid/Column';
import InputContainer from '../../../../Shared/InputContainer';
import ContentContainer from '../../../../Shared/ContentContainer';
import { getSizingVariations } from '../../../../../helpers/buildTheme';
import FontLegend from '../FontLegend';
import loadWebFont from '../../../../../helpers/loadWebFont';
import buildGoogleFontsUrl from '../../../../../helpers/buildGoogleFontsUrl';
import useMediaQuery from '../../../../../hooks/useMediaQuery';
import Tabs from '../../../../../library/Tabs';
import { StoreContext } from '../../../../../state';
import ACTION_TYPES from '../../../../../state/actionTypes';

const tabs = [
  {
    name: 'base-font',
    value: 'Base Font',
    content: null,
  },
  {
    name: 'font-ratio-lower',
    value: 'Lower Ratio',
    content: null,
  },
  {
    name: 'font-ratio-upper',
    value: 'Upper Ratio',
    content: null,
  },
];

const TypographySection = () => {
  const [googleFonts, updateGoogleFonts] = useState({ rawList: [], formattedList: [] });
  const [loading, setLoading] = useState(true);
  const { store, dispatch } = useContext(StoreContext);
  const { typography } = store;

  const [tabIndex, setTabIndex] = useState(0);
  const handleSetTabIndex = (_, { index }) => setTabIndex(index);
  const mobile = window.matchMedia('(max-width: 768px)');
  const isMobile = useMediaQuery(mobile);

  useEffect(() => {
    const config = {
      google: { families: ['Josefin+Sans:100,300,400,600,700'] },
      classes: false,
    };
    loadWebFont(config, status => {
      if (status === 'resolved') setLoading(false);
    });
    const payload = {
      name: 'Josefin Sans',
      family: 'Josefin Sans, sans-serif',
      variants: ['100', '300', '400', '600', '700'],
    };
    dispatch({ type: ACTION_TYPES.UPDATE_TYPOGRAPHY_CONFIG, payload });
  }, []);

  useEffect(() => {
    const getGoogleFonts = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_FONTS_API_KEY}&sort=popularity`,
        );
        const data = await response.json();
        if (data && data.items.length > 0) {
          const rawList = data.items
            .slice(0, 100)
            .filter(font => {
              const variants = font.variants.filter(variant => !variant.includes('italic'));
              return variants.length >= 4;
            })
            .slice(0, 50);
          const formattedList = rawList.reduce((acc, { family }) => {
            return [...acc, { value: family, name: family }];
          }, []);
          updateGoogleFonts({ rawList, formattedList });
        }
      } catch (error) {
        console.error(error);
      }
    };
    getGoogleFonts();
  }, []);

  const handleOnFamilyChange = value => {
    setLoading(true);
    const font = googleFonts.rawList.find(({ family }) => family === value);
    const variants = font.variants
      .filter(variant => !variant.includes('italic'))
      .map(weight => (weight === 'regular' ? '400' : weight));
    let url = [];
    if (font) {
      url = buildGoogleFontsUrl(font.family, font.variants);
    }

    const config = {
      google: { families: [url] },
      classes: false,
    };
    loadWebFont(config, status => {
      if (status === 'resolved') setLoading(false);
    });
    const payload = {
      name: value,
      family: `${font.family}, ${font.category}`,
      variants,
    };
    dispatch({ type: ACTION_TYPES.UPDATE_TYPOGRAPHY_CONFIG, payload });
  };

  const BaseSize = (
    <InputContainer title="Base Font Size">
      <Counter
        readOnly
        roundToWholeNumber
        value={typography.baseSize}
        multiplier={2}
        handleOnChange={({ target }) =>
          dispatch({
            type: ACTION_TYPES.UPDATE_TYPOGRAPHY_CONFIG,
            payload: { baseSize: target.value },
          })
        }
      />
    </InputContainer>
  );
  const LowerRatio = (
    <InputContainer title="Font Size Ratio (100 - 300)">
      <Counter
        readOnly
        roundToWholeNumber
        value={typography.lowerRatio}
        multiplier={1}
        min={1}
        handleOnChange={({ target }) =>
          dispatch({
            type: ACTION_TYPES.UPDATE_TYPOGRAPHY_CONFIG,
            payload: { lowerRatio: target.value },
          })
        }
      />
    </InputContainer>
  );
  const UpperRatio = (
    <InputContainer title="Font Size Ratio (500 - 800)">
      <Counter
        readOnly
        roundToWholeNumber
        value={typography.upperRatio}
        multiplier={1}
        min={1}
        handleOnChange={({ target }) =>
          dispatch({
            type: ACTION_TYPES.UPDATE_TYPOGRAPHY_CONFIG,
            payload: { upperRatio: target.value },
          })
        }
      />
    </InputContainer>
  );

  return (
    <TypographySectionContainer family={typography.family}>
      <Row stretch>
        <Column xsUp={12} lgUp={6}>
          <InputContainer title="Font Family">
            {googleFonts.formattedList && googleFonts.formattedList.length > 0 && (
              <Select
                readOnly
                placeholder="Choose Font Family..."
                list={googleFonts.formattedList}
                value={typography.name}
                handleOnChange={handleOnFamilyChange}
              />
            )}
          </InputContainer>
        </Column>
      </Row>
      <Row>
        <Column gutterLeft={0} xsUp={12} lgUp={7}>
          <ContentContainer title="Paragraph" loading={loading}>
            <p style={{ fontFamily: typography.family }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <p style={{ fontFamily: typography.family }}>
              <b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </b>
            </p>
          </ContentContainer>
        </Column>
        <Column shrink xsUp={12} lgUp={5} gutter={0}>
          <ContentContainer title="Font Weights" loading={loading}>
            <Row stretch>
              {typography.variants
                .slice()
                .sort((a, b) => b - a)
                .map(weight => (
                  <Column shrink gutterRight={0}>
                    <h3
                      style={{ fontWeight: weight, lineHeight: 1, fontFamily: typography.family }}
                    >
                      Aa
                    </h3>
                    <p
                      style={{
                        fontWeight: weight,
                        lineHeight: 1,
                        fontFamily: typography.family,
                        marginBottom: '8px',
                      }}
                    >
                      {weight}
                    </p>
                  </Column>
                ))}
            </Row>
          </ContentContainer>
        </Column>
      </Row>

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
        <Column shrink mdUpGutterRight={100}>
          <ContentContainer title="Font Sizing Legend" loading={loading}>
            <FontLegend
              fontSizingArray={Object.entries(
                getSizingVariations(typography.baseSize, {
                  upper: typography.upperRatio,
                  lower: typography.lowerRatio,
                }),
              )}
            />
          </ContentContainer>
        </Column>
        <Column>
          <ContentContainer title="Font Sizing Scale" loading={loading}>
            {Object.entries(
              getSizingVariations(typography.baseSize, {
                upper: typography.upperRatio,
                lower: typography.lowerRatio,
              }),
            )
              .sort((a, b) => b[0] - a[0])
              .map(([key, value]) => (
                <h2
                  style={{
                    fontSize: value,
                    lineHeight: 'normal',
                    marginBottom: '8px',
                    fontFamily: typography.family,
                  }}
                >
                  Font Size {key}
                </h2>
              ))}
          </ContentContainer>
        </Column>
      </Row>
    </TypographySectionContainer>
  );
};

TypographySection.defaultProps = {};

TypographySection.propTypes = {};

export default TypographySection;
