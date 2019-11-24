import React from "react";
import GridContainer from "./components/grid/GridContainer";
import { PageFormat, VizConfig } from "./config/PageFormat";

const App = () => (
  <div className="App">
    <GridContainer config={PageFormat} vizConfig={VizConfig} />
  </div>
);

export default App;
