import React from "react";
import { Switch, Route } from "react-router-dom";
import { Feed, New } from "./pages";

export default () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Feed />} />
      <Route path="/new" render={() => <New />} />
    </Switch>
  );
};
