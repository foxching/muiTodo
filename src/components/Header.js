import React, { useContext } from "react";
//mui
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
//context
import { TodoContext } from "../context/todoContext";

const Header = () => {
  const { setOpen } = useContext(TodoContext);

  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      style={{ marginTop: "2rem" }}
    >
      <Grid item>
        <Typography variant="h4">TODO</Typography>
      </Grid>
      <Grid item>
        <Fab
          style={{ backgroundColor: "#009688", color: "#ffffff" }}
          aria-label="add"
          size="medium"
          onClick={() => setOpen(true)}
        >
          <AddIcon />
        </Fab>
      </Grid>
    </Grid>
  );
};

export default Header;
