import React, { useContext, useState, useEffect } from 'react';
import { OutputCodeSectionStyled } from './OutputCodeSection.styles';
import { StoreContext } from '../../../../assets/StoreProvider';
import CodeBlock from '../CodeBlock';
import SectionTitle from '../../../Shared/SectionTitle';
import buildGoogleFontsUrl from '../../../../helpers/buildGoogleFontsUrl';
import { getSizingVariations } from '../../../../helpers/buildTheme';

const OutputCodeSection = () => {
  const { store } = useContext(StoreContext);
  const { colors, typography, spacing } = store;
  const [build, setBuild] = useState({});

  useEffect(() => {
    setBuild({
      ...build,
      get colors() {
        const obj = {};
        Object.values(colors).forEach(item => {
          if (item.title !== 'NewColor') {
            obj[item.title] = item.palette;
          }
        });
        return obj;
      },
      get font() {
        return {
          url: buildGoogleFontsUrl(typography.name, typography.variants, true),
          family: `font-family: ${typography.family}`,
          size: getSizingVariations(typography.baseSize, {
            upper: typography.upperRatio,
            lower: typography.lowerRatio,
          }),
        };
      },
      get spacing() {
        return getSizingVariations(spacing.baseSize, {
          upper: spacing.upperRatio,
          lower: spacing.lowerRatio,
        });
      },
    });
  }, []);

  return (
    <OutputCodeSectionStyled>
      <SectionTitle
        title="Theme"
        description={`Here is your configured theme in JSON format.\nCopy and past your theme object wherever you need!`}
      />
      <CodeBlock code={JSON.stringify(build, null, 2)} />
    </OutputCodeSectionStyled>
  );
};

export default OutputCodeSection;
