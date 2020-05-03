import React, { useContext } from "react";
import { StoreContext } from "../assets/StoreProvider";
import Divider from "../components/Divider";
import CurrentTheme from "../components/CurrentTheme";
import SectionTitle from "../components/common/SectionTitle";
import ConfigureColors from "../components/ConfigureColors";
import ConfigureTypography from "../components/ConfigureTypography";
import ConfigureSpacing from "../components/ConfigureSpacing";

const EditThemePage = () => {
  const { store = {} } = useContext(StoreContext);
  const { activeThemeId = "", themes = {} } = store;
  const currentTheme = themes[activeThemeId] || {};
  const {
    themeName = "",
    colors = {},
    typography = {},
    spacing = {}
  } = currentTheme;

  return (
    <>
      <Divider spacing={800} />
      <CurrentTheme themeName={themeName} />
      <Divider spacing={600} />
      <SectionTitle
        title="Colors"
        description={
          <span>
            A ForumUi color palette is loosely based on the guidelines given
            from{" "}
            <a
              href="https://refactoringui.com/previews/building-your-color-palette/"
              rel="noopener noreferrer"
              target="_blank"
            >
              RefactoringUi
            </a>
            . The initial colors have a primary, secondary, and neutral color
            palette as well as three accent colors for warning, error, or
            success notifications.
          </span>
        }
      />
      <ConfigureColors colors={colors} />
      <Divider spacing={600} />
      <SectionTitle
        title="Typography"
        description="A ForumUi Typography system has eight levels of font sizing. Currently we only support the use of the top 100 most popular google fonts."
      />
      <ConfigureTypography typography={typography} />
      <Divider spacing={600} />
      <SectionTitle
        title="Spacing"
        description="A ForumUi spacing system has eight levels to space out elements on the page."
      />
      <ConfigureSpacing spacing={spacing} />
    </>
  );
};

EditThemePage.propTypes = {};

export default EditThemePage;
