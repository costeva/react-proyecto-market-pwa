import React from "react";
import "./App.css";
import { todoContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItems } from "../components/TodoItems";
import { Modal } from "../components/Modal";
import { TodoForm } from '../components/TodoForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppUI() {
  const { searchedTodos, completeTodo, deletedTodo,openModal,setOpenModal} =
    React.useContext(todoContext);

  return (
    /* React.Fragment permite agrupar dentro de un mismo componente a varios componente que lo integran. */
    <React.Fragment>
      <div className="card">
      <TodoCounter />
      <TodoSearch />

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
      </div>
    {!!openModal&&(
    
      <Modal>
     
        <TodoForm/>
        </Modal>
  )}
      <CreateTodoButton
      setOpenModal={ setOpenModal} />
    </React.Fragment>
  );
}


export { AppUI };
