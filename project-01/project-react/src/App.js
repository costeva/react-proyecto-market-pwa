import React from "react";
import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItems } from "./components/TodoItems";

const todos = [
  { text: "Pepe", completed: true },
  { text: "Juan", completed: false },
  { text: "Pedro", completed: false },
];

function App() {
  return (
    /* React.Fragment permite agrupar dentro de un mismo componente a varios componente que lo integran. */
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map((todos) => (
          <TodoItems
            key={todos.text}
            text={todos.text}
            completed={todos.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
