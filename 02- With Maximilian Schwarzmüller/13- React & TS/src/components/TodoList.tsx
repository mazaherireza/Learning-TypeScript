import { Todo } from "../types/Todo";

interface Props {
  todoList: Todo[];
  todoDeleteHandler: (title: string) => void
}

const TodoList: React.FC<Props> = ({ todoList, todoDeleteHandler }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo._id}>
          <span>{todo.title}</span>
          <button onClick={() => todoDeleteHandler(todo.title)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
