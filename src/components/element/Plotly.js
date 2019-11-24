import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Plot from "../../../node_modules/react-plotly.js/react-plotly";

const Plotly = ({ config }) => {
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  useEffect(() => {
    axios.get(config.url).then(({ data }) => {
      setX(data.map(datum => datum[config.plotMapping.x]));
      setY(data.map(datum => datum[config.plotMapping.y]));
    });
  }, []);

  return <Plot data={[{ x, y, ...config.config }]} />;
};

Plotly.propTypes = {
  config: PropTypes.shape({
    element: PropTypes.element,
    url: PropTypes.string,
    config: PropTypes.object,
    type: PropTypes.string,
    plotMapping: PropTypes.shape({ x: PropTypes.string, y: PropTypes.string })
  }).isRequired
};

export default Plotly;
