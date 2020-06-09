import React from "react";
import PropTypes from "prop-types";
import { ProfilePageInfoBlockStyled } from "./ProfilePageInfoBlock.styles";

const ProfilePageInfoBlock = ({ title, content, children }) => {
  return (
    <ProfilePageInfoBlockStyled>
      <h5 className="info-block-title">{title}</h5>
      {content && <p className="info-block-content">{content}</p>}
      {children}
    </ProfilePageInfoBlockStyled>
  );
};

ProfilePageInfoBlock.defaultProps = {
  title: "",
  content: "",
  children: null
};

ProfilePageInfoBlock.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default ProfilePageInfoBlock;
