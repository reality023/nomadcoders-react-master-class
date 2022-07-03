import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, todoState } from "../atoms";

interface IForm {
  todo: string;
}

function CreateTodo() {
  const setTodos = useSetRecoilState(todoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({todo}: IForm) => {
    setTodos(current => [{id: Date.now(), text: todo, category }, ...current]);
    setValue("todo", "");
  }
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input type="text" {...register("todo", {
        required: "Please write a To Do"
      })} placeholder="Write a to do" />
      <button>Add</button>
    </form>
  );
}

export default CreateTodo;