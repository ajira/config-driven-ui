import React from "react";
import GridContainer from "./GridContainer";
import PageFormat from "./config/PageFormat";

const App = () => (
  <div className="App">
    <GridContainer configs={PageFormat} />
  </div>
);

export default App;
