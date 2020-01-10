import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { ExampleCardStyled } from './ExampleCard.styles';
import WalterWhite from '../../../../assets/img/WalterWhite.png';
import Facebook from '../../../Utilities/Icons/Facebook';
import Twitter from '../../../Utilities/Icons/Twitter';
import Menu from '../../../Utilities/Icons/Menu';
import Star from '../../../Utilities/Icons/Star';
import Play from '../../../Utilities/Icons/Play';
import PlusCircle from '../../../Utilities/Icons/PlusCircle';
import ExampleCardSpacing from '../ExampleCardSpacing';
import ExampleCardHeader from '../ExampleCardHeader';

const ExampleCard = ({ spacing }) => {
  const [showSpacing, toggleShowSpacing] = useState(true);
  const ContainerRef = useRef(null);
  return (
    <div>
      <ExampleCardHeader
        title="Example Card:"
        toggleLabel="Toggle Legend:"
        toggleValue={showSpacing}
        handleToggleChange={toggleShowSpacing}
      />
      <ExampleCardStyled ref={ContainerRef}>
        <div className="image-container">
          <img src={WalterWhite} alt="Walter White" className="image" />
        </div>
        <div className="main-content-block">
          <ExampleCardSpacing
            spacingKey="500"
            spacingValue={spacing[500]}
            showSpacing={showSpacing}
            ContainerRef={ContainerRef}
          />
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
          <ExampleCardSpacing
            spacingKey="700"
            spacingValue={spacing[700]}
            showSpacing={showSpacing}
            ContainerRef={ContainerRef}
          />
          <span className="main-content-block__title">Breaking Bad</span>
          <ExampleCardSpacing
            spacingKey="300"
            spacingValue={spacing[300]}
            showSpacing={showSpacing}
            ContainerRef={ContainerRef}
          />
          <div className="main-content-block__features-block">
            <Star />
            <span>9.5/10</span>
            <span>TV Series</span>
            <span>Crime, Drama, Thriller</span>
          </div>
          <ExampleCardSpacing
            spacingKey="400"
            spacingValue={spacing[400]}
            showSpacing={showSpacing}
            ContainerRef={ContainerRef}
          />
          <p className="main-content-block__description">
            A chemistry teacher diagnosed with a terminal lung cancer teams up with his former
            student to cook and sell crystal meth.
          </p>
          <ExampleCardSpacing
            spacingKey="400"
            spacingValue={spacing[400]}
            showSpacing={showSpacing}
            ContainerRef={ContainerRef}
          />
          <div className="main-content-block__divider" />
          <ExampleCardSpacing
            spacingKey="300"
            spacingValue={spacing[300]}
            showSpacing={showSpacing}
            ContainerRef={ContainerRef}
          />
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
              <ExampleCardSpacing
                spacingKey="100"
                spacingValue={spacing[100]}
                showSpacing={showSpacing}
                ContainerRef={ContainerRef}
              />
              <p>546 of your friends have watched this</p>
            </span>
          </div>
          <ExampleCardSpacing
            spacingKey="800"
            spacingValue={spacing[800]}
            showSpacing={showSpacing}
            ContainerRef={ContainerRef}
          />
        </div>
      </ExampleCardStyled>
    </div>
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
