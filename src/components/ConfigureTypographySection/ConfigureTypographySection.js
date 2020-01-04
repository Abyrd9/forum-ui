/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { ConfigureTypographySectionContainer } from './ConfigureTypographySection.styles';
import { GOOGLE_FONTS_API_KEY } from '../../constants';
import Select from '../../library/Select';
import Counter from '../../library/Counter';
import Row from '../../library/ForumGrid/Row';
import Column from '../../library/ForumGrid/Column';
import ConfigurationBlock from '../ConfigurationBlock/ConfigurationBlock';
import TypographyBlock from '../TypographyBlock/TypographyBlock';
import { getSizingVariations } from '../../helpers/buildTheme';
import FontLegend from '../ConfigureThemePage/Typography/FontLegend';
import loadWebFont from '../../helpers/loadWebFont';

const ConfigureTypographySection = () => {
  const [googleFonts, updateGoogleFonts] = useState({ rawList: [], formattedList: [] });
  const [loading, setLoading] = useState(true);
  const [config, updateConfig] = useState({
    name: '',
    baseSize: 16,
    upperRatio: (1.25).toFixed(2),
    lowerRatio: (1.25).toFixed(2),
    family: '',
    variants: [],
  });

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
      } catch (error) {}
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

  return (
    <ConfigureTypographySectionContainer family={config.family}>
      <Row stretch>
        <Column xsUp={12} lgUp={6}>
          <ConfigurationBlock title="Font Family">
            {googleFonts.formattedList && googleFonts.formattedList.length > 0 && (
              <Select
                readOnly
                placeholder="Choose Font Family..."
                list={googleFonts.formattedList}
                value={config.name}
                handleOnChange={handleOnFamilyChange}
              />
            )}
          </ConfigurationBlock>
        </Column>
      </Row>
      <Row>
        <Column gutterLeft={0} xsUp={12} lgUp={7}>
          <TypographyBlock title="Paragraph" loading={loading}>
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
          </TypographyBlock>
        </Column>
        <Column shrink xsUp={12} lgUp={5} gutter={0}>
          <TypographyBlock title="Font Weights" loading={loading}>
            <Row stretch>
              {config.variants
                .sort((a, b) => b - a)
                .map(weight => (
                  <Column shrink gutterRight={0}>
                    <h2 style={{ fontWeight: weight, lineHeight: 1, fontFamily: config.family }}>
                      Aa
                    </h2>
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
          </TypographyBlock>
        </Column>
      </Row>

      <Row stretch>
        <Column shrink smDown={12} smDownGutter={24}>
          <ConfigurationBlock title="Base Font Size">
            <Counter
              readOnly
              roundToWholeNumber
              value={config.baseSize}
              multiplier={2}
              handleOnChange={({ target }) => updateConfig({ ...config, baseSize: target.value })}
            />
          </ConfigurationBlock>
        </Column>
        <Column shrink smDownGutter={24}>
          <ConfigurationBlock title="Font Size Ratio (500 - 800)">
            <Counter
              readOnly
              value={config.upperRatio}
              multiplier={0.05}
              min={1.1}
              max={1.8}
              handleOnChange={({ target }) => updateConfig({ ...config, upperRatio: target.value })}
            />
          </ConfigurationBlock>
        </Column>
        <Column shrink smDownGutter={24}>
          <ConfigurationBlock title="Font Size Ratio (100 - 300)">
            <Counter
              readOnly
              value={config.lowerRatio}
              multiplier={0.05}
              min={1.1}
              max={1.8}
              handleOnChange={({ target }) => updateConfig({ ...config, lowerRatio: target.value })}
            />
          </ConfigurationBlock>
        </Column>
      </Row>

      <Row stretch>
        <Column shrink gutterRight={100}>
          <TypographyBlock title="Font Sizing Legend" loading={loading}>
            <FontLegend
              fontSizingArray={Object.entries(
                getSizingVariations(config.baseSize, {
                  positive: config.upperRatio,
                  negative: config.lowerRatio,
                }),
              )}
            />
          </TypographyBlock>
        </Column>
        <Column>
          <TypographyBlock title="Font Sizing Scale" loading={loading}>
            {Object.entries(
              getSizingVariations(config.baseSize, {
                positive: config.upperRatio,
                negative: config.lowerRatio,
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
          </TypographyBlock>
        </Column>
      </Row>
    </ConfigureTypographySectionContainer>
  );
};

ConfigureTypographySection.defaultProps = {};

ConfigureTypographySection.propTypes = {};

export default ConfigureTypographySection;
