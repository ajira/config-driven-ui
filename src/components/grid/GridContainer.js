import React from "react";
import Grid from "@material-ui/core/Grid";
import ElementContainer from "./ElementContainer";
import styles from "../../styles/App.scss";
import { propsCheck } from "../../util/CommonUtil";

const Horizontal = ({ config, vizConfig }) =>
  config.children.map(row => (
    <GridContainer config={row} vizConfig={vizConfig} />
  ));

const Vertical = ({ config, vizConfig }) => (
  <Grid item xs={config.config.width || 12}>
    {config.children.map(row => (
      <Grid container className={styles.root} spacing={1}>
        <GridContainer config={row} vizConfig={vizConfig} />
      </Grid>
    ))}
  </Grid>
);

const GridLogic = {
  Horizontal: config => <Horizontal {...config} />,
  Vertical: config => <Vertical {...config} />,
  Element: config => <ElementContainer {...config} />
};

const GridContainer = ({ config, vizConfig }) => {
  const { type } = config;
  if (type) return GridLogic[type]({ config, vizConfig });
  return <></>;
};

GridContainer.propTypes = propsCheck;
Vertical.propTypes = propsCheck;
Horizontal.propTypes = propsCheck;

export default GridContainer;
