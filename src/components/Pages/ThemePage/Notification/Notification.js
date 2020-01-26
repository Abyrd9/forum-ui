import React from 'react';
import PropTypes from 'prop-types';
import { NotificationStyled } from './Notification.styles';

const Notification = ({ message }) => {
  return <NotificationStyled>{message}</NotificationStyled>;
};

Notification.defaultProps = {
  message: '',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
