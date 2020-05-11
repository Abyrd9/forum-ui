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
import Row from "../../library/components/ForumGrid/Row";
import Column from "../../library/components/ForumGrid/Column";
import Divider from "../Divider";
import GenericTitleWrapper from "../GenericTitleWrapper";
import TypographyParagraph from "../TypographyParagraph";
import TypographyWeights from "../TypographyWeights";
import ConfigValueConfigureBlock from "../ConfigValueConfigureBlock";
import TypographySize from "../TypographySize/TypographySize";
import TypographyFamily from "../TypographyFamily/TypographyFamily";

const ConfigureTypography = ({ typography }) => {
  const { dispatch } = useContext(StoreContext);
  const [fontSearchValue, setFontSearchValue] = useState("");
  const { raw, formatted } = useGoogleFonts();

  // Watch the typography object passed in and loadWebFonts accordingly,
  // This could be run in the handleOnFamilyChange but we don't want the
  // api call to slow down the Select component search
  useDeepCompareEffect(() => {
    if (!isEmpty(typography)) {
      // load the new webfont on the page
      const url = buildGoogleFontsUrl(typography.family, typography.variants);
      const config = {
        google: { families: [url] },
        classes: false
      };
      loadWebFont(config);
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
      <Row>
        <Column xsUp={12} mdUp={8} lg={5}>
          <Select
            placeholder="Choose font family..."
            list={formatted}
            value={fontSearchValue}
            handleOnChange={handleOnFamilyChange}
          />
        </Column>
      </Row>

      <Row fillGrid>
        <Column autoGutter xsUp={12} mdUp={7}>
          <GenericTitleWrapper title="Paragraph">
            <TypographyParagraph fontFamily={typography.family || ""} />
          </GenericTitleWrapper>
        </Column>
        <Column autoGutter xsUp={12} mdUp={5}>
          <TypographyFamily
            title="Current Font Family:"
            fontFamily={typography.family || ""}
          />
          <GenericTitleWrapper title="Font Weights">
            <TypographyWeights
              fontFamily={typography.family || ""}
              fontVariants={typography.variants || []}
            />
          </GenericTitleWrapper>
        </Column>
      </Row>
      <Divider spacing={300} />
      <Row fillGrid>
        <Column autoGutter xsUp={12} lg={7}>
          <GenericTitleWrapper title="Variable Font Sizing">
            <ConfigValueConfigureBlock
              actionType={ACTION_TYPES.UPDATE_TYPOGRAPHY}
              baseSize={typography.baseSize || 16}
              upperRatio={typography.upperRatio || 1}
              lowerRatio={typography.lowerRatio || 1}
            />
          </GenericTitleWrapper>
        </Column>
        <Column autoGutter xsUp={12} lg={5}>
          <GenericTitleWrapper title="Font Sizing">
            <TypographySize
              fontFamily={typography.family || ""}
              baseSize={typography.baseSize || 16}
              upperRatio={typography.upperRatio || 1}
              lowerRatio={typography.lowerRatio || 1}
            />
          </GenericTitleWrapper>
        </Column>
      </Row>
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
