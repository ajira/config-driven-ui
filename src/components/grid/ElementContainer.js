import React from "react";
import Grid from "@material-ui/core/Grid";
import Element from "../element/Element";
import { propsCheck } from "../../util/CommonUtil";

const ElementContainer = ({ config, vizConfig }) => {
  const vizConfigLookup = id => vizConfig[id];
  return (
    <Grid item xs={config.config.width || 12}>
      <div style={{ backgroundColor: config.config.color }}>
        <Element {...vizConfigLookup(config.config.id)} />
      </div>
    </Grid>
  );
};

ElementContainer.propTypes = propsCheck;

export default ElementContainer;
