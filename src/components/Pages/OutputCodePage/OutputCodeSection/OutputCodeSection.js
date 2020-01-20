import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { OutputCodeSectionStyled } from "./OutputCodeSection.styles";
import { StoreContext } from "../../../../state";
import CodeBlock from '../CodeBlock';
import buildColorPalette from "../../../../helpers/buildColorPalette";

const OutputCodeSection = () => {
  const { store, dispatch } = useContext(StoreContext);
  const { colors, typography, spacing } = store;
  const [build, setBuild] = useState({});

  useEffect(() => {
    setBuild({
      ...build,
      get colors() {
        const obj = {};
        Object.values(colors).forEach(item => {
          if (item.title !== 'NewColor') {
            obj[item.title] = item.palette;
          }
        });
        return obj;
      }
    })
  }, []);

  return <OutputCodeSectionStyled>

    <CodeBlock code={JSON.stringify(build, null, 2)} />

  </OutputCodeSectionStyled>;
};

OutputCodeSection.defaultProps = {

};

OutputCodeSection.propTypes = {
};

export default OutputCodeSection;
