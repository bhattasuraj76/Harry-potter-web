import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//components
import Layout from "./Layout";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Layout} />
    </Switch>
  </BrowserRouter>
);
export default App;
