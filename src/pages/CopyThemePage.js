import React, { useContext, useState } from "react";
import { StoreContext } from "../assets/StoreProvider";
import Divider from "../components/Divider";
import CurrentTheme from "../components/CurrentTheme";
import SectionTitle from "../components/SectionTitle";
import buildGoogleFontsUrl from "../helpers/buildGoogleFontsUrl";
import { getSizingVariations } from "../helpers/buildTheme";
import CopyCodeBlock from "../components/CopyCodeBlock";
import useMountedValueEffect from "../hooks/useMountedValueEffect";

const CopyThemePage = () => {
  const { store = {} } = useContext(StoreContext);
  const { activeThemeId = "", themes = {} } = store;
  const currentTheme = themes[activeThemeId] || {};

  const [generatedTheme, setGeneratedTheme] = useState({});
  useMountedValueEffect(() => {
    const { colors = {}, typography = {}, spacing = {} } = currentTheme;

    setGeneratedTheme({
      ...generatedTheme,
      get colors() {
        const obj = {};
        Object.values(colors).forEach(item => {
          obj[item.title] = item.palette;
        });
        return obj;
      },
      get fontUrl() {
        return buildGoogleFontsUrl(typography.name, typography.variants, true);
      },
      get fontFamily() {
        return `font-family: ${typography.family}`;
      },
      get font() {
        return getSizingVariations(typography.baseSize, {
          upper: typography.upperRatio,
          lower: typography.lowerRatio
        });
      },
      get spacing() {
        return getSizingVariations(spacing.baseSize, {
          upper: spacing.upperRatio,
          lower: spacing.lowerRatio
        });
      }
    });
  }, [currentTheme]);

  return (
    <>
      <Divider spacing={800} />
      <CurrentTheme themeName={currentTheme.themeName || ""} />
      <Divider spacing={600} />
      <SectionTitle
        title="Copy Theme"
        description="This is your theme rendered out in json format. copy for your own use."
      />
      <CopyCodeBlock code={JSON.stringify(generatedTheme, null, 2)} />
    </>
  );
};

export default CopyThemePage;
