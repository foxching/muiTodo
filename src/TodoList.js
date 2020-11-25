import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TodoList = ({
  todos,
  deleteTodo,
  handleEdit,
  markComplete,
  handlePriorityClick
}) => {
  const getChipColor = (priority) => {
    let color = "";
    switch (priority) {
      case "High":
        color = "#d50000";
        break;
      case "Med":
        color = "#ffc107";
        break;
      case "Low":
        color = "#009688";
        break;
      default:
        color = "#ddddd";
    }
    return color;
  };

  return (
    <>
      <Grid
        container
        direction="column"
        style={{ marginTop: "1.2rem" }}
        spacing={3}
      >
        <TransitionGroup>
          {todos.map((todo) => (
            <CSSTransition key={todo.id} timeout={500} classNames="fade">
              <Grid item style={{ margin: "1.0rem" }}>
                <Paper style={{ padding: "0.8rem" }} elevation={3}>
                  <Grid container justify="space-between" alignItems="center">
                    <Grid>
                      <Typography
                        variant="h6"
                        style={{
                          textDecoration: todo.completed
                            ? "line-through"
                            : "none"
                        }}
                      >
                        {todo.todoText}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Chip
                        size="small"
                        style={{
                          color: "#ffffff",
                          backgroundColor: getChipColor(todo.priority)
                        }}
                        label={todo.priority}
                        onClick={() => handlePriorityClick(todo.priority)}
                      />
                    </Grid>
                  </Grid>
                  <Typography variant="body2">{todo.dueDate}</Typography>
                  <ButtonGroup
                    color="primary"
                    style={{ paddingTop: "12px" }}
                    variant="text"
                    size="small"
                  >
                    <Button onClick={() => deleteTodo(todo.id)}>
                      <DeleteIcon size="small" style={{ color: "#424242" }} />
                    </Button>
                    <Button onClick={() => handleEdit(todo)}>
                      <EditIcon size="small" style={{ color: "#424242" }} />
                    </Button>
                    <Button onClick={() => markComplete(todo.id)}>
                      <DoneIcon size="small" style={{ color: "#424242" }} />
                    </Button>
                  </ButtonGroup>
                </Paper>
              </Grid>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Grid>
    </>
  );
};

export default TodoList;
