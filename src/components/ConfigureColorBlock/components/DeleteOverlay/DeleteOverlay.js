import React from 'react';
import PropTypes from 'prop-types';
import { DeleteOverlayContainer } from './DeleteOverlay.styles';

const DeleteOverlay = ({}) => {
  return (
    <DeleteOverlayContainer>
      <button>Delete</button>
      <button>Cancel</button>
    </DeleteOverlayContainer>
  );
};

DeleteOverlay.propTypes = {

};

export default DeleteOverlay;