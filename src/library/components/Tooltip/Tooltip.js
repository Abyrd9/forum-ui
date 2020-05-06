/* eslint-disable consistent-return */
import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TooltipStyled } from './TooltipStyled';
import { onDocumentClick, onDocumentHover, useWindowEffect, onDocumentTouch } from './helpers';

const getIsMobile = () => (window.matchMedia('only screen and (max-width: 760px)').matches);

const Tooltip = ({ content, position, showOnClick, handleOnClick, className, children, ...props }) => {
  const ContainerRef = useRef(null);
  const TooltipRef = useRef(null);

  const [tpCoordinates, updateTpCoordinates] = useState({ x: null, y: null });
  const [arrowCoordinates, updateArrowCoordinates] = useState({ top: 0, left: 0 });
  const [visible, toggleVisible] = useState(false);

  const calculate = () => {
    const container = ContainerRef.current.getBoundingClientRect();
    const tooltip = TooltipRef.current.getBoundingClientRect();
    const body = document.body.getBoundingClientRect();

    // Is the tooltip wider or taller than the hover item?
    const wider = tooltip.width > container.width;
    const taller = tooltip.height > container.height;

    const widthDiff = tooltip.width - container.width;
    const heightDiff = tooltip.height - container.height;

    const calculateCoordinateValue = (operator, value, key) => {
      let val;
      if (key === 'offset') val = value + 15;
      if (key === 'center') val = value / 2;
      return operator ? -Math.abs(val) : Math.abs(val);
    };

    const getBleed = (pos, x, y) => {
      const obj = { x, y };
      const bleeds = {
        left: false,
        right: false,
        top: false,
        bottom: false,
      };
      const horizontalDiff = container.left - Math.abs(x);
      const verticalDiff = container.top - Math.abs(y);

      bleeds.left = horizontalDiff < body.left;
      bleeds.right = horizontalDiff + tooltip.width > body.right;
      bleeds.top = verticalDiff < body.top;
      bleeds.bottom = verticalDiff + tooltip.height > body.bottom;

      let arrowPosition = pos;
      if (pos === 'top' || pos === 'bottom') {
        if (bleeds.left) {
          obj.x = x + Math.abs(horizontalDiff) + 15;
        } else if (bleeds.right) {
          obj.x = x - Math.abs(horizontalDiff + tooltip.width - body.right) - 15;
        }
        if (bleeds.bottom && pos === 'bottom') {
          arrowPosition = 'top';
          obj.y = calculateCoordinateValue(true, tooltip.height, 'offset');
        } else if (bleeds.top && pos === 'top') {
          arrowPosition = 'bottom';
          obj.y = calculateCoordinateValue(false, container.height, 'offset');
        }
      }

      if (pos === 'left' || pos === 'right') {
        if (bleeds.top) {
          obj.y = y + Math.abs(verticalDiff) + 15;
        } else if (bleeds.bottom) {
          obj.y = y - Math.abs(verticalDiff + tooltip.height - body.bottom) - 15;
        }
        if (bleeds.left && pos === 'left') {
          arrowPosition = 'right';
          obj.x = calculateCoordinateValue(false, container.width, 'offset');
        } else if (bleeds.right && pos === 'right') {
          arrowPosition = 'left';
          obj.x = calculateCoordinateValue(true, tooltip.width, 'offset');
        }
      }

      // Figure out the position of the arrow
      const calculateArrowPosition = (coordinate, value) => {
        if ((pos === 'right' || pos === 'left') && !taller) {
          return `${value / 2}px - 6px`;
        }
        if ((pos === 'top' || pos === 'bottom') && !wider) {
          return `${value / 2}px - 6px`;
        }
        return `${Math.abs(coordinate) + value / 2 - 6}px`;
      };

      const widthValue = !wider ? tooltip.width : container.width;
      const heightValue = !taller ? tooltip.height : container.height;
      switch (arrowPosition) {
        case 'top':
          updateArrowCoordinates({ top: 'calc(100% - 6px)', left: calculateArrowPosition(obj.x, widthValue) });
          break;
        case 'bottom':
          updateArrowCoordinates({ top: 'calc(0px - 6px)', left: calculateArrowPosition(obj.x, widthValue) });
          break;
        case 'right':
          updateArrowCoordinates({ top: calculateArrowPosition(obj.y, heightValue), left: 'calc(0px - 6px)' });
          break;
        case 'left':
          updateArrowCoordinates({ top: calculateArrowPosition(obj.y, heightValue), left: 'calc(100% - 6px)' });
          break;
        default:
          break;
      }

      return obj;
    };

    let x = 0;
    let y = 0;
    const updatePos = pos => {
      switch (pos) {
        case 'top':
          x = calculateCoordinateValue(wider, widthDiff, 'center');
          y = calculateCoordinateValue(true, tooltip.height, 'offset');
          updateTpCoordinates(getBleed(pos, x, y));
          break;
        case 'bottom':
          x = calculateCoordinateValue(wider, widthDiff, 'center');
          y = calculateCoordinateValue(false, container.height, 'offset');
          updateTpCoordinates(getBleed(pos, x, y));
          break;
        case 'right':
          x = calculateCoordinateValue(false, container.width, 'offset');
          y = calculateCoordinateValue(taller, heightDiff, 'center');
          updateTpCoordinates(getBleed(pos, x, y));
          break;
        case 'left':
          x = calculateCoordinateValue(true, tooltip.width, 'offset');
          y = calculateCoordinateValue(taller, heightDiff, 'center');
          updateTpCoordinates(getBleed(pos, x, y));
          break;
        default:
          break;
      }
    };
    updatePos(position);
  };

  // On mount, calculate tooltip position
  useLayoutEffect(() => {
    calculate();
  }, []);

  // On window resize, calculate tooltip position
  useWindowEffect(() => {
    calculate();
  });

  const getEventTypeAndHandler = (isOnClick, isMobile) => {
    let eventType = '';
    let eventHandler = '';
    if (isMobile) {
      eventType = 'touchstart';
      eventHandler = onDocumentTouch(ContainerRef.current, toggleVisible);
    } else {
      eventType = isOnClick ? 'click' : 'mouseover';
      eventHandler = isOnClick
        ? onDocumentClick(ContainerRef.current, toggleVisible)
        : onDocumentHover(ContainerRef.current, toggleVisible);
    }
    return { eventType, eventHandler };
  };

  useEffect(() => {
    const isMobile = getIsMobile();
    const { eventType, eventHandler } = getEventTypeAndHandler(showOnClick, isMobile);
    document.addEventListener(eventType, eventHandler);
    return () => {
      document.removeEventListener(eventType, eventHandler);
    };
  }, []);

  useWindowEffect(() => {
    const isMobile = getIsMobile();
    const addListenerData = getEventTypeAndHandler(showOnClick, isMobile);
    const removeListenerData = getEventTypeAndHandler(showOnClick, !isMobile);
    document.addEventListener(addListenerData.eventType, addListenerData.eventHandler);
    document.removeEventListener(removeListenerData.eventType, removeListenerData.eventHandler);
  });

  const handleClick = event => {
    const isMobile = getIsMobile();
    if (showOnClick || isMobile) toggleVisible(!visible);
    handleOnClick(event);
  };

  return (
    <TooltipStyled
      tooltipPos={tpCoordinates}
      arrowPos={arrowCoordinates}
      ref={ContainerRef}
      visible={visible}
      className={className}
      {...props}
    >
      <span
        type="TOOLTIP"
        id="tooltip"
        className="tooltip"
        onClick={handleClick}
      >
        {children}
      </span>
      <span className="tooltip-content" ref={TooltipRef}>
        {content}
      </span>
    </TooltipStyled>
  );
};

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
  content: '',
  position: 'top',
  showOnClick: false,
  handleOnClick: () => {},
  className: 'tooltip',
};

Tooltip.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left', '']),
  showOnClick: PropTypes.bool,
  handleOnClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
};

export default Tooltip;
