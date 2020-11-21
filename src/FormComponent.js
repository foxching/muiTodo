import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const getCurrentDate = () => {
  const now = new Date();
  return now.toISOString().slice(0, 10);
};

const initialValues = {
  todoText: "",
  priority: "",
  dueDate: getCurrentDate()
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  todoText: Yup.string()
    .required("Please fill a value")
    .min(5, "Value must be at least five "),
  priority: Yup.string().required("Please select a value")
});

const FormComponent = ({ handleClose, setOpen }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  // const handleSubmit = (formik) => {
  //   formik.handleSubmit();
  //   setOpen(false);
  // };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            id="todo"
            label="Todo Text.."
            variant="outlined"
            fullWidth
            name="todoText"
            {...formik.getFieldProps("todoText")}
            error={
              formik.touched.todoText && formik.errors.todoText ? true : false
            }
            helperText={formik.errors.todoText}
          />
        </Grid>
        <Grid item>
          <FormControl
            variant="filled"
            fullWidth
            error={
              formik.touched.priority && formik.errors.priority ? true : false
            }
          >
            <InputLabel id="priority">Priority</InputLabel>
            <Select
              label="Priority"
              name="priority"
              id="priority"
              {...formik.getFieldProps("priority")}
            >
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Med">Med</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </Select>
            <FormHelperText>{formik.errors.priority}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            type="date"
            label="Due Date"
            name="dueDate"
            onChange={formik.handleChange}
            value={formik.values.dueDate}
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
          />
        </Grid>
        <Grid container item justify="flex-end">
          <Button color="primary" type="submit">
            Add
          </Button>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormComponent;
