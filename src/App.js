import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import TodoList from "./TodoList";
import FormDialog from "./FormDialog";
import FormComponent from "./FormComponent";

export default function App() {
  const [todos, setTodos] = useState([
    { id: "1", todo: "watch movie", priority: "high", due: "12th November" },
    { id: "2", todo: "buy food", priority: "low", due: "13th November" },
    { id: "3", todo: "go work", priority: "med", due: "16th November" }
  ]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <Container>
        <Header handleClickOpen={handleClickOpen} />
        <TodoList todos={todos} />
      </Container>
      <FormDialog open={open} handleClose={handleClose}>
        <FormComponent handleClose={handleClose} setOpen={setOpen} />
      </FormDialog>
    </>
  );
}
