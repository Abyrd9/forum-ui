/* eslint-disable no-plusplus */
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { NotificationStyled } from "./Notification.styles";
import CloseIcon from "./CloseIcon";
import useClassNameObserver from "./useClassNameObserver";

const getNodeElements = () => {
  // get all popup notification elements on the dom
  const popupNodeList = document.getElementsByClassName("pop-up-notification");
  return [...popupNodeList];
};

/**
 * Notifications should be mounted based on the existence of their children, for example:
 * (example: return {messages.map(message => <Notification>{message}</Notification>)}).
 *
 * But we can't remove a message from that array until all notifications on the page are "done".
 * Because changing that array would mess up how the notifications are positioned on the page.
 * With that in mind, we manage the visible and hidden state of the notification based on classes
 * and observe changes to those classes to reposition Notification elements on the page.
 *
 * We also wait until all live notifications on the page have a "hidden" class before running the
 * `handleRemoveNotification` function for each Notification.
 */

const Notification = ({ handleRemoveNotification, duration, children }) => {
  const NotificationRef = useRef();
  const [show, toggleShow] = useState(true);

  const visibleClass = "pop-up-notification--visible";
  const hiddenClass = "pop-up-notification--hidden";
  const [popupStateClass, setPopupStateClass] = useState(visibleClass);
  const onAnimationEnd = () => {
    if (!show) {
      setPopupStateClass(hiddenClass);
    }
  };

  useEffect(() => {
    const elements = getNodeElements();
    if (elements.every(element => element.classList.contains(hiddenClass))) {
      handleRemoveNotification();
    }
  }, [popupStateClass]);

  const [bottom, setBottom] = useState();
  const setPosition = elementList => {
    const { current: node } = NotificationRef;
    if (document) {
      const elements = elementList.filter(popupNode =>
        popupNode.classList.contains(visibleClass)
      );
      const currentIndex = elements.findIndex(element => {
        return element.isSameNode(node);
      });
      if (currentIndex >= 0) {
        const gaps = 24 * (currentIndex + 1);
        let bottomValue = 0;
        for (let i = 0; i < currentIndex; i++) {
          bottomValue += elements[i].clientHeight;
        }
        setBottom(`${gaps + bottomValue}px`);
      }
    }
  };

  useEffect(() => {
    const elements = getNodeElements();
    setPosition(elements);
  });

  useEffect(() => {
    if (duration && typeof duration === "number") {
      setTimeout(() => {
        toggleShow(false);
      }, duration);
    }
  }, []);

  useClassNameObserver(([{ attributeName }]) => {
    if (attributeName === "class") {
      const elements = getNodeElements();
      setPosition(elements);
    }
  }, getNodeElements());

  return ReactDOM.createPortal(
    <NotificationStyled
      onAnimationEnd={onAnimationEnd}
      className={`pop-up-notification ${popupStateClass}`}
      ref={NotificationRef}
      bottom={bottom}
      show={show}
    >
      <CloseIcon
        className="notification-close-icon"
        onClick={() => toggleShow(false)}
      />
      {children}
    </NotificationStyled>,
    document.body
  );
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
