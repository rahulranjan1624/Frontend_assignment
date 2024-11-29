import React from "react";
import "./App.css";
import Eventday from "./Eventday";
import { Route, Switch } from "react-router-dom";
import Router from "./Router";
import Generate from "./Generate";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Eventday} />
        <Route exact path="/event/:name?/:day?/:month?" component={Router} />
        <Route exact path="/generate" component={Generate} />
      </Switch>
    </div>
  );
}

export default App;
//main
