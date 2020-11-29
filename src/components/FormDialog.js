import React, { useContext } from "react";
//mui
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
//context
import { TodoContext } from "../context/todoContext";

const FormDialog = ({ children }) => {
  const { open, handleCloseDialog, editedTodo } = useContext(TodoContext);
  return (
    <Dialog
      open={open}
      onClose={handleCloseDialog}
      style={{ minWidth: "60vw" }}
    >
      <DialogTitle>
        {editedTodo !== null ? "Update Todo" : "Add Todo"}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default FormDialog;
