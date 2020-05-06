import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useHistory } from "react-router-dom";
import {
  faTools,
  faEdit,
  faList,
  faCode,
  faTrashAlt,
  faPlusCircle,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import isEmpty from "lodash.isempty";
import { ThemeToolboxStyled, ModalContent } from "./ThemeToolbox.styles";
import DeleteThemeContent from './DeleteThemeContent';
import CreateThemeContent from './CreateThemeContent';
import Button from "../../library/components/Button";
import { StoreContext, ACTION_TYPES } from "../../assets/StoreProvider";
import Modal from "../../library/components/Modal";
import { FirebaseContext } from "../../assets/FirebaseProvider";

const ThemeToolbox = ({ activeThemeId, activeThemeName }) => {
  const [modalVisible, toggleModalVisible] = useState(false);
  const [modalContentType, setModalContentType] = useState("");
  const { store = {}, dispatch } = useContext(StoreContext);
  const { userData = {} } = useContext(FirebaseContext);
  const { pathname = "" } = useLocation();
  const { push = () => {} } = useHistory();

  const tools = [
    {
      toolProps: {
        primary: true,
        disabled: pathname.includes("choose-theme"),
        onClick: () => {
          push("/choose-theme");
        }
      },
      icon: faList,
      classAppendix: "--list"
    },
    {
      toolProps: {
        secondary: true,
        disabled: pathname.includes("edit-theme"),
        onClick: () => {
          push("/edit-theme");
        }
      },
      icon: faEdit,
      classAppendix: "--edit"
    },
    {
      toolProps: {
        secondary: true,
        disabled: pathname.includes("copy-theme"),
        onClick: () => {
          push("/copy-theme");
        }
      },
      icon: faCode,
      classAppendix: "--code"
    },
    {
      toolProps: {
        error: true,
        disabled: Object.values(store.themes || {}).length <= 1,
        onClick: () => {
          setModalContentType("delete");
          toggleModalVisible(true);
        }
      },
      icon: faTrashAlt,
      classAppendix: "--trash"
    },
    {
      toolProps: {
        success: true,
        disabled: isEmpty(userData),
        onClick: () => {
          setModalContentType("create");
          toggleModalVisible(true);
        }
      },
      icon: faPlusCircle,
      classAppendix: "--plus"
    },
  ]

  return (
    <>
      <ThemeToolboxStyled>
        <FontAwesomeIcon icon={faTools} className="toolbox__tool-icon" />
        <span className="toolbox__divider" />
        <ul className="toolbox-list">
          {tools.map(({ toolProps, icon, classAppendix }) => (
            <li className="toolbox-list__item">
              <Button
                large
                colorWhite
                {...toolProps}
                className="toolbox-list__button"
              >
                <FontAwesomeIcon
                  icon={icon}
                  className={`toolbox-list__icon toolbox-list__icon${classAppendix}`}
                />
              </Button>
            </li>
          ))}
        </ul>
      </ThemeToolboxStyled>
      <Modal
        visible={modalVisible}
        handleOnClose={value => toggleModalVisible(value)}
      >
        <ModalContent>
          {modalContentType === "delete" && (
            <DeleteThemeContent
              activeThemeName={activeThemeName}
              toggleModalVisible={toggleModalVisible}
              handleOnClick={() => {
                dispatch({
                  type: ACTION_TYPES.DELETE_THEME,
                  themeId: activeThemeId
                });
                push("/choose-theme");
              }}
            />
          )}
          {modalContentType === "create" && (
            <CreateThemeContent
              toggleModalVisible={toggleModalVisible}
              handleOnClick={() => {
                dispatch({
                  type: ACTION_TYPES.CREATE_THEME
                });
                push("/edit-theme");
              }}
            />
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
