import { useState } from "react";
import TodoLogo from "./assets/react.svg";
import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Learn React",
    },
    {
      id: 2,
      name: "Watching Youtube",
    },
  ]);

  const username = "Hwang Tran";
  const age = 29;
  const data = {
    address: "Hà Nội",
    country: "Việt Nam",
  };

  const addNewTodo = (name) => {
    alert(`Call me ${name}`);
  };
  // addNewTodo();

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo list</h1>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData
        name={username}
        age={age}
        data={data}
        address={data.address}
        country={data.country}
        todoList={todoList}
      />
      <div className="todo-image">
        <img src={TodoLogo} alt="React Logo" className="logo" />
      </div>
    </div>
  );
};

export default App;
