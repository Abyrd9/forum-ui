import React, { useState, useContext } from "react";
import firebase from "firebase";
import { faSignInAlt } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import isEmpty from "lodash.isempty";
import Row from "../library/components/ForumGrid/Row";
import Column from "../library/components/ForumGrid/Column";
import Divider from "../components/Divider";
import SectionTitle from "../components/SectionTitle";
import Input from "../library/components/Input";
import Button from "../library/components/Button";
import SocialAuthBlock from "../components/SocialAuthBlock";
import { ACTION_CODE_SETTINGS } from "../constants";
import { StoreContext, ACTION_TYPES } from "../assets/StoreProvider";

const GOOGLE_PROVIDER = new firebase.auth.GoogleAuthProvider();
const GITHUB_PROVIDER = new firebase.auth.GithubAuthProvider();

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [inputInfo, setInputInfo] = useState({});
  const { dispatch } = useContext(StoreContext);

  const handleEmailAuth = () => {
    firebase
      .auth()
      .sendSignInLinkToEmail(email, ACTION_CODE_SETTINGS)
      .then(response => {
        console.log(response);
        setInputInfo({
          message: "A verification link was sent to your email!",
          color: "#A5D836"
        });
      })
      .catch(error => {
        const { code, message } = error;
        console.error(code, message);
        dispatch({ type: ACTION_TYPES.ADD_NOTIFICATION, payload: message });
      });
  };

  const handleGoogleSignIn = () => {
    firebase.auth().signInWithRedirect(GOOGLE_PROVIDER);
  };

  const handleGithubSignIn = () => {
    firebase.auth().signInWithRedirect(GITHUB_PROVIDER);
  };

  return (
    <>
      <Divider spacing={800} />
      <SectionTitle title="Register" />
      <Row>
        <Column xsUp={12} mdUp={8} lg={6}>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            handleOnChange={({ target }) => setEmail(target.value)}
            infoShow={!isEmpty(inputInfo)}
            infoMssg={inputInfo}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Button
            primary
            large
            icon={<FontAwesomeIcon icon={faSignInAlt} />}
            onClick={handleEmailAuth}
          >
            Continue
          </Button>
        </Column>
      </Row>
      <Divider spacing={400} />
      <Row>
        <Column xsUp={12} mdUp={6} lg={4}>
          <SocialAuthBlock
            handleGoogleSignIn={handleGoogleSignIn}
            handleGithubSignIn={handleGithubSignIn}
          />
        </Column>
      </Row>
    </>
  );
};

AuthPage.propTypes = {};

export default AuthPage;
