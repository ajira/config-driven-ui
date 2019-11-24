import React from "react";
import PropTypes from "prop-types";

const Title = ({ config }) => <h2>{config.value}</h2>;

Title.propTypes = {
  config: PropTypes.shape({
    value: PropTypes.string
  }).isRequired
};

export default Title;
