import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../modules/index";
import {
  addTodoAction,
  deleteTodoAction,
  toggleTodoAction,
} from "../modules/todo";
import Todo from "../components/Todo";

export default function TodoContainer() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  // 어떠한 state를 받는지 type을 지정 - >state.todoReducer..로받을때 자동완성됨
  const todo = useSelector((state: RootType) => state.todoReducer);

  const addTodo = (newTodo: string) => {
    dispatch(addTodoAction(newTodo));
  };
  const deleteTodo = (id: number) => {
    dispatch(deleteTodoAction(id));
  };
  const toggleTodo = (id: number) => {
    dispatch(toggleTodoAction(id));
  };

  // html element(요소)의 event 객체 타입지정
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const initTodo = () => {
    setNewTodo("");
  };
  return (
    <Todo
      todo={todo}
      newTodo={newTodo}
      changeInput={changeInput}
      initTodo={initTodo}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
    ></Todo>
  );
}
