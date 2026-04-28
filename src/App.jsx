import TodoLogo from "./assets/react.svg";
import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

const App = () => {
  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo list</h1>
      <TodoNew />
      <TodoData />
      <div className="todo-image">
        <img src={TodoLogo} alt="React Logo" className="logo" />
      </div>
    </div>
  );
};

export default App;
