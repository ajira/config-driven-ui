import Grid from "@material-ui/core/Grid";
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/App.scss";

const GridContainer = ({ config }) => {
  if (Array.isArray(config)) {
    return config.map(row => <GridContainer config={row} />);
  }

  if (config.rows) {
    return (
      <Grid item xs={config.width || 12}>
        {config.rows.map(row => (
          <Grid container className={styles.root} spacing={1}>
            <GridContainer config={row} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid item xs={config.width || 12}>
      <div style={{ height: config.height, backgroundColor: config.color }}>
        {config.width}
      </div>
    </Grid>
  );
};

GridContainer.propTypes = {
  config: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.string,
      color: PropTypes.string
    }).isRequired
  ]).isRequired
};

export default GridContainer;
