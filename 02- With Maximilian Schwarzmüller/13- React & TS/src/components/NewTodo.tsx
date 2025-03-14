import { useRef } from "react";

interface Props {
  onSetTodo: (text: string) => void;
}

const NewTodo: React.FC<Props> = ({ onSetTodo }) => {
  // ... since we point at the input element ...
  const titleRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // .value, because we work with HTML input element
    const enterdTitle = titleRef.current!.value;
    onSetTodo(enterdTitle);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo-title"></label>
      <input type="text" name="todo-title" id="todo-title" ref={titleRef} />

      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
