import { createContext, useContext } from "react";

const todoContext = createContext({
  todos: [
    {
      id: 1,
      todo: " Todo test",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

const useTodo = () => {
  return useContext(todoContext);
};

export { todoContext, useTodo };

export const TodoProvider = todoContext.Provider;
