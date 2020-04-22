import React, { useContext, useMemo } from "react";
import SectionTitle from "../components/common/SectionTitle";
import { StoreContext } from "../assets/StoreProvider";
import ColorBlock from "../components/Home/ColorBlock";
import Row from "../library/components/ForumGrid/Row";
import Column from "../library/components/ForumGrid/Column";
import Divider from "../components/Divider";
import TypographyParagraph from "../components/TypographyParagraph";
import TypographyWeights from "../components/TypographyWeights";
import TypographySize from "../components/TypographySize/TypographySize";

const HomePage = () => {
  const { theme } = useContext(StoreContext);
  const { colors = {}, typography = {} } = theme;

  const getFilteredColors = boolValue => {
    return Object.values(colors)
      .filter(color => color.isFlat === boolValue)
      .sort((a, b) => a.order - b.order);
  };
  const variantColors = useMemo(() => getFilteredColors(false), [colors]);
  const flatColors = useMemo(() => getFilteredColors(true), [colors]);

  console.log(theme);

  return (
    <>
      <SectionTitle
        title="Colors"
        description="A ForumUi color palette has a primary, secondary, tertiary, and neutral color value, each spread into eight shade/tints. While also adding a black and white flat color value."
      />
      <Row fillGrid>
        {variantColors &&
          variantColors.map(({ title, palette }) => (
            <Column xsUp={12} lg={6} autoGutter>
              <ColorBlock title={title} palette={palette} />
            </Column>
          ))}
      </Row>
      <Row fillGrid>
        {flatColors &&
          flatColors.map(({ title, palette }) => (
            <Column xsUp={6} lg={4} autoGutter>
              <ColorBlock title={title} palette={palette} />
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
          <TypographyWeights
            title="Font Weights"
            fontFamily={typography.family || ""}
            fontVariants={typography.variants || []}
          />
          <TypographySize
            title="Font Sizing"
            fontFamily={typography.family || ""}
            baseSize={typography.baseSize || 16}
            upperRatio={typography.upperRatio || 1}
            lowerRatio={typography.lowerRatio || 1}
          />
        </Column>
        <Column lg={5}>
          <TypographyParagraph
            title="Paragraph"
            fontFamily={typography.family || ""}
          />
        </Column>
      </Row>
    </>
  );
};

export default HomePage;
