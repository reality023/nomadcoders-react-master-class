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
      return oldTodos;
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



