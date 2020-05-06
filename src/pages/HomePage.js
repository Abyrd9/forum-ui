import React, { useContext, useMemo } from "react";
import SectionTitle from "../components/SectionTitle";
import { StoreContext } from "../assets/StoreProvider";
import Row from "../library/components/ForumGrid/Row";
import Column from "../library/components/ForumGrid/Column";
import Divider from "../components/Divider";
import CurrentTheme from "../components/CurrentTheme";
import ColorsVisualBlock from "../components/ColorsVisualBlock";
import GenericTitleWrapper from "../components/GenericTitleWrapper";
import TypographyParagraph from "../components/TypographyParagraph";
import TypographyWeights from "../components/TypographyWeights";
import TypographyFamily from "../components/TypographyFamily/TypographyFamily";
import TypographySize from "../components/TypographySize/TypographySize";
import SpacingColumn from "../components/SpacingColumn/SpacingColumn";
import { getSizingVariations } from "../helpers/buildTheme";
import SpacingExampleCard from "../components/SpacingExampleCard";

const HomePage = () => {
  const { store = {} } = useContext(StoreContext);
  const { activeThemeId = "", themes = {} } = store;
  const currentTheme = themes[activeThemeId] || {};
  const {
    themeName = "",
    colors = {},
    typography = {},
    spacing = {}
  } = currentTheme;

  const getFilteredColors = boolValue => {
    return Object.values(colors)
      .filter(color => color.isFlat === boolValue)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  };
  const variantColors = useMemo(() => getFilteredColors(false), [colors]);
  const flatColors = useMemo(() => getFilteredColors(true), [colors]);

  return (
    <>
      <Divider spacing={800} />
      <CurrentTheme themeName={themeName} />
      <Divider spacing={600} />
      <SectionTitle
        title="Colors"
        description="A ForumUi color palette has a primary, secondary, tertiary, and neutral color value, each spread into eight shade/tints. While also adding a black and white flat color value."
      />
      <Row fillGrid>
        {variantColors &&
          variantColors.map(({ title, palette }) => (
            <Column xsUp={12} lg={6} autoGutter>
              <ColorsVisualBlock title={title} palette={palette} />
            </Column>
          ))}
      </Row>
      <Row fillGrid>
        {flatColors &&
          flatColors.map(({ title, palette }) => (
            <Column xsUp={6} lg={4} autoGutter>
              <ColorsVisualBlock title={title} palette={palette} />
            </Column>
          ))}
      </Row>
      <Divider spacing={700} />
      <SectionTitle
        title="Typography"
        description="A ForumUi Typography system has eight levels of font sizing."
      />
      <Row>
        <Column>
          <TypographyFamily
            title="Current Font Family:"
            fontFamily={typography.family || ""}
          />
        </Column>
      </Row>
      <Row>
        <Column shrink gutterRight={32}>
          <GenericTitleWrapper title="Font Weights">
            <TypographyWeights
              fontFamily={typography.family || ""}
              fontVariants={typography.variants || []}
            />
          </GenericTitleWrapper>
          <GenericTitleWrapper title="Font Sizing">
            <TypographySize
              fontFamily={typography.family || ""}
              baseSize={typography.baseSize || 16}
              upperRatio={typography.upperRatio || 1}
              lowerRatio={typography.lowerRatio || 1}
            />
          </GenericTitleWrapper>
        </Column>
        <Column lg={5}>
          <GenericTitleWrapper title="Paragraph">
            <TypographyParagraph fontFamily={typography.family || ""} />
          </GenericTitleWrapper>
        </Column>
      </Row>
      <Divider spacing={700} />
      <SectionTitle
        title="Spacing"
        description="A ForumUi Sizing system has eight levels of sizing to space out elements on the page."
      />
      <Row fillGrid>
        <Column smDownOrder={2} mdUpShrink autoGutter>
          <SpacingColumn
            baseSize={spacing.baseSize || 16}
            upperRatio={spacing.upperRatio || 1}
            lowerRatio={spacing.lowerRatio || 1}
          />
        </Column>
        <Column smDownOrder={1} smDown={12} autoGutter>
          <SpacingExampleCard
            spacing={getSizingVariations(spacing.baseSize, {
              upper: spacing.upperRatio,
              lower: spacing.lowerRatio
            })}
          />
        </Column>
      </Row>
    </>
  );
};

export default HomePage;
