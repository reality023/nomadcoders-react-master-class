import React from "react";
import { useSetRecoilState } from "recoil";
import { ITodo, todoState } from "../atoms";

function Todo ({text, category, id}: ITodo) {
  // const onClick = (newCategory: ITodo["category"]) => {
  //   console.log("i wanna to", newCategory);
  // };
  const setTodos = useSetRecoilState(todoState);
  const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget: { name } } = event; // 구조분해 할당
    setTodos(oldTodos => {
      const targetIndex = oldTodos.findIndex(todo => todo.id === id);
      const oldTodo = oldTodos[targetIndex];
      const newTodo = {text, id, category: name as any};

      return [...oldTodos.slice(0, targetIndex), newTodo, ...oldTodos.slice(targetIndex + 1)];
    });
  }
  return (
    <li>
      <span>{text}</span>
      {/* {category !== "DOING" && <button onClick={() => {onClick("DOING")}}>Doing</button>}
      {category !== "TODO" && <button onClick={() => {onClick("TODO")}}>Todo</button>}
      {category !== "DONE" && <button onClick={() => {onClick("DONE")}}>Done</button>} */}
      {category !== "DOING" && <button name="DOING" onClick={onClick}>Doing</button>}
      {category !== "TODO" && <button name="TODO" onClick={onClick}>Todo</button>}
      {category !== "DONE" && <button name="DONE" onClick={onClick}>Done</button>}
    </li>
  );
}

export default Todo;



