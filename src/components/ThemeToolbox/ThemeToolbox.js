import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useHistory } from "react-router-dom";
import {
  faTools,
  faEdit,
  faList,
  faCode,
  faTrashAlt,
  faPlusCircle
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import isEmpty from "lodash.isempty";
import {
  ThemeToolboxStyled,
  ThemeToolboxInfoMessage
} from "./ThemeToolbox.styles";
import ToolboxModalContent from "./ToolboxModalContent";
import Button from "../../library/components/Button";
import { StoreContext, ACTION_TYPES } from "../../assets/StoreProvider";
import Modal from "../../library/components/Modal";
import { FirebaseContext } from "../../assets/FirebaseProvider";
import Tooltip from "../../library/components/Tooltip/Tooltip";

const ThemeToolbox = ({ activeThemeId }) => {
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
      classAppendix: "--list",
      tooltip: "Choose a new theme"
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
      classAppendix: "--edit",
      tooltip: "Edit this theme"
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
      classAppendix: "--code",
      tooltip: "Copy this theme"
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
      classAppendix: "--trash",
      tooltip: "Delete the current theme"
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
      classAppendix: "--plus",
      tooltip: "Create a new theme"
    }
  ];

  return (
    <>
      <ThemeToolboxStyled>
        <FontAwesomeIcon icon={faTools} className="toolbox__tool-icon" />
        <span className="toolbox__divider" />
        <ul className="toolbox-list">
          {tools.map(({ toolProps, icon, classAppendix, tooltip }) => (
            <li className="toolbox-list__item">
              <Tooltip
                content={
                  <p className="toolbox-list__tooltip-content">{tooltip}</p>
                }
                position="bottom"
              >
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
              </Tooltip>
            </li>
          ))}
        </ul>
      </ThemeToolboxStyled>
      {isEmpty(userData) && (
        <ThemeToolboxInfoMessage>
          *In order to create more than one theme, you must be logged in.
        </ThemeToolboxInfoMessage>
      )}
      {Object.values(store.themes || {}).length <= 1 && (
        <ThemeToolboxInfoMessage>
          *ForumUi requires one theme to be present at all times. If the delete
          button is disabled, it is because only one theme currently exists.
        </ThemeToolboxInfoMessage>
      )}
      <Modal
        visible={modalVisible}
        handleOnClose={value => toggleModalVisible(value)}
      >
        <>
          {modalContentType === "delete" && (
            <ToolboxModalContent
              title="Are you sure?"
              description="By selecting delete you will be removing any trace of this theme from your account. You cannot get it back."
              leftText="Delete"
              rightText="Cancel"
              toggleModalVisible={toggleModalVisible}
              handleOnClick={() => {
                dispatch({
                  type: ACTION_TYPES.DELETE_THEME,
                  themeId: activeThemeId
                });
                push("/choose-theme");
              }}
              error
            />
          )}
          {modalContentType === "create" && (
            <ToolboxModalContent
              title="Are you sure?"
              description="By selecting create you will be adding a new theme to this account. You will then be sent to the edit page to being changing this theme."
              leftText="Create"
              rightText="Cancel"
              toggleModalVisible={toggleModalVisible}
              handleOnClick={() => {
                dispatch({
                  type: ACTION_TYPES.CREATE_THEME
                });
                push("/edit-theme");
              }}
              success
            />
          )}
        </>
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
