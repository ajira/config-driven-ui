import React, { useEffect, useState } from "react";
import axios from "axios";
import GridContainer from "./components/GridContainer";
import { PageFormat, VizConfig } from "./config/PageFormat";

const App = () => {
  const [vizData, setVizData] = useState({});
  useEffect(() => {
    async function loadData() {
      const ids = Object.keys(VizConfig);
      const dataPromises = await ids
        .filter(id => VizConfig[id].url)
        .map(async id => {
          const config = VizConfig[id];
          const response = await axios.get(config.url);
          return {
            [id]: {
              data: response.data,
              config: VizConfig[id].config,
              plotMapping: VizConfig[id].plotMapping
            }
          };
        });
      const dataList = await Promise.all(dataPromises);
      const data = dataList.reduce((acc, item) => ({ ...acc, ...item }), {});
      setVizData(data);
    }
    loadData();
  }, []);
  return (
    <div className="App">
      <GridContainer config={PageFormat} vizConfig={vizData} />
    </div>
  );
};

export default App;
