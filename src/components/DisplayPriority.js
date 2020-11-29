import React, { useContext } from "react";
import Chip from "@material-ui/core/Chip";
import Zoom from "@material-ui/core/Zoom";
import { TodoContext } from "../context/todoContext";

const DisplayPriority = () => {
  const { priorityFilter, setPriorityFilter } = useContext(TodoContext);
  return (
    <>
      {priorityFilter === "" ? null : (
        <Zoom in={priorityFilter !== null ? true : false} timeout={800}>
          <Chip
            label={priorityFilter}
            onDelete={() => setPriorityFilter("")}
            color="secondary"
            size="small"
            style={{ marginTop: "1.2rem" }}
          />
        </Zoom>
      )}
    </>
  );
};

export default DisplayPriority;
