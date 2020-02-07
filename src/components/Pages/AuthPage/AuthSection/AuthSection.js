import React, { useState, useContext } from 'react';
import firebase from 'firebase';
import { faArrowCircleRight, faAt, faLockAlt } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthSectionStyled } from './AuthSection.styles';
import Input from '../../../../library/Input/Input';
import Row from '../../../../library/ForumGrid/Row';
import Column from '../../../../library/ForumGrid/Column';
import Button from '../../../../library/Button';
import SocialSignInButton from '../SocialSignInButton';
import SectionTitle from '../../../Shared/SectionTitle';
import { FirebaseContext } from '../../../../assets/FirebaseProvider';

const AuthSection = () => {
  const { user = {} } = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

  const handleEmailSignIn = () => {
    if (user && user.isAnonymous) {
      const credential = firebase.auth.EmailAuthProvider.credential(email, password);
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
    <AuthSectionStyled>
      <SectionTitle
        title={user && user.isAnonymous ? 'Sign Up' : 'Sign In'}
        description={
          user && user.isAnonymous
            ? 'Welcome to ForumUi.\nSign up in order to save your work.'
            : 'Welcome back to ForumUi'
        }
        hideDivider
      />
      <div className="divider" />
      <Row stretch>
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
      <Row stretch>
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
      <Row stretch>
        <Column>
          <Button primary large onClick={handleEmailSignIn}>
            Sign in
            <FontAwesomeIcon style={{ marginLeft: '14px' }} icon={faArrowCircleRight} />
          </Button>
        </Column>
      </Row>
      <div className="divider" />
      <Row stretch>
        <Column col={3} gutterRight={6}>
          <SocialSignInButton large grow google>
            Sign in with Google
          </SocialSignInButton>
        </Column>
        <Column col={3} gutterLeft={6}>
          <SocialSignInButton large grow github>
            Sign in with Github
          </SocialSignInButton>
        </Column>
      </Row>
    </AuthSectionStyled>
  );
};

AuthSection.defaultProps = {};

AuthSection.propTypes = {};

export default AuthSection;
