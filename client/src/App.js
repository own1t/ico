import React from "react";
import { Drizzle } from "@drizzle/store";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import drizzleOptions from "./drizzleOptions";
import LoadingContainer from "./LoadingContainer";
import Header from "./components/Header";

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
            </Router>
          </LoadingContainer>
        </DrizzleProvider>
      </div>
    </div>
  );
};

export default App;
