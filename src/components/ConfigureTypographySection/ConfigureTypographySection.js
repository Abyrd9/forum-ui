/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WebFont from 'webfontloader';
import { ConfigureTypographySectionContainer } from './ConfigureTypographySection.styles';
import googleFontsApiKey from '../../assets/constants/googleFontsApiKey';
import Select from '../../library/Select';
import Counter from '../../library/Counter';
import Row from '../../library/ForumGrid/Row';
import Column from '../../library/ForumGrid/Column';
import ConfigurationBlock from '../ConfigurationBlock/ConfigurationBlock';
import TypographyBlock from '../TypographyBlock/TypographyBlock';
import { getSizingVariations } from '../../helpers/buildTheme';

const ConfigureTypographySection = () => {
  const [googleFonts, updateGoogleFonts] = useState({ rawList: [], formattedList: [] });
  const [config, updateConfig] = useState({
    name: '',
    size: 16,
    ratio: 1.25,
    family: '',
    variants: [],
  });

  useEffect(() => {
    WebFont.load({ google: { families: ['Josefin+Sans:100,300,400,600,700'] } });
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
          `https://www.googleapis.com/webfonts/v1/webfonts?key=${googleFontsApiKey}&sort=popularity`,
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
    WebFont.load({ google: { families: [url] } });
    updateConfig({ ...config, name: value, family: `${font.family}, ${font.category}`, variants });
  };

  return (
    <ConfigureTypographySectionContainer family={config.family}>
      <Row stretch>
        <Column xsUp={12} lgUp={6} mdUpGutterRight={15}>
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
        <Column shrink lgUpGutter={15}>
          <ConfigurationBlock title="Base Font Size">
            <Counter
              value={config.size}
              multiplier={2}
              handleOnChange={({ target }) => updateConfig({ ...config, size: target.value })}
            />
          </ConfigurationBlock>
        </Column>
        <Column shrink gutter={15}>
          <ConfigurationBlock title="Font Size Ratio">
            <Counter
              value={config.ratio}
              multiplier={0.05}
              max={5}
              handleOnChange={({ target }) => updateConfig({ ...config, ratio: target.value })}
            />
          </ConfigurationBlock>
        </Column>
      </Row>
      <Row stretch>
        <Column smUp={12}>
          <TypographyBlock title="Font Weights">
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
          <TypographyBlock title="Paragraph">
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
        <Column smUp={12}>
          <TypographyBlock title="Font Sizing">
            {Object.entries(
              getSizingVariations(config.size, { positive: config.ratio, negative: config.ratio }),
            )
              .sort((a, b) => b[0] - a[0])
              .map(([key, value]) => (
                <h2 style={{ fontSize: value, lineHeight: 1.5, fontFamily: config.family }}>
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
