import React, { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState(""); 
  const [todoError, setTodoError] = useState("");
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: {value}
    } = event;
    setTodoError("");
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length < 10) {
      return setTodoError("To do should be longer");
    }
    console.log("submit");
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Write a to do" value={todo} onChange={onChange} />
        <button>Add</button>
        {todoError !== "" ? todoError : null}
      </form>
    </div>
  );
}

export default TodoList;