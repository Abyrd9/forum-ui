import React from "react";
import { LoadingStyled } from "./Loading.styles";
import LoadingIcon from "../Icons/LoadingIcon";

const Loading = ({ ...props }) => {
  return (
    <LoadingStyled data-testid="loading-icon">
      <LoadingIcon {...props} />
    </LoadingStyled>
  );
};

export default Loading;
