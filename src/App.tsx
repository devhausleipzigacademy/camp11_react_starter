import React from "react";
import TodoItem, { Todo } from "./TodoItem";
import Button from "./Button";
//import "./App.css";

type Props = {
  name: string;
  age: number;
};

function App({ age, name }: Props) {
  const todos: Todo[] = [
    { id: 1, title: "Learn React", done: false },
    { id: 2, title: "Learn TypeScript", done: true },
    { id: 3, title: "Learn Node.js", done: false },
    { id: 4, title: "Learn Javascript", done: true },
  ];

  //return React.createElement("h3", { children: `Hello ${name}` });
  return (
    <>
      <h3 className="heading">
        Hello {name} Im {age + 20} old
      </h3>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <Button>Submit Form</Button>
      <Button>Reset Button</Button>
      <Button variant="danger">Danger Button</Button>
      <Button variant="warning">Everything Explodes Button</Button>
    </>
  );
}

export default App;
