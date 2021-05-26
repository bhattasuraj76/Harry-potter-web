import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

// components
import Header from "./shared/Header";

// views
import Home from "../views/Home";
import CharacterDetail from "../views/CharacterDetail";
import NotFound from "../views/session/NotFound";

const Layout = ({ history }) => {
  return (
    <div className="root">
      <Header history={history} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" redirect={() => <Redirect to="/" />} />
        <Route exact path="/character/:slug" component={CharacterDetail} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default withRouter(Layout);
