import React, { useContext } from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { TodoContext } from "../context/todoContext";

export default function FormControlLabelPosition() {
  const { setIsDarkMode } = useContext(TodoContext);
  return (
    <FormControl component="fieldset" style={{ marginTop: "1.3rem" }}>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label="Dark Mode"
          labelPlacement="start"
          onChange={() => setIsDarkMode((mode) => !mode)}
        />
      </FormGroup>
    </FormControl>
  );
}
