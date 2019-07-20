import Grid from "@material-ui/core/Grid";
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/App.scss";

const GridContainer = ({ configs }) => configs.map(config => {
  if (Array.isArray(config)) {
    return (
      <Grid container className={styles.root} spacing={1}>
        <GridContainer configs={config} />
      </Grid>
    );
  }

  return (
    <Grid item xs={config.width}>
      <div style={{ height: config.height, backgroundColor: config.color }}>
        {config.width}
      </div>
    </Grid>
  );
});

GridContainer.propTypes = {
  configs: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.string,
      color: PropTypes.string
    }).isRequired
  ]).isRequired
};

export default GridContainer;
