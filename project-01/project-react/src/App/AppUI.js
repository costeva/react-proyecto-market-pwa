import React from "react";
import "./App.css";
import { todoContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItems } from "../components/TodoItems";

function AppUI() {
  return (
    /* React.Fragment permite agrupar dentro de un mismo componente a varios componente que lo integran. */
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <todoContext.Consumer>
        {({ searchedTodos, completeTodo, deletedTodo }) => (
          <TodoList>
            {searchedTodos.map((todos) => (
              <TodoItems
                key={todos.text}
                text={todos.text}
                completed={todos.completed}
                onComplete={() => completeTodo(todos.text)}
                onDelete={() => deletedTodo(todos.text)}
              />
            ))}
          </TodoList>
        )}
      </todoContext.Consumer>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
