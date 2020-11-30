import React from "react";
//mui
import CssBaseline from "@material-ui/core/CssBaseline";

//components
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import FormDialog from "./components/FormDialog";
import FormComponent from "./components/FormComponent";
import DisplayPriority from "./components/DisplayPriority";
import ThemeToggle from "./components/ThemeToggle";
import Theme from "./components/Theme";
import ThemeContainer from "./components/ThemContainer";
//context
import TodoContextProvider from "./context/todoContext";

import "./styles.css";

export default function App() {
  return (
    <>
      <CssBaseline />
      <TodoContextProvider>
        <Theme>
          <ThemeContainer>
            <ThemeToggle />
            <Header />
            <DisplayPriority />
            <TodoList />
          </ThemeContainer>
          <FormDialog>
            <FormComponent />
          </FormDialog>
        </Theme>
      </TodoContextProvider>
    </>
  );
}
