import Grid from "@material-ui/core/Grid";
import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/App.scss";
import Element from "./Element";

const GridContainer = ({ config, vizConfig }) => {
  const vizConfigLookup = id => vizConfig[id];
  const { type } = config;

  if (type === "Horizontal") {
    return config.children.map(row => (
      <GridContainer config={row} vizConfig={vizConfig} />
    ));
  }
  if (type === "Vertical") {
    return (
      <Grid item xs={config.config.width || 12}>
        {config.children.map(row => (
          <Grid container className={styles.root} spacing={1}>
            <GridContainer config={row} vizConfig={vizConfig} />
          </Grid>
        ))}
      </Grid>
    );
  }
  if (type === "Element") {
    return (
      <Grid item xs={config.config.width || 12}>
        <div style={{ backgroundColor: config.config.color }}>
          <Element config={vizConfigLookup(config.config.id)} />
        </div>
      </Grid>
    );
  }

  return <></>;
  // if (Array.isArray(config)) {
  //   return config.map(row => (
  //     <GridContainer config={row} vizConfig={vizConfig} />
  //   ));
  // }

  // return (
  //   <Grid item xs={config.width || 12}>
  //     <div style={{ backgroundColor: config.color }}>
  //       <Element config={vizConfigLookup(config.id)} />
  //     </div>
  //   </Grid>
  // );
};

GridContainer.propTypes = {
  config: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.string,
      color: PropTypes.string
    }).isRequired
  ]).isRequired,
  vizConfig: PropTypes.shape({ id: PropTypes.object }).isRequired
};

export default GridContainer;
