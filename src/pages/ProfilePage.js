import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import isEmpty from "lodash.isempty";
import firebase from "firebase";
import { faSignOut } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "../components/Divider";
import { StoreContext } from "../assets/StoreProvider";
import SectionTitle from "../components/SectionTitle";
import { FirebaseContext } from "../assets/FirebaseProvider";
import Button from "../library/components/Button";
import Modal from "../library/components/Modal";
import ToolboxModalContent from "../components/ThemeToolbox/ToolboxModalContent";

const ProfilePage = () => {
  const { push = () => {} } = useHistory();
  const { userData } = useContext(FirebaseContext);
  const { store = {} } = useContext(StoreContext);
  const { themes = {} } = store;

  const [signOutModalVisible, toggleSignOutModalVisible] = useState(false);

  return (
    <>
      <Divider spacing={800} />
      <SectionTitle title="Profile Info" description="" />
      <h4>Email:</h4>
      <p>{userData && userData.email}</p>
      <Divider spacing={400} />
      <h4># of Themes:</h4>
      <p>{!isEmpty(themes) && Object.values(themes).length}</p>
      <Divider spacing={500} upperSpacing={500} show />
      <Button
        error
        large
        colorWhite
        icon={<FontAwesomeIcon icon={faSignOut} />}
        onClick={() => toggleSignOutModalVisible(true)}
      >
        Sign out
      </Button>
      <Modal
        visible={signOutModalVisible}
        handleOnClose={value => toggleSignOutModalVisible(value)}
      >
        <ToolboxModalContent
          title="Are you sure?"
          description="If you sign out, you will be automatically kicked to the sign in page."
          leftText="Sign out"
          rightText="Cancel"
          toggleModalVisible={toggleSignOutModalVisible}
          handleOnClick={() => {
            firebase.auth().signOut();
            push("/authentication?auth_type=sign-in");
          }}
          error
        />
      </Modal>
    </>
  );
};

export default ProfilePage;
