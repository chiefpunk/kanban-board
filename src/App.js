import React, { useState, useCallback } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  TextField,
  Button,
} from "@material-ui/core";
import Card from "./components/Card";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 100,
      marginBottom: 100,
    },
    header: {
      display: "flex",
      justifyContent: "center",
    },
  })
);

export default function App() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const addTask = useCallback((name) => {
    setTasks(task=>[...task, {name:name, progress:1, id:task.length, status:1}])
  },[setTasks]);

  const onChange = useCallback((e) => {
    setInputTask(e.target.value);
  },[setInputTask]);

  return (
    <Container className={classes.root}>
      <Grid
        container
        item
        xs={12}
        spacing={1}
        alignItems="center"
        className={classes.header}
        
      >
        <Grid item xs={2}>
          <TextField value={inputTask} name="taskName" id="taskName" onChange={onChange} />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onClick={()=>addTask(inputTask)}>
            Create New Task
          </Button>
        </Grid>
      </Grid>
      <br /><br />
      <Grid container spacing={3} mt={3}>
        <Grid item xs={6} sm={3}>
          <Card title="Backlog" progress={1} tasks={tasks} setTasks={setTasks} />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card title="To Do" progress={2} tasks={tasks} setTasks={setTasks} />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card title="Outgoing" progress={3} tasks={tasks} setTasks={setTasks} />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card title="Done" progress={4} tasks={tasks} setTasks={setTasks} />
        </Grid>
      </Grid>
    </Container>
  );
}
