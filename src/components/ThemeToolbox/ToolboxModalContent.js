import React from "react";
import PropTypes from "prop-types";
import Button from "../../library/components/Button";
import { ToolboxModalContentStyled } from "./ThemeToolbox.styles";

const ToolboxModalContent = ({
  title,
  description,
  leftText,
  rightText,
  toggleModalVisible,
  handleOnClick,
  ...props
}) => {
  return (
    <ToolboxModalContentStyled>
      <div className="toolbox-modal-header">
        <h3 className="toolbox-modal-header__title">{title}</h3>
      </div>
      <div className="toolbox-modal-content__body">
        <p className="toolbox-modal-content__content">{description}</p>
        <div className="toolbox-modal-content__button-container">
          <Button
            large
            colorWhite
            onClick={() => {
              handleOnClick();
              toggleModalVisible(false);
            }}
            className="toolbox-modal-content__button"
            {...props}
          >
            {leftText}
          </Button>
          <Button
            large
            outline
            onClick={() => toggleModalVisible(false)}
            className="toolbox-modal-content__button"
            {...props}
          >
            {rightText}
          </Button>
        </div>
      </div>

      <div className="button-container" />
    </ToolboxModalContentStyled>
  );
};

ToolboxModalContent.defaultProps = {
  title: "",
  description: "",
  leftText: "",
  rightText: "",
  toggleModalVisible: () => {},
  handleOnClick: () => {}
};

ToolboxModalContent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  leftText: PropTypes.string,
  rightText: PropTypes.string,
  toggleModalVisible: PropTypes.func,
  handleOnClick: PropTypes.func
};

export default ToolboxModalContent;
