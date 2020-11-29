import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import { Draggable } from "react-beautiful-dnd";

const Todo = ({
  todo,
  index,
  deleteTodo,
  handlePriorityClick,
  handleEdit,
  markComplete,
  getChipColor
}) => {
  return (
    <Draggable key={todo.id} draggableId={todo.id} index={index}>
      {(provided) => (
        <Grid
          item
          style={{ margin: "1.5rem" }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Paper style={{ padding: "0.8rem" }} elevation={3}>
            <Grid container justify="space-between" alignItems="center">
              <Grid>
                <Typography
                  variant="h6"
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none"
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
      )}
    </Draggable>
  );
};

export default Todo;
