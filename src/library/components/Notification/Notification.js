/* eslint-disable no-plusplus */
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { NotificationStyled } from "./Notification.styles";
import CloseIcon from "./CloseIcon";

const getNodeElements = () => {
  // get all popup notification elements on the dom
  const popupNodeList = document.getElementsByClassName("pop-up-notification");
  return [...popupNodeList];
};

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
        console.log(
          children.props.children,
          currentIndex,
          24 * (currentIndex + 1)
        );
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
