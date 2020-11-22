import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";

const TodoList = ({ todos }) => {
  return (
    <>
      <Grid
        container
        direction="column"
        style={{ marginTop: "1.2rem" }}
        spacing={2}
      >
        {todos.map((todo) => (
          <Grid item key={todo.id}>
            <Paper style={{ padding: "0.8rem" }} elevation={3}>
              <Grid container justify="space-between" alignItems="center">
                <Grid>
                  <Typography variant="h6">{todo.todo}</Typography>
                </Grid>
                <Grid>
                  <Chip color="primary" size="small" label={todo.priority} />
                </Grid>
              </Grid>
              <Typography variant="body2">{todo.due}</Typography>
              {/* <ButtonGroup
                color="primary"
                style={{ paddingTop: "12px" }}
                variant="text"
                size="small"
              >
                <IconButton>
                  <DeleteIcon size="small" />
                </IconButton>
                <IconButton>
                  <EditIcon size="small" />
                </IconButton>
                <IconButton>
                  <DoneIcon size="small" />
                </IconButton>
              </ButtonGroup> */}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TodoList;
