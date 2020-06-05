import React from "react";
import PropTypes from "prop-types";
import {
  GenericTitleWrapperStyled,
  LoadingState
} from "./GenericTitleWrapper.styles";
import LoadingIcon from "../Utilities/Icons/LoadingIcon";

const GenericTitleWrapper = ({ title, loading, minHeight, children }) => {
  return (
    <GenericTitleWrapperStyled>
      <h3 className="typography-title">{title}</h3>
      {loading ? (
        <LoadingState minHeight={minHeight}>
          <LoadingIcon />
        </LoadingState>
      ) : (
        children
      )}
    </GenericTitleWrapperStyled>
  );
};

GenericTitleWrapper.defaultProps = {
  title: "",
  loading: false,
  minHeight: 0,
  children: "GenericTitleWrapper"
};

GenericTitleWrapper.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  minHeight: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ])
};

export default GenericTitleWrapper;
