import React, { useEffect, useState } from "react";
import axios from "axios";
import GridContainer from "./components/GridContainer";
import { PageFormat, VizConfig } from "./config/PageFormat";

const App = () => {
  const [vizData, setVizData] = useState({});
  useEffect(async () => {
    const ids = Object.keys(VizConfig);
    const data = await ids
      .filter(id => VizConfig[id].url)
      .reduce(async (acc, id) => {
        const config = VizConfig[id];
        const response = await axios.get(config.url);
        return {
          ...acc,
          [id]: {
            data: response.data,
            config: VizConfig[id].config,
            plotMapping: VizConfig[id].plotMapping
          }
        };
      }, {});
    setVizData(data);
  }, []);
  return (
    <div className="App">
      <GridContainer config={PageFormat} vizConfig={vizData} />
    </div>
  );
};

export default App;
