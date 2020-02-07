import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TransitionStyled } from './Transition.styles';

const Transition = ({ show, children }) => {
  const [mounted, setMounted] = useState(show);

  useEffect(() => {
    if (show) setMounted(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setMounted(false);
  };

  return (
    mounted && (
      <TransitionStyled show={show} onAnimationEnd={onAnimationEnd} data-testid="transition">
        {children}
      </TransitionStyled>
    )
  );
};

Transition.defaultProps = {
  show: false,
  children: 'Transition',
};

Transition.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default Transition;
