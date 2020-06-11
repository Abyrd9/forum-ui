import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router-dom";
import {
  faEdit,
  faTrashAlt,
  faPlusCircle
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import isEmpty from "lodash.isempty";
import { ThemeToolboxStyled } from "./ThemeToolbox.styles";
import ToolboxModalContent from "./ToolboxModalContent";
import Button from "../../library/components/Button";
import { StoreContext, ACTION_TYPES } from "../../assets/StoreProvider";
import Modal from "../../library/components/Modal";
import Tooltip from "../../library/components/Tooltip/Tooltip";
import { FirebaseContext } from "../../assets/FirebaseProvider";

const ThemeToolbox = ({ activeThemeId }) => {
  const [modalVisible, toggleModalVisible] = useState(false);
  const [modalContentType, setModalContentType] = useState("");
  const { store, dispatch } = useContext(StoreContext);
  const { userData } = useContext(FirebaseContext);
  const { push = () => {} } = useHistory();
  const { pathname = "" } = useLocation();

  const tools = [
    {
      toolProps: {
        secondary: true,
        onClick: () => {
          if (pathname.includes("edit-theme")) {
            dispatch({
              type: ACTION_TYPES.ADD_NOTIFICATION,
              payload: "You are currently editing this theme."
            });
          } else {
            push("/edit-theme");
          }
        }
      },
      icon: faEdit,
      classAppendix: "--edit",
      tooltip: "Edit this theme"
    },
    {
      toolProps: {
        error: true,
        onClick: () => {
          if (Object.values(store.themes || {}).length <= 1) {
            dispatch({
              type: ACTION_TYPES.ADD_NOTIFICATION,
              payload:
                "You are reguired to have at least one theme at all times."
            });
          } else {
            setModalContentType("delete");
            toggleModalVisible(true);
          }
        }
      },
      icon: faTrashAlt,
      classAppendix: "--trash",
      tooltip: "Delete the current theme"
    },
    {
      toolProps: {
        success: true,
        onClick: () => {
          if (isEmpty(userData)) {
            dispatch({
              type: ACTION_TYPES.ADD_NOTIFICATION,
              payload:
                'You can only create new themes if you are registered. Click the "Register" button in the top right corner.'
            });
          } else {
            setModalContentType("create");
            toggleModalVisible(true);
          }
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
                  aria-label={classAppendix.replace("-", "")}
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
