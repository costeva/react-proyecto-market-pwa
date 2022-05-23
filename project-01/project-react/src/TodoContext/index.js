import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const todoContext = React.createContext();

function TodoProvider(props) {
  const [todos, saveTodos] = useLocalStorage("todoss", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal,setOpenModal]=React.useState(false);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deletedTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  React.useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <todoContext.Provider
      value={{
        totalTodos,
        addTodo,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deletedTodo,
        openModal,
        setOpenModal
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
}

<todoContext.Consumer></todoContext.Consumer>;

export { TodoProvider, todoContext };
