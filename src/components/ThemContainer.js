import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { TodoContext } from "../context/todoContext";

export default function ThemeContainer({ children }) {
  const { isDarkMode } = useContext(TodoContext);

  const useStyles = makeStyles((theme) => ({
    container: {
      minHeight: "100vh",
      minWidth: "100vw",
      background: isDarkMode ? grey[900] : grey[100],
      color: theme.palette.getContrastText(isDarkMode ? grey[900] : grey[100]),
      paddingTop: "1rem"
    }
  }));

  const classes = useStyles();
  return <Container className={classes.container}>{children}</Container>;
}
