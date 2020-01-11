/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { TypographySectionContainer } from './TypographySection.styles';
import { GOOGLE_FONTS_API_KEY } from '../../../../constants';
import Select from '../../../../library/Select';
import Counter from '../../../../library/Counter';
import Row from '../../../../library/ForumGrid/Row';
import Column from '../../../../library/ForumGrid/Column';
import InputContainer from '../../../InputContainer';
import ContentContainer from '../../../ContentContainer';
import { getSizingVariations } from '../../../../helpers/buildTheme';
import FontLegend from '../FontLegend';
import loadWebFont from '../../../../helpers/loadWebFont';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import Tabs from '../../../../library/Tabs';

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
  const [config, updateConfig] = useState({
    name: '',
    baseSize: 16,
    upperRatio: 1,
    lowerRatio: 1,
    family: '',
    variants: [],
  });

  const [tabIndex, setTabIndex] = useState(0);
  const handleSetTabIndex = (_, { index }) => setTabIndex(index);
  const mobile = window.matchMedia('(max-width: 768px)');
  const isMobile = useMediaQuery(mobile);

  useEffect(() => {
    const payload = {
      google: { families: ['Josefin+Sans:100,300,400,600,700'] },
      classes: false,
    };
    loadWebFont(payload, status => {
      if (status === 'resolved') setLoading(false);
    });
    updateConfig({
      ...config,
      name: 'Josefin Sans',
      family: 'Josefin Sans, sans-serif',
      variants: ['100', '300', '400', '600', '700'],
    });
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
      url.push(font.family.replace(/ /g, '+'));
      if (font.variants.length > 0) {
        variants.forEach((weight, index) => {
          let string = '';
          string += index === 0 ? ':' : ',';
          string += weight === 'regular' ? '400' : weight;
          url.push(string);
        });
      }
      url = url.join('');
    }

    const payload = {
      google: { families: [url] },
      classes: false,
    };
    loadWebFont(payload, status => {
      if (status === 'resolved') setLoading(false);
    });
    updateConfig({ ...config, name: value, family: `${font.family}, ${font.category}`, variants });
  };

  const BaseSize = (
    <InputContainer title="Base Font Size">
      <Counter
        readOnly
        roundToWholeNumber
        value={config.baseSize}
        multiplier={2}
        handleOnChange={({ target }) => updateConfig({ ...config, baseSize: target.value })}
      />
    </InputContainer>
  );
  const LowerRatio = (
    <InputContainer title="Font Size Ratio (100 - 300)">
      <Counter
        readOnly
        roundToWholeNumber
        value={config.lowerRatio}
        multiplier={0.05}
        min={1.1}
        max={1.8}
        handleOnChange={({ target }) => updateConfig({ ...config, lowerRatio: target.value })}
      />
    </InputContainer>
  );
  const UpperRatio = (
    <InputContainer title="Font Size Ratio (500 - 800)">
      <Counter
        readOnly
        roundToWholeNumber
        value={config.upperRatio}
        multiplier={0.05}
        min={1.1}
        max={1.8}
        handleOnChange={({ target }) => updateConfig({ ...config, upperRatio: target.value })}
      />
    </InputContainer>
  );

  return (
    <TypographySectionContainer family={config.family}>
      <Row stretch>
        <Column xsUp={12} lgUp={6}>
          <InputContainer title="Font Family">
            {googleFonts.formattedList && googleFonts.formattedList.length > 0 && (
              <Select
                readOnly
                placeholder="Choose Font Family..."
                list={googleFonts.formattedList}
                value={config.name}
                handleOnChange={handleOnFamilyChange}
              />
            )}
          </InputContainer>
        </Column>
      </Row>
      <Row>
        <Column gutterLeft={0} xsUp={12} lgUp={7}>
          <ContentContainer title="Paragraph" loading={loading}>
            <p style={{ fontFamily: config.family }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <p style={{ fontFamily: config.family }}>
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
              {config.variants
                .sort((a, b) => b - a)
                .map(weight => (
                  <Column shrink gutterRight={0}>
                    <h3 style={{ fontWeight: weight, lineHeight: 1, fontFamily: config.family }}>
                      Aa
                    </h3>
                    <p
                      style={{
                        fontWeight: weight,
                        lineHeight: 1,
                        fontFamily: config.family,
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
                getSizingVariations(config.baseSize, {
                  upper: config.upperRatio,
                  lower: config.lowerRatio,
                }),
              )}
            />
          </ContentContainer>
        </Column>
        <Column>
          <ContentContainer title="Font Sizing Scale" loading={loading}>
            {Object.entries(
              getSizingVariations(config.baseSize, {
                upper: config.upperRatio,
                lower: config.lowerRatio,
              }),
            )
              .sort((a, b) => b[0] - a[0])
              .map(([key, value]) => (
                <h2
                  style={{
                    fontSize: value,
                    lineHeight: 'normal',
                    marginBottom: '8px',
                    fontFamily: config.family,
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
