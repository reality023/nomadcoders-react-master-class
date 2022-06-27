import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { todoState } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";


function TodoList () {
  const todos = useRecoilValue(todoState);
  console.log(todos);
  return (
    <div style={{color: "white"}}>
      <h1>To Do</h1>
      <hr />
      <CreateTodo />
      <ul>
        {todos.map(todo => <Todo key={todo.id} {...todo} />)}
      </ul>
    </div>
  );
}

export default TodoList;