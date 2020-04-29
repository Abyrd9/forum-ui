import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import isEmpty from "lodash.isempty";
import { ConfigureTypographyStyled } from "./ConfigureTypography.styles";
import Select from "../../library/components/Select";
import useGoogleFonts from "../../hooks/useGoogleFonts";
import buildGoogleFontsUrl from "../../helpers/buildGoogleFontsUrl";
import loadWebFont from "../../helpers/loadWebFont";
import useDeepCompareEffect from "../../hooks/useDeepCompareEffect";
import { ACTION_TYPES, StoreContext } from "../../assets/StoreProvider";

const ConfigureTypography = ({ typography }) => {
  const { dispatch } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);
  const [fontSearchValue, setFontSearchValue] = useState("");
  const { raw, formatted } = useGoogleFonts();

  // Watch the typography object passed in and loadWebFonts accordingly,
  // This could be run in the handleOnFamilyChange but we don't want the
  // api call to slow down the Select component search
  useDeepCompareEffect(() => {
    if (!isEmpty(typography)) {
      setLoading(true);
      // load the new webfont on the page
      const url = buildGoogleFontsUrl(typography.family, typography.variants);
      const config = {
        google: { families: [url] },
        classes: false
      };
      loadWebFont(config, status => {
        if (status === "resolved") setLoading(false);
      });
    }
  }, [typography.family, typography.variants]);

  const handleOnFamilyChange = value => {
    setFontSearchValue(value);

    // If the value matches a font in the list, then dispatch a new typography object to store
    const font = raw.find(({ family }) => family === value);
    if (!isEmpty(font)) {
      const variants = font.variants
        .filter(variant => !variant.includes("italic"))
        .map(weight => (weight === "regular" ? "400" : weight));
      const payload = {
        name: value,
        family: `${font.family}, ${font.category}`,
        variants
      };

      dispatch({ type: ACTION_TYPES.UPDATE_TYPOGRAPHY, payload });
    }
  };

  return (
    <ConfigureTypographyStyled>
      <Select
        placeholder="Choose font family..."
        list={formatted}
        value={fontSearchValue}
        handleOnChange={handleOnFamilyChange}
      />
    </ConfigureTypographyStyled>
  );
};

ConfigureTypography.defaultProps = {
  typography: {}
};

ConfigureTypography.propTypes = {
  typography: PropTypes.shape({
    baseSize: PropTypes.number,
    family: PropTypes.string,
    lowerRatio: PropTypes.number,
    name: PropTypes.string,
    upperRatio: PropTypes.number,
    variants: PropTypes.arrayOf(PropTypes.string)
  })
};

export default ConfigureTypography;
