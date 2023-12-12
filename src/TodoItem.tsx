export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

type Props = {
  todo: Todo;
};

function TodoItem({ todo }: Props) {
  return (
    <li>
      <h3>{todo.title}</h3>
    </li>
  );
}

export default TodoItem;
