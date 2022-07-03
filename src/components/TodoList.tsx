import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { todoSelector, todoState } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";


function TodoList () {
  const [todo, doing, done] = useRecoilValue(todoSelector);
  return (
    <div style={{color: "white"}}>
      <h1>To Dos</h1>
      <hr />
      <CreateTodo />
      <h2>To Do</h2>
      <ul>
        {todo.map(todo => <Todo key={todo.id} {...todo} />)}
      </ul>
      <h2>Doing</h2>
      <ul>
        {doing.map(todo => <Todo key={todo.id} {...todo} />)}
      </ul>
      <h2>Done</h2>
      <ul>
        {done.map(todo => <Todo key={todo.id} {...todo} />)}
      </ul>
    </div>
  );
}

export default TodoList;