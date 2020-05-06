import React, { useState, useContext } from "react";
import firebase from "firebase";
import { faSignInAlt } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Row from "../library/components/ForumGrid/Row";
import Column from "../library/components/ForumGrid/Column";
import Divider from "../components/Divider";
import Input from "../library/components/Input";
import Button from "../library/components/Button";
import { FirebaseContext } from "../assets/FirebaseProvider";

const AuthPage = () => {
  const { userData = {} } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignIn = () => {
    if (!userData) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          console.error(error);
        });
    } else if (userData) {
      console.log("This user is already signed in.");
    }
  };

  return (
    <>
      <Divider spacing={800} />
      <Row>
        <Column col={5}>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            handleOnChange={({ target }) => setEmail(target.value)}
          />
        </Column>
      </Row>
      <Row>
        <Column col={5}>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            handleOnChange={({ target }) => setPassword(target.value)}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Button
            primary
            large
            icon={<FontAwesomeIcon icon={faSignInAlt} />}
            onClick={handleEmailSignIn}
          >
            Continue
          </Button>
        </Column>
      </Row>
    </>
  );
};

AuthPage.propTypes = {};

export default AuthPage;
