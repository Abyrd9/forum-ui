import React, { useState, useContext } from "react";
import { faSignOut, faUserSlash } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { ProfileToolboxStyled } from "./ProfileToolbox.styles";
import Button from "../../library/components/Button";
import ToolboxModalContent from "../ThemeToolbox/ToolboxModalContent";
import Modal from "../../library/components/Modal";
import { StoreContext, ACTION_TYPES } from "../../assets/StoreProvider";

const ProfileToolbox = () => {
  const { push = () => {} } = useHistory();
  const { dispatch } = useContext(StoreContext);
  const [modalVisible, toggleModalVisible] = useState(false);
  const [modalContentType, setModalContentType] = useState("");

  const tools = [
    {
      toolProps: {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        error: true,
        onClick: () => {
          setModalContentType("sign-out");
          toggleModalVisible(true);
        }
      },
      text: "Sign Out"
    },
    {
      toolProps: {
        icon: <FontAwesomeIcon icon={faUserSlash} />,
        error: true,
        onClick: () => {
          setModalContentType("delete");
          toggleModalVisible(true);
        }
      },
      text: "Delete Profile"
    }
  ];

  return (
    <>
      <ProfileToolboxStyled>
        <ul className="toolbox-list">
          {tools.map(({ toolProps, text }) => (
            <li className="toolbox-list__item">
              <Button
                large
                colorWhite
                {...toolProps}
                className="toolbox-list__button"
              >
                {text}
              </Button>
            </li>
          ))}
        </ul>
      </ProfileToolboxStyled>
      <Modal
        visible={modalVisible}
        handleOnClose={value => toggleModalVisible(value)}
      >
        <>
          {modalContentType === "sign-out" && (
            <ToolboxModalContent
              title="Are you sure?"
              description="By clicking the sign out button you will be unregistered and moved back to the register page."
              leftText="Sign out"
              rightText="Cancel"
              toggleModalVisible={toggleModalVisible}
              handleOnClick={() => {
                firebase
                  .auth()
                  .signOut()
                  .then(() => push("/register"))
                  .catch(error => {
                    const { code, message } = error;
                    console.error(code, message);
                    dispatch({
                      type: ACTION_TYPES.ADD_NOTIFICATION,
                      payload: message
                    });
                  });
              }}
              error
            />
          )}
          {modalContentType === "delete" && (
            <ToolboxModalContent
              title="Are you sure?"
              description="By selecting delete you will not be able to recover this account."
              leftText="Delete"
              rightText="Cancel"
              toggleModalVisible={toggleModalVisible}
              handleOnClick={() => {
                const user = firebase.auth().currentUser;
                user
                  .delete()
                  .then(() => push("/register"))
                  .catch(error => {
                    const { code, message } = error;
                    console.error(code, message);
                    dispatch({
                      type: ACTION_TYPES.ADD_NOTIFICATION,
                      payload: message
                    });
                  });
              }}
              error
            />
          )}
        </>
      </Modal>
    </>
  );
};

export default ProfileToolbox;
