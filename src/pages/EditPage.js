import React, { useContext } from "react";
import PropTypes from "prop-types";
import { StoreContext } from "../assets/StoreProvider";
import Divider from "../components/Divider";
import CurrentTheme from "../components/CurrentTheme";
import SectionTitle from "../components/common/SectionTitle";
import ConfigureColors from "../components/ConfigureColors/ConfigureColors";
import ConfigureTypography from "../components/ConfigureTypography/ConfigureTypography";

const EditPage = () => {
  const { theme } = useContext(StoreContext);
  const { themeName = "", colors = {}, typography = {}, spacing = {} } = theme;
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
    </>
  );
};

EditPage.propTypes = {};

export default EditPage;
