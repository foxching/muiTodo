import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Zoom from "@material-ui/core/Zoom";

//component
import Header from "./Header";
import TodoList from "./TodoList";
import FormDialog from "./FormDialog";
import FormComponent from "./FormComponent";
import "./styles.css";

export default function App() {
  const [checked, setChecked] = useState(false);
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [open, setOpen] = useState(false);
  const [editedTodo, setEditedTodo] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [priorityFilter, setPriorityFilter] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditedTodo(null);
  };

  const addTodo = (todo) => {
    setChecked(true);
    setTodos([...todos, todo]);
  };

  const deleteTodo = (todoId) => {
    setChecked(false);
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };

  const handleEdit = (todo) => {
    setOpen(true);
    setEditedTodo(todo);
  };

  const markComplete = (id) => {
    const newTodos = [...todos];
    const t = newTodos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(t);
  };

  const editTodo = (todo) => {
    const newTodos = [...todos];
    const t = newTodos.find((t) => t.id === editedTodo.id);
    t.todoText = todo.todoText;
    t.priority = todo.priority;
    t.dueDate = todo.dueDate;
    setTodos(newTodos);
    setEditedTodo(null);
    setIsEdit(false);
  };

  const handlePriorityClick = (priority) => {
    setPriorityFilter(priority);
  };

  const handleDeletePriorityFilter = () => {
    setPriorityFilter("");
  };

  useEffect(() => {
    setFilteredTodos(todos.filter((todo) => todo.priority === priorityFilter));
  }, [todos, priorityFilter]);
  return (
    <>
      <CssBaseline />
      <Container>
        <Header handleClickOpen={handleClickOpen} />
        {priorityFilter === "" ? null : (
          <Zoom in={priorityFilter !== null ? true : false} timeout={800}>
            <Chip
              label={priorityFilter}
              onDelete={handleDeletePriorityFilter}
              color="secondary"
              size="small"
              style={{ marginTop: "1.2rem" }}
            />
          </Zoom>
        )}
        <TodoList
          todos={priorityFilter === "" ? todos : filteredTodos}
          deleteTodo={deleteTodo}
          handleEdit={handleEdit}
          markComplete={markComplete}
          handlePriorityClick={handlePriorityClick}
          checked={checked}
        />
      </Container>
      <FormDialog
        open={open}
        editedTodo={editedTodo}
        isEdit={isEdit}
        handleClose={handleClose}
      >
        <FormComponent
          editedTodo={editedTodo}
          addTodo={addTodo}
          editTodo={editTodo}
          handleClose={handleClose}
          setOpen={setOpen}
        />
      </FormDialog>
    </>
  );
}
