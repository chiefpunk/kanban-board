import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  List,
  Box,
} from "@material-ui/core";
import Item from "./Item";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title:{
      paddingBottom:10,
      borderBottom:'1px gray solid'
  }
}));

export default function Card({ title, progress, tasks, setTasks }) {
  let subTasks = (tasks || []).filter(
    (task) => parseInt(task.progress) === progress && task.status === 1
  );

  const classes = useStyles();
  const forwardTask = (id) => {
    tasks[id].progress += 1;
    setTasks([...tasks]);
  };
  const removeTask = (id) => {
    tasks[id].status = 0;
    setTasks([...tasks]);
  };
  const backTask = (id) => {
    tasks[id].progress -= 1;
    setTasks([...tasks]);
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" gutterBottom className={classes.title}>
        {title}
      </Typography>
      <Box>
        <List className={classes.root}>
          {subTasks.map((task, index) => {
            return (
              <Item
                name={task.name}
                progress={task.progress}
                id={task.id}
                key={index}
                forwardTask={forwardTask}
                removeTask={removeTask}
                backTask={backTask}
              />
            );
          })}
        </List>
      </Box>
    </Paper>
  );
}
