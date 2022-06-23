import "../sass/loading-indicator.scss";
import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { Oval } from "react-loader-spinner";
import classNames from "classnames";
import { CircularProgress } from "@mui/material";
import index from "../sass/index.scss";

function LoadingIndicator({ isLoaded }) {
  const { promiseInProgress } = usePromiseTracker({});
  const colors = {
    $foreground: index.$foreground,
    $background: index.$background,
    $red: index.$red,
  };
  return (
    <div className="loading__container">
      <div className="loading__contents">
        {promiseInProgress && (
          <CircularProgress colors={colors.$red} className="loading__icon" />
        )}
      </div>
    </div>
  );
}

export default LoadingIndicator;
