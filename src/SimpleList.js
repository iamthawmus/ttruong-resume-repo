import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SimpleList({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        {data.map((entry, index) => {
          return (
            <ListItem button key={index}>
              <ListItemText primary={entry} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
