import React from "react";
import PropTypes from "prop-types";
import Plot from "react-plotly.js";

const Element = ({ config }) => {
  if (config.element) {
    return config.element;
  }
  console.log("config>>>", config);
  const x = config.data.map(datum => datum[config.plotMapping.x]);
  const y = config.data.map(datum => datum[config.plotMapping.y]);
  return <Plot data={[{ x, y, ...config.config }]} />;
};

Element.defaultProps = {
  config: { element: <div>Element</div> }
};

Element.propTypes = {
  config: PropTypes.shape({
    element: PropTypes.element,
    data: PropTypes.array,
    config: PropTypes.object,
    type: PropTypes.string,
    plotMapping: PropTypes.shape({ x: PropTypes.string, y: PropTypes.string })
  })
};
export default Element;
