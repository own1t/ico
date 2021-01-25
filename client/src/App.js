import React from "react";
import { Drizzle } from "@drizzle/store";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import drizzleOptions from "./drizzleOptions";
import LoadingContainer from "./LoadingContainer";
import Header from "./components/Header";
import ICOInfo from "./components/ICOInfo";
import Investing from "./components/Investing";
import Whitelist from "./components/Whitelist";
import Admin from "./components/Admin";

import "./App.css";

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <DrizzleProvider drizzle={drizzle}>
          <LoadingContainer>
            <Router>
              <nav className="my-4">
                <Header />
              </nav>
              <Switch>
                <div className="row">
                  <Route path="/" exact>
                    <div className="col card mx-1">
                      <ICOInfo />
                    </div>
                    <div className="col card mx-1">
                      <Investing />
                    </div>
                  </Route>
                  <Route path="/whitelist" exact>
                    <Whitelist />
                  </Route>
                  <Route path="/admin" exact>
                    <h1 className="card-title header mt-5">Admin</h1>
                    <Admin />
                  </Route>
                </div>
              </Switch>
            </Router>
          </LoadingContainer>
        </DrizzleProvider>
      </div>
    </div>
  );
};

export default App;
