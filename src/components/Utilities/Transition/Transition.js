import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TransitionStyled } from './Transition.styles';

const Transition = ({ children, show }) => {
  const [mounted, setMounted] = useState(show);

  useEffect(() => {
    if (show) setMounted(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setMounted(false);
  };

  return (
    mounted && (
      <TransitionStyled show={show} onAnimationEnd={onAnimationEnd}>
        {children}
      </TransitionStyled>
    )
  );
};

Transition.defaultProps = {
  children: 'Transition',
  show: false,
};

Transition.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  show: PropTypes.bool,
};

export default Transition;
