import React from 'react';
import PropTypes from 'prop-types';
import { ExampleCardStyled } from './ExampleCard.styles';
import Facebook from '../../../Utilities/Icons/Facebook';
import Twitter from '../../../Utilities/Icons/Twitter';
import Menu from '../../../Utilities/Icons/Menu';
import Star from '../../../Utilities/Icons/Star';
import Play from '../../../Utilities/Icons/Play';
import PlusCircle from '../../../Utilities/Icons/PlusCircle';

const ExampleCard = ({ spacing }) => {
  return (
    <ExampleCardStyled spacing={spacing}>
      <div className="spacing spacing-500" />
      <div className="social-content-block">
        <span className="social-content-block__share">share</span>
        <span className="social-content-block__facebook">
          <Facebook />
        </span>
        <span className="social-content-block__twitter">
          <Twitter />
        </span>
        <span className="social-content-block__menu">
          <Menu />
        </span>
      </div>
      <div className="spacing spacing-700" />
      <div className="main-content-block">
        <span className="main-content-block__title">Breaking Bad</span>
        <div className="spacing spacing-300" />
        <div className="main-content-block__features-block">
          <span>9.5/10</span>
          <span>TV Series</span>
          <span>Crime, Drama, Thriller</span>
        </div>
        <div className="spacing spacing-400" />
        <p className="main-content-block__description">
          A chemistry teacher diagnosed with a terminal lung cancer teams up with his former student
          to cook and sell crystal meth.
        </p>
        <div className="spacing spacing-400" />
        <div className="main-content-block__divider" />
        <div className="spacing spacing-300" />
        <div className="main-content-block__cta-block">
          <span className="primary-cta">
            <Play />
            <div />
            <p>watch trailer</p>
          </span>
          <span className="secondary-cta">
            <p>
              <PlusCircle />
              Add to Watchlist
            </p>
            <div className="spacing spacing-100" />
            <p>546 of your friends have watched this</p>
          </span>
        </div>
      </div>
      <div className="spacing spacing-800" />
    </ExampleCardStyled>
  );
};

ExampleCard.defaultProps = {
  spacing: {},
};

ExampleCard.propTypes = {
  spacing: PropTypes.shape({
    '100': PropTypes.string,
    '200': PropTypes.string,
    '300': PropTypes.string,
    '400': PropTypes.string,
    '500': PropTypes.string,
    '600': PropTypes.string,
    '700': PropTypes.string,
    '800': PropTypes.string,
  }),
};

export default ExampleCard;
