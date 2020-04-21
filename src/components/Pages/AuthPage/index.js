import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../../common/SectionTitle';
import Row from '../../../library/components/ForumGrid/Row';
import Column from '../../../library/components/ForumGrid/Column';
import SocialSignInButton from './SocialSignInButton';
import AuthForm from './AuthForm/AuthForm';

const AuthPage = ({ children, ...props }) => {
  return <div>
    <SectionTitle title="Sign In" description="Welcome back to ForumUi" hideDivider />
    <AuthForm />
    <Row>
      <Column col={12} md={4} lg={3} xl={2.5} gutterRight={24}>
        <SocialSignInButton large grow google>
          Sign in with Google
        </SocialSignInButton>
      </Column>
      <Column col={12} md={4} lg={3} xl={2.5}>
        <SocialSignInButton large grow github>
          Sign in with Github
        </SocialSignInButton>
      </Column>
    </Row>
  </div>;
};

AuthPage.defaultProps = {
  children: 'AuthPage'
};

AuthPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default AuthPage;