import React from "react";
import { Drizzle } from "@drizzle/store";
import { drizzleReactHooks } from "@drizzle/react-plugin";

import drizzleOptions from "./drizzleOptions";
import LoadingContainer from "./LoadingContainer";

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <DrizzleProvider drizzle={drizzle}>
          <LoadingContainer>APP</LoadingContainer>
        </DrizzleProvider>
      </div>
    </div>
  );
};

export default App;
