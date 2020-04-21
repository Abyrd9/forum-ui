import React, { useState, useContext } from 'react';
import firebase from 'firebase';
import { faArrowCircleRight, faAt, faLockAlt } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthFormStyled } from './AuthForm.styles';
import Input from '../../../../library/components/Input/Input';
import Row from '../../../../library/components/ForumGrid/Row';
import Column from '../../../../library/components/ForumGrid/Column';
import Button from '../../../../library/components/Button';
import { FirebaseContext } from '../../../../assets/FirebaseProvider';

const AuthForm = () => {
  const { user = {}, authentication = {} } = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

  const handleEmailSignIn = () => {
    if (user && user.isAnonymous) {
      const credential = authentication.EmailAuthProvider.credential(email, password);
      firebase
        .auth()
        .currentUser.linkWithCredential(credential)
        .then(userCredential => {
          console.log('Anonymous account successfully upgraded', userCredential.user);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      console.log('This user is already signed in.');
    }
  };

  return (
    <AuthFormStyled>
      <Row>
        <Column col={6}>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            handleOnChange={({ target }) => setEmail(target.value)}
            Icon={<FontAwesomeIcon icon={faAt} />}
          />
        </Column>
      </Row>
      <Row>
        <Column col={6}>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            handleOnChange={({ target }) => setPassowrd(target.value)}
            Icon={<FontAwesomeIcon icon={faLockAlt} />}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Button primary large onClick={handleEmailSignIn}>
            Sign in
            <FontAwesomeIcon style={{ marginLeft: '14px' }} icon={faArrowCircleRight} />
          </Button>
        </Column>
      </Row>
    </AuthFormStyled>
  );
};

AuthForm.defaultProps = {};

AuthForm.propTypes = {};

export default AuthForm;
