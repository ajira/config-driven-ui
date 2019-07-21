import React from "react";
import GridContainer from "./components/GridContainer";
import PageFormat from "./config/PageFormat";

const App = () => (
  <div className="App">
    <GridContainer config={PageFormat} />
  </div>
);

export default App;
