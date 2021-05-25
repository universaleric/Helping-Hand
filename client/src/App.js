import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Results from "./pages/Results";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/login"]}>
            <Login />
          </Route>
          <Route exact path={["/signup"]}>
            <SignUp />
          </Route>
          <Route exact path={["/results"]}>
            <Results />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
