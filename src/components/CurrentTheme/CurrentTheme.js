import React from "react";
import PropTypes from "prop-types";
import { faExternalLink } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CurrentThemeStyled } from "./CurrentTheme.styles";
import Button from "../../library/components/Button";
import Divider from "../Divider";

const CurrentTheme = ({ themeName }) => {
  return (
    <CurrentThemeStyled>
      <h5 className="title">Current Theme:</h5>
      <h3 className="theme-name">{themeName}</h3>
      <div className="button-container">
        <Button large primary icon={<FontAwesomeIcon icon={faExternalLink} />}>
          Edit this theme
        </Button>
        <Button
          large
          secondary
          icon={<FontAwesomeIcon icon={faExternalLink} />}
        >
          Pick new theme
        </Button>
      </div>
      <Divider spacing={600} />
      <span className="divider-line" />
    </CurrentThemeStyled>
  );
};

CurrentTheme.defaultProps = {
  themeName: ""
};

CurrentTheme.propTypes = {
  themeName: PropTypes.string
};

export default CurrentTheme;
