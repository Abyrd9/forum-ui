import React, { useContext, useMemo } from "react";
import { faExternalLink } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionTitle from "../components/common/SectionTitle";
import { StoreContext } from "../assets/StoreProvider";
import Row from "../library/components/ForumGrid/Row";
import Column from "../library/components/ForumGrid/Column";
import Button from "../library/components/Button";
import Divider from "../components/Divider";
import ColorsVisualBlock from "../components/ColorsVisualBlock";
import TypographyTitleWrapper from "../components/TypographyTitleWrapper";
import TypographyParagraph from "../components/TypographyParagraph";
import TypographyWeights from "../components/TypographyWeights";
import TypographySize from "../components/TypographySize/TypographySize";
import SpacingColumn from "../components/SpacingColumn/SpacingColumn";
import { getSizingVariations } from "../helpers/buildTheme";
import SpacingExampleCard from "../components/SpacingExampleCard";

const HomePage = () => {
  const { theme } = useContext(StoreContext);
  const { colors = {}, typography = {}, spacing = {} } = theme;

  const getFilteredColors = boolValue => {
    return Object.values(colors)
      .filter(color => color.isFlat === boolValue)
      .sort((a, b) => a.order - b.order);
  };
  const variantColors = useMemo(() => getFilteredColors(false), [colors]);
  const flatColors = useMemo(() => getFilteredColors(true), [colors]);

  return (
    <>
      <Divider spacing={500} />
      <Row fillGrid>
        <Column shrink autoGutter>
          <Button
            large
            primary
            icon={<FontAwesomeIcon icon={faExternalLink} />}
          >
            Edit this theme
          </Button>
        </Column>
        <Column shrink autoGutter>
          <Button
            large
            secondary
            icon={<FontAwesomeIcon icon={faExternalLink} />}
          >
            Pick a new theme
          </Button>
        </Column>
      </Row>
      <Divider spacing={800} />
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
        <Column shrink gutterRight={32}>
          <TypographyTitleWrapper title="Font Weights">
            <TypographyWeights
              fontFamily={typography.family || ""}
              fontVariants={typography.variants || []}
            />
          </TypographyTitleWrapper>
          <TypographyTitleWrapper title="Font Sizing">
            <TypographySize
              fontFamily={typography.family || ""}
              baseSize={typography.baseSize || 16}
              upperRatio={typography.upperRatio || 1}
              lowerRatio={typography.lowerRatio || 1}
            />
          </TypographyTitleWrapper>
        </Column>
        <Column lg={5}>
          <TypographyTitleWrapper title="Paragraph">
            <TypographyParagraph fontFamily={typography.family || ""} />
          </TypographyTitleWrapper>
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
