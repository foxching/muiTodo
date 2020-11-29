import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Slide } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import { Droppable } from "react-beautiful-dnd";

import Grid from "@material-ui/core/Grid";

//components
import Todo from "./Todo";
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
      <Droppable droppableId="todo-list">
        {(provided) => (
          <Grid
            container
            direction="column"
            style={{ marginTop: "1.2rem" }}
            spacing={3}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <TransitionGroup>
              {todos.length > 0 && (
                <Slide direction="right">
                  <TransitionGroup>
                    {todos.map((todo, index) => (
                      <Collapse key={todo.id} style={{ marginTop: "1.2rem" }}>
                        <Todo
                          todo={todo}
                          index={index}
                          deleteTodo={deleteTodo}
                          handlePriorityClick={handlePriorityClick}
                          handleEdit={handleEdit}
                          markComplete={markComplete}
                          getChipColor={getChipColor}
                        />
                      </Collapse>
                    ))}
                  </TransitionGroup>
                </Slide>
              )}
            </TransitionGroup>
          </Grid>
        )}
      </Droppable>
    </>
  );
};

export default TodoList;
