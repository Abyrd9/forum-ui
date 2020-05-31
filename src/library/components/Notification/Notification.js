/* eslint-disable no-plusplus */
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { NotificationStyled } from "./Notification.styles";
import CloseIcon from "./CloseIcon";

const Notification = ({ handleRemoveNotification, duration, children }) => {
  const NotificationRef = useRef();
  const [show, toggleShow] = useState(true);
  const [mounted, setMounted] = useState(show);

  useEffect(() => {
    if (show) setMounted(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) {
      setMounted(false);
      handleRemoveNotification();
    }
  };

  const [bottom, setBottom] = useState();
  const setPosition = () => {
    const { current: node } = NotificationRef;
    if (document) {
      const nodeList = document.getElementsByClassName("pop-up-notification");
      const elements = [...nodeList];
      const currentIndex = elements.findIndex(element => {
        return element.isSameNode(node);
      });

      const gaps = 24 * (currentIndex + 1);
      let bottomValue = 0;
      for (let i = 0; i < currentIndex; i++) {
        bottomValue += elements[i].clientHeight;
      }
      setBottom(`${gaps + bottomValue}px`);
    }
  };

  useLayoutEffect(() => {
    setPosition();
  }, []);
  useEffect(() => {
    setPosition();
  });

  useEffect(() => {
    if (duration && typeof duration === "number") {
      setTimeout(() => {
        toggleShow(false);
      }, duration);
    }
  }, []);

  return mounted ? (
    <NotificationStyled
      onAnimationEnd={onAnimationEnd}
      className="pop-up-notification"
      ref={NotificationRef}
      bottom={bottom}
      show={show}
    >
      <CloseIcon
        className="notification-close-icon"
        onClick={() => toggleShow(false)}
      />
      {children}
    </NotificationStyled>
  ) : null;
};

Notification.defaultProps = {
  handleRemoveNotification: () => {},
  duration: 0,
  children: "Notification"
};

Notification.propTypes = {
  handleRemoveNotification: PropTypes.func,
  duration: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ])
};

export default Notification;
