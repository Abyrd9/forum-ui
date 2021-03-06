import React, { useContext } from "react";
import { StoreContext } from "../assets/StoreProvider";
import Row from "../library/components/ForumGrid/Row";
import Column from "../library/components/ForumGrid/Column";
import Divider from "../components/Divider";
import CurrentTheme from "../components/CurrentTheme";
import SectionTitle from "../components/SectionTitle";
import ThemeVisualBlock, { ErrorBlock } from "../components/ThemeVisualBlock";

const ChooseThemePage = () => {
  const { store = {} } = useContext(StoreContext);
  const { activeThemeId = "", themes = {} } = store;
  const currentTheme = themes[activeThemeId] || {};

  return (
    <>
      <Divider spacing={800} />
      <CurrentTheme themeName={currentTheme.themeName || ""} />
      <Divider spacing={600} />
      <SectionTitle
        title="Themes"
        description="Please Select a theme you’d like to work with."
      />
      <Row fillGrid stretch>
        {Object.values(themes)
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map(theme => {
            const selected = theme.themeId === currentTheme.themeId;
            return (
              <Column xsUp={12} md={6} lg={3.5} autoGutter>
                <ThemeVisualBlock
                  theme={theme}
                  selected={selected}
                  canBeDeleted={Object.values(themes).length > 1}
                />
              </Column>
            );
          })}
        {Object.values(themes).length >= 6 && (
          <Column xsUp={12} md={6} lg={3.5} autoGutter>
            <ErrorBlock text="You are only allowed to create up to 6 themes." />
          </Column>
        )}
      </Row>
    </>
  );
};

export default ChooseThemePage;
