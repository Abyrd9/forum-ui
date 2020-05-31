import React, { useContext, useState, useEffect } from "react";
import isEmpty from "lodash.isempty";
import { CopyCodeConfigureStyled } from "./CopyCodeConfigure.styles";
import { StoreContext } from "../../assets/StoreProvider";
import buildGoogleFontsUrl from "../../helpers/buildGoogleFontsUrl";
import { getSizingVariations } from "../../helpers/buildTheme";
import Tabs from "../../library/components/Tabs/Tabs";
import CopyCodeBlock from "../CopyCodeBlock";
import useMountValueEffect from "../../hooks/useMountValueEffect";

const CopyCodeConfigure = () => {
  const { store = {} } = useContext(StoreContext);
  const { activeThemeId = "", themes = {} } = store;
  const currentTheme = themes[activeThemeId] || {};

  const [fullCodeBlock, setFullCodeBlock] = useState({});
  useMountValueEffect(() => {
    const { colors = {}, typography = {}, spacing = {} } = currentTheme;

    const colorsObj = Object.values(colors).reduce((acc, item) => {
      if (!isEmpty(item.palette)) {
        acc[item.title] = item.palette;
      }
      return acc;
    }, {});

    const spacingObj = getSizingVariations(spacing.baseSize, {
      upper: spacing.upperRatio,
      lower: spacing.lowerRatio
    });

    const fontsObj = getSizingVariations(typography.baseSize, {
      upper: typography.upperRatio,
      lower: typography.lowerRatio
    });

    const fontUrl = buildGoogleFontsUrl(
      typography.name,
      typography.variants,
      true
    );
    const fontFamily = `font-family: ${typography.family}`;
    setFullCodeBlock({
      get colors() {
        return colorsObj;
      },
      get fontUrl() {
        return fontUrl;
      },
      get fontFamily() {
        return fontFamily;
      },
      get font() {
        return fontsObj;
      },
      get spacing() {
        return spacingObj;
      }
    });
  }, [currentTheme]);

  const [activeCodeBlock, setActiveCodeBlock] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    let payload = {};
    switch (activeTab) {
      case 0:
        payload = { ...fullCodeBlock };
        break;
      case 1:
        payload = {
          get colors() {
            return fullCodeBlock.colors;
          }
        };

        break;
      case 2:
        payload = {
          get fontUrl() {
            return fullCodeBlock.fontUrl;
          },
          get fontFamily() {
            return fullCodeBlock.fontFamily;
          },
          get font() {
            return fullCodeBlock.font;
          }
        };

        break;
      case 3:
        payload = {
          get spacing() {
            return fullCodeBlock.spacing;
          }
        };
        break;
      default:
        break;
    }

    setActiveCodeBlock(payload);
  }, [fullCodeBlock, activeTab]);

  return (
    <CopyCodeConfigureStyled>
      <Tabs
        handleTabClick={(_, { index }) => setActiveTab(index)}
        tabsList={[
          { name: "All", value: "All" },
          { name: "Colors", value: "Colors" },
          { name: "Font", value: "Font" },
          { name: "Spacing", value: "Spacing" }
        ]}
      />
      <CopyCodeBlock code={JSON.stringify(activeCodeBlock, null, 2)} />
    </CopyCodeConfigureStyled>
  );
};

export default CopyCodeConfigure;
