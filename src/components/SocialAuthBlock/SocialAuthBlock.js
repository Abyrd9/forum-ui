import React from "react";
import PropTypes from "prop-types";
import { SocialAuthBlockStyled } from "./SocialAuthBlock.styles";
import Divider from "../Divider";
import GoogleLogo from "./GoogleLogo";
import GithubLogo from "./GithubLogo";

const SocialAuthBlock = ({ handleGoogleSignIn, handleGithubSignIn }) => {
  return (
    <SocialAuthBlockStyled>
      <div className="social-auth-divider">
        <p className="social-auth-divider__text">OR</p>
        <span className="social-auth-divider__divider-line" />
      </div>
      <Divider spacing={400} />
      <button
        type="button"
        className="social-button social-button--google"
        onClick={handleGoogleSignIn}
      >
        <p>
          Continue with <b>Google</b>
        </p>
        <div className="social-button__logo-container">
          <GoogleLogo className="social-button__logo social-button__logo--google" />
        </div>
      </button>
      <Divider spacing={100} />
      <button
        type="button"
        className="social-button social-button--github"
        onClick={handleGithubSignIn}
      >
        <p>
          Continue with <b>Github</b>
        </p>
        <div className="social-button__logo-container">
          <GithubLogo className="social-button__logo social-button__logo--github" />
        </div>
      </button>
    </SocialAuthBlockStyled>
  );
};

SocialAuthBlock.propTypes = {
  handleGoogleSignIn: PropTypes.func.isRequired,
  handleGithubSignIn: PropTypes.func.isRequired
};

export default SocialAuthBlock;
