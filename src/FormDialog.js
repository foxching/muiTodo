import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const FormDialog = ({ open, handleClose, children }) => {
  return (
    <Dialog open={open} onClose={handleClose} style={{ minWidth: "60vw" }}>
      <DialogTitle>Add Todo</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default FormDialog;
