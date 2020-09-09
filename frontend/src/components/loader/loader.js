import React from "react";
import Loader from "react-loader-spinner";

export default ({ size, customStyle }) => {
  return (
    <Loader
      height={size || 20}
      width={size || 20}
      style={customStyle}
      type="TailSpin"
      color="purple"
    />
  );
};
