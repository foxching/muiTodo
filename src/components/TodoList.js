import React, { useContext } from "react";
import { TransitionGroup } from "react-transition-group";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
//mui
import Slide from "@material-ui/core/Slide";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";

//components
import Todo from "./Todo";
//context
import { TodoContext } from "../context/todoContext";

const TodoList = () => {
  const { todos, filteredTodos, priorityFilter, onDragEnd } = useContext(
    TodoContext
  );
  const todoList = priorityFilter === "" ? todos : filteredTodos;

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
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
                {todoList.length > 0 && (
                  <Slide direction="right">
                    <TransitionGroup>
                      {todoList.map((todo, index) => (
                        <Collapse key={todo.id} style={{ marginTop: "1.2rem" }}>
                          <Todo todo={todo} index={index} />
                        </Collapse>
                      ))}
                    </TransitionGroup>
                  </Slide>
                )}
              </TransitionGroup>
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default TodoList;
