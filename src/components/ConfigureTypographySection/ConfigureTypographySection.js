/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ConfigureTypographySectionContainer } from './ConfigureTypographySection.styles';
import googleFontsApiKey from '../../assets/constants/googleFontsApiKey';
import Select from '../../library/Select';

const ConfigureTypographySection = () => {
	const [fontsList, updateFontsList] = useState([]);
  const [config, updateConfig] = useState({ family: '', size: 16, ratio: 1.25 });
	
	useEffect(() => {
		const getGoogleFonts = async () => {
			try {
				const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${googleFontsApiKey}`);
				const data = await response.json();
				if (data && data.items.length > 0) {
					const fontItems = data.items.reduce((acc, { family }) => {
						return [...acc, { value: family, name: family }];
					}, []);
					updateFontsList(fontItems);
				}
			} catch (error) {
				console.error(error);
			}
		}
		getGoogleFonts();
	}, []);

  return (
    <ConfigureTypographySectionContainer>
      <div className="typography-configurations__container">
			<Select placeholder="Choose Font Family..." list={fontsList} value={config.family} handleOnChange={val => updateConfig({ ...config, family: val })} />
      </div>
    </ConfigureTypographySectionContainer>
  );
};

ConfigureTypographySection.defaultProps = {};

ConfigureTypographySection.propTypes = {};

export default ConfigureTypographySection;
