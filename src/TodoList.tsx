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

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

function TodoList () {
  // const { register, watch, handleSubmit } = useForm();
  const { register, handleSubmit, formState:{errors}, setError } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com"
    }
  });
  const onValid = ( data:any ) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      )
    }
    // setError("extraError", { message: "Server offline." })
  };
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)} style={{ display: "flex", flexDirection: "column", color: "white" }}>
        <input 
          {...register(
            "email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                  message: "Only naver.com emails allowed",

                }
            }
          )} type="text" placeholder="Email" 
        />
        <span>{errors.email?.message}</span>
        <input {...register("firstName", { required: "write here", minLength: 5, validate: {
          noNico: value => value.includes("nico") ? "no nicos allowed" : true,
          noNIck: value => value.includes("nick") ? "no nick allowed" : true,
        }})} type="text" placeholder="First Name" />
        <span>{errors.firstName?.message}</span>
        <input {...register("lastName", { required: "write here", minLength: 5 })} type="text" placeholder="Last Name" />
        <span>{errors.lastName?.message}</span>
        <input {...register("password", { required: "write here" })} type="text" placeholder="Password" />
        <span>{errors.password?.message}</span>
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
        <span>{errors.password1?.message}</span>
        <button>Add</button>
        <span>{errors.extraError?.message}</span>
      </form>
    </div>
  );
}

export default TodoList;