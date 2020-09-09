import React from "react";
import * as s from "./styled-header";
import { Link } from "react-router-dom";
import { icons } from "../../assets";

export default () => {
  return (
    <s.MainHeader>
      <s.HeaderContent>
        <Link to="/">
          <s.Logo src={icons.logo} alt="instaRocket" />
        </Link>
        <Link to="/new">
          <s.Logo src={icons.camera} alt="Enviar publicação" />
        </Link>
      </s.HeaderContent>
    </s.MainHeader>
  );
};
