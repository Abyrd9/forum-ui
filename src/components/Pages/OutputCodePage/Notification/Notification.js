import React from "react";
import PropTypes from "prop-types";
import { NotificationStyled } from "./Notification.styles";

const Notification = ({ children }) => {
  return <NotificationStyled>{children}</NotificationStyled>;
};

Notification.defaultProps = {
  children: "Notification"
};

Notification.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ])
};

export default Notification;
    