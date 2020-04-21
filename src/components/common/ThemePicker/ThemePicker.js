import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faListUl } from "@fortawesome/pro-duotone-svg-icons";
import { ThemePickerStyled, ExtendedButton } from "./ThemePicker.styles";
import Button from "../../../library/components/Button";
import Input from "../../../library/components/Input";
import Row from "../../../library/components/ForumGrid/Row";
import Column from "../../../library/components/ForumGrid/Column";

const ThemePicker = ({ currentTheme, setCurrentTheme, themesList }) => {
  const [themeDraft, setThemeDraft] = useState("");
  return (
    <ThemePickerStyled>
      <h2 className="title">Current Theme:</h2>
      <Row>
        <Column col={5} gutterRight={16}>
          <Input
            value={themeDraft}
            placeholder="Theme Name"
            handleOnChange={({ target }) => setThemeDraft(target.value)}
            infoShow={themeDraft.length > 0}
            infoMssg={{
              message: "Press enter to save",
              color: "#3E3E3E"
            }}
          />
        </Column>
        <Column shrink>
          <ExtendedButton neutral={100}>
            <FontAwesomeIcon icon={faPlusCircle} className="icon" />
          </ExtendedButton>
        </Column>
      </Row>
    </ThemePickerStyled>
  );
};

ThemePicker.defaultProps = {
  currentTheme: "",
  setCurrentTheme: "",
  themesList: []
};

ThemePicker.propTypes = {
  currentTheme: PropTypes.string,
  setCurrentTheme: PropTypes.func,
  themesList: PropTypes.arrayOf(
    PropTypes.shape({
      themeId: PropTypes.string,
      themeName: PropTypes.string
    })
  )
};

export default ThemePicker;
