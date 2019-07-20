import React from "react";
import GridContainer from "./GridContainer";
import PageFormat from "./config/PageFormat";

const App = () => (
  <div className="App">
    <GridContainer config={PageFormat} />
  </div>
);

export default App;
