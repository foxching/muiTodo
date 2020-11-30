import React, { useContext } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { darkTheme } from "../theme/dark";
import { lightTheme } from "../theme/light";
import { TodoContext } from "../context/todoContext";

export default function Theme({ children }) {
  const { isDarkMode } = useContext(TodoContext);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}
