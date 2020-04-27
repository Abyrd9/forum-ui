import React, { useContext } from "react";
import PropTypes from "prop-types";
import { StoreContext } from "../assets/StoreProvider";
import Divider from "../components/Divider";
import CurrentTheme from "../components/CurrentTheme";
import SectionTitle from "../components/common/SectionTitle";
import ConfigureColors from "../components/ConfigureColors/ConfigureColors";

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
        description="A ForumUi color palette has a primary, secondary, tertiary, and neutral color value, each spread into eight shade/tints. While also adding a black and white flat color value."
      />
      <ConfigureColors colors={colors} />
    </>
  );
};

EditPage.propTypes = {};

export default EditPage;
