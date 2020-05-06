import React, { useContext } from "react";
import { StoreContext } from "../assets/StoreProvider";
import Row from "../library/components/ForumGrid/Row";
import Divider from "../components/Divider";
import CurrentTheme from "../components/CurrentTheme";
import SectionTitle from "../components/SectionTitle";
import ThemeVisualBlock from "../components/ThemeVisualBlock";

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
      <Row>
        {Object.values(themes)
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map(theme => {
            const selected = theme.themeId === currentTheme.themeId;
            return <ThemeVisualBlock theme={theme} selected={selected} />;
          })}
      </Row>
    </>
  );
};

export default ChooseThemePage;
