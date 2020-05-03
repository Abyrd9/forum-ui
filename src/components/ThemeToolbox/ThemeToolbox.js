import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useHistory } from "react-router-dom";
import {
  faTools,
  faEdit,
  faList,
  faTrashAlt,
  faPlusCircle
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeToolboxStyled, ModalContent } from "./ThemeToolbox.styles";
import Button from "../../library/components/Button";
import { StoreContext, ACTION_TYPES } from "../../assets/StoreProvider";
import Modal from "../../library/components/Modal";

const ThemeToolbox = ({ activeThemeId, activeThemeName }) => {
  const [modalVisible, toggleModalVisible] = useState(false);
  const [modalContentType, setModalContentType] = useState("");
  const { dispatch } = useContext(StoreContext);
  const { pathname = "" } = useLocation();
  const { push = () => {} } = useHistory();

  const handleClickChooseTheme = () => {
    push("/choose-theme");
  };
  const handleClickEditTheme = () => {
    push("/edit-theme");
  };
  const handleClickDeleteTheme = () => {
    setModalContentType("delete");
    toggleModalVisible(true);
  };
  const handleClickCreateTheme = () => {
    setModalContentType("create");
    toggleModalVisible(true);
  };

  return (
    <>
      <ThemeToolboxStyled>
        <FontAwesomeIcon icon={faTools} className="toolbox__tool-icon" />
        <span className="toolbox__divider" />
        <ul className="toolbox-list">
          {!pathname.includes("choose-theme") && (
            <li className="toolbox-list__item">
              <Button
                primary
                large
                colorWhite
                className="toolbox-list__button"
                onClick={handleClickChooseTheme}
              >
                <FontAwesomeIcon
                  icon={faList}
                  className="toolbox-list__icon toolbox-list__icon--list"
                />
              </Button>
            </li>
          )}
          {!pathname.includes("edit-theme") && (
            <li className="toolbox-list__item">
              <Button
                secondary
                large
                colorWhite
                className="toolbox-list__button"
                onClick={handleClickEditTheme}
              >
                <FontAwesomeIcon
                  icon={faEdit}
                  className="toolbox-list__icon toolbox-list__icon--edit"
                />
              </Button>
            </li>
          )}
          <li className="toolbox-list__item">
            <Button
              error
              large
              colorWhite
              className="toolbox-list__button"
              onClick={handleClickDeleteTheme}
            >
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="toolbox-list__icon toolbox-list__icon--trash"
              />
            </Button>
          </li>
          <li className="toolbox-list__item">
            <Button
              success
              large
              colorWhite
              className="toolbox-list__button"
              onClick={handleClickCreateTheme}
            >
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="toolbox-list__icon toolbox-list__icon--plus"
              />
            </Button>
          </li>
        </ul>
      </ThemeToolboxStyled>
      <Modal
        visible={modalVisible}
        handleOnClose={value => toggleModalVisible(value)}
      >
        <ModalContent>
          {modalContentType === "delete" && (
            <>
              <h4 className="modal-title">
                Are you sure you want to delete <b>{activeThemeName}</b>?
              </h4>
              <div className="button-container">
                <Button
                  large
                  error
                  colorWhite
                  onClick={() => {
                    dispatch({
                      type: ACTION_TYPES.DELETE_THEME,
                      themeId: activeThemeId
                    });
                    toggleModalVisible(false);
                  }}
                >
                  Delete
                </Button>
                <Button
                  large
                  error
                  outline
                  onClick={() => toggleModalVisible(false)}
                >
                  Cancel
                </Button>
              </div>
            </>
          )}
          {modalContentType === "create" && (
            <>
              <h4 className="modal-title">
                Do you want to create a new theme?
              </h4>
              <div className="button-container">
                <Button
                  large
                  success
                  colorWhite
                  onClick={() => {
                    dispatch({
                      type: ACTION_TYPES.CREATE_THEME
                    });
                    push("/edit-theme");
                    toggleModalVisible(false);
                  }}
                >
                  Create
                </Button>
                <Button
                  large
                  success
                  outline
                  onClick={() => toggleModalVisible(false)}
                >
                  Cancel
                </Button>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

ThemeToolbox.defaultProps = {
  activeThemeId: "",
  activeThemeName: ""
};

ThemeToolbox.propTypes = {
  activeThemeId: PropTypes.string,
  activeThemeName: PropTypes.string
};

export default ThemeToolbox;
