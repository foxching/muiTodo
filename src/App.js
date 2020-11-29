import React from "react";
//mui
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
//components
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import FormDialog from "./components/FormDialog";
import FormComponent from "./components/FormComponent";
import DisplayPriority from "./components/DisplayPriority";
//context
import TodoContextProvider from "./context/todoContext";

import "./styles.css";

export default function App() {
  return (
    <>
      <CssBaseline />
      <TodoContextProvider>
        <Container>
          <Header />
          <DisplayPriority />
          <TodoList />
        </Container>
        <FormDialog>
          <FormComponent />
        </FormDialog>
      </TodoContextProvider>
    </>
  );
}
