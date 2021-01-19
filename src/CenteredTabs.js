import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function CenteredTabs({ value, handleChange, tabNames }) {
  const classes = useStyles();
  const arr = tabNames;
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {arr != null
          ? arr.map((entry, index) => {
              const tempKey = "Tab" + index;
              return <Tab label={entry} key={tempKey}></Tab>;
            })
          : null}
      </Tabs>
    </Paper>
  );
}
