import React, { useState } from "react";
import { useForm } from "react-hook-form";

/*
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
*/

function TodoList () {
  // const { register, watch, handleSubmit } = useForm();
  const { register, handleSubmit, formState } = useForm();
  const onValid = ( data:any ) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("email", { required: true, minLength: 10 })} type="text" placeholder="Email" />
        <input {...register("firstName", { required: true, minLength: 5 })} type="text" placeholder="First Name" />
        <input {...register("lastName", { required: true, minLength: 5 })} type="text" placeholder="Last Name" />
        <input {...register("password", { required: true })} type="text" placeholder="Password" />
        <input 
          {
            ...register("password1", { 
                required: "Password is Required", 
                minLength: {
                  value: 5,
                  message: "Your password is too short."
                } 
              }
            )
          } 
          type="text" placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;