import PropTypes from "prop-types";

const propsCheck = {
  config: PropTypes.shape({
    type: PropTypes.string,
    config: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.string,
      color: PropTypes.string,
      id: PropTypes.string
    }),
    children: PropTypes.array
  }).isRequired,
  vizConfig: PropTypes.shape({ id: PropTypes.object }).isRequired
};

export { propsCheck };
