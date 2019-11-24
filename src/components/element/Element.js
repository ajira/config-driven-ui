import React from "react";
import PropTypes from "prop-types";
import Plotly from "./Plotly";
import Title from "./Title";

const handleType = {
  title: config => <Title config={config} />,
  plot: config => <Plotly config={config} />
};
const Element = ({ type, config }) => {
  if (config.element) {
    return config.element;
  }
  const handler = handleType[type];
  return handler ? handler(config) : null;
};

Element.defaultProps = {
  config: { element: <div>Element</div> }
};

Element.propTypes = {
  type: PropTypes.type,
  config: PropTypes.shape({
    element: PropTypes.element,
    data: PropTypes.array,
    config: PropTypes.object,
    value: PropTypes.string,
    plotMapping: PropTypes.shape({ x: PropTypes.string, y: PropTypes.string })
  })
};
export default Element;
