import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
//mui
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

//context
import { TodoContext } from "../context/todoContext";

const FormComponent = () => {
  const {
    handleAddTodo,
    handleCloseDialog,
    editedTodo,
    handleEditTodo
  } = useContext(TodoContext);

  //date format
  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().slice(0, 10);
  };

  //form default values
  const initialValues = {
    todoText: "",
    priority: "",
    completed: false,
    dueDate: getCurrentDate()
  };

  //validation with YUP
  const validationSchema = Yup.object({
    todoText: Yup.string()
      .required("Please fill a value")
      .min(5, "Value must be at least five "),
    priority: Yup.string().required("Please select a value")
  });

  const onSubmit = (values) => {
    const newTodo = {
      ...values,
      id: uuidv4()
    };
    if (editedTodo !== null) {
      handleEditTodo(values);
    } else {
      handleAddTodo(newTodo);
    }
    handleCloseDialog();
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={editedTodo !== null ? editedTodo : initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, handleChange, handleBlur, isValid }) => {
        return (
          <Form>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Field
                  id="todo"
                  label="Todo Text.."
                  variant="outlined"
                  fullWidth
                  name="todoText"
                  as={TextField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.todoText && Boolean(errors.todoText)}
                  helperText={
                    touched.todoText && errors.todoText ? errors.todoText : ""
                  }
                />
              </Grid>
              <Grid item>
                <FormControl
                  variant="filled"
                  fullWidth
                  error={touched.priority && Boolean(errors.priority)}
                >
                  <InputLabel id="priority">Priority</InputLabel>
                  <Field
                    id="priority"
                    label="Priority"
                    name="priority"
                    as={Select}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {" "}
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Med">Med</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                  </Field>
                  <FormHelperText>
                    {touched.priority && errors.priority ? errors.priority : ""}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item>
                <Field
                  variant="outlined"
                  type="date"
                  label="Due Date"
                  name="dueDate"
                  as={TextField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                />
              </Grid>
              <Grid container item justify="flex-end">
                <Button color="primary" type="submit" disabled={!isValid}>
                  {editedTodo !== null ? "Update" : "Add"}
                </Button>
                <Button color="primary" onClick={handleCloseDialog}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormComponent;
