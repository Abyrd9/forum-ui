/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ConfigureTypographySectionContainer } from './ConfigureTypographySection.styles';

const ConfigureTypographySection = () => {
  const [config, updateConfig] = useState({ family: '', size: 16, ratio: 1.25 });
  const { family, size, ratio } = config;
  return (
    <ConfigureTypographySectionContainer>
      <div className="typography-configurations__container">
        <label className="typography-configurations__input-block">
          Font Family
          <input placeholder="Choose font..." value={family} />
        </label>
        <label className="typography-configurations__input-block">
          Font Family
          <input placeholder="Choose font..." value={size} />
        </label>
        <label className="typography-configurations__input-block">
          Font Family
          <input placeholder="Choose font..." value={ratio} />
        </label>
      </div>
    </ConfigureTypographySectionContainer>
  );
};

ConfigureTypographySection.defaultProps = {};

ConfigureTypographySection.propTypes = {};

export default ConfigureTypographySection;
