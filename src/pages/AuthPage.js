import React, { useState, useContext, useEffect } from "react";
import firebase from "firebase";
import { useLocation, useHistory } from "react-router-dom";
import { faSignInAlt } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import isEmpty from "lodash.isempty";
import Row from "../library/components/ForumGrid/Row";
import Column from "../library/components/ForumGrid/Column";
import Divider from "../components/Divider";
import SectionTitle from "../components/SectionTitle";
import Input from "../library/components/Input";
import Button from "../library/components/Button";
import { FirebaseContext } from "../assets/FirebaseProvider";

const AuthPage = () => {
  const location = useLocation();
  const { push = () => {} } = useHistory();
  const { userData = {} } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authType, setAuthType] = useState("sign-in");

  useEffect(() => {
    if (location.search) {
      setAuthType(location.search.split("=")[1]);
    }
  }, [location.search]);

  const handleEmailSignIn = () => {
    if (isEmpty(userData)) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          push("/");
        })
        .catch(error => {
          console.error(error.code);
          console.error(error.message);
        });
    } else if (!isEmpty(userData)) {
      console.log("This user is already signed in.");
    }
  };

  const handleEmailSignUp = () => {
    if (isEmpty(userData)) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          push("/");
        })
        .catch(error => {
          console.error(error.code);
          console.error(error.message);
        });
    } else if (!isEmpty(userData)) {
      console.log("This user is already signed in.");
    }
  };

  let title = "";
  if (authType === "sign-in") title = "Sign In";
  if (authType === "sign-up") title = "Sign Up";

  return (
    <>
      <Divider spacing={800} />
      <SectionTitle title={title} />
      <Row>
        <Column xsUp={12} mdUp={6} lgUp={5}>
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
        <Column xsUp={12} mdUp={6} lgUp={5}>
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
            onClick={() => {
              if (authType === "sign-in") handleEmailSignIn();
              if (authType === "sign-up") handleEmailSignUp();
            }}
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
