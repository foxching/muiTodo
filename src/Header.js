import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const Header = ({ handleClickOpen }) => {
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
          color="primary"
          aria-label="add"
          size="small"
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
      </Grid>
    </Grid>
  );
};

export default Header;