import React, { useState, createContext, useEffect } from "react";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [open, setOpen] = useState(false);
  const [editedTodo, setEditedTodo] = useState(null);
  const [priorityFilter, setPriorityFilter] = useState("");

  const handleCloseDialog = () => {
    setOpen(false);
    setEditedTodo(null);
  };

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (todoId) => {
    setTodos([...todos.filter((t) => t.id !== todoId)]);
  };

  const handleMarkCompletedTodo = (id) => {
    const newTodos = [...todos];
    const t = newTodos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(t);
  };

  const handleEditClick = (todo) => {
    setOpen(true);
    setEditedTodo(todo);
  };

  const handleEditTodo = (todo) => {
    const newTodos = [...todos];
    const t = newTodos.find((t) => t.id === editedTodo.id);
    t.todoText = todo.todoText;
    t.priority = todo.priority;
    t.dueDate = todo.dueDate;
    setTodos(newTodos);
    setEditedTodo(null);
  };

  const handleSetPriorityClick = (priority) => {
    setPriorityFilter(priority);
  };

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    //console.log(result);
    if (!destination) return;
    if (destination.index === source.index) return;
    const t = todos.filter((todo) => todo.id === draggableId)[0];
    const newTodos = [...todos];
    newTodos.splice(source.index, 1);
    newTodos.splice(destination.index, 0, t);
    setTodos(newTodos);
  };

  useEffect(() => {
    setFilteredTodos(todos.filter((todo) => todo.priority === priorityFilter));
  }, [todos, priorityFilter]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        filteredTodos,
        open,
        setOpen,
        editedTodo,
        priorityFilter,
        setPriorityFilter,
        handleCloseDialog,
        handleAddTodo,
        handleEditTodo,
        handleDeleteTodo,
        handleMarkCompletedTodo,
        handleEditClick,
        handleSetPriorityClick,
        onDragEnd
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
