import React, { useContext } from "react";
import isEmpty from "lodash.isempty";
import Divider from "../components/Divider";
import { StoreContext } from "../assets/StoreProvider";
import SectionTitle from "../components/SectionTitle";
import { FirebaseContext } from "../assets/FirebaseProvider";

import ProfilePageInfoBlock from "../components/ProfilePageInfoBlock";
import ToolboxContainer from "../components/ToolboxContainer/ToolboxContainer";
import ProfileToolbox from "../components/ProfileToolbox/ProfileToolbox";

const ProfilePage = () => {
  const { userData } = useContext(FirebaseContext);
  const { store = {} } = useContext(StoreContext);
  const { themes = {} } = store;

  const themesLength =
    !isEmpty(themes) &&
    Object.values(themes)
      .length.toString()
      .padStart(2, "0");

  return (
    <>
      <Divider spacing={800} />
      <SectionTitle title="Profile Info" description="" />
      <ProfilePageInfoBlock
        title="Email:"
        content={userData && userData.email}
      />
      <ProfilePageInfoBlock
        title="Number of Themes:"
        content={`# - ${themesLength}`}
      />
      <ToolboxContainer>
        <ProfileToolbox />
      </ToolboxContainer>
    </>
  );
};

export default ProfilePage;
