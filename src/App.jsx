import TodoLogo from "./assets/react.svg";
import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

const App = () => {
  const username = "Hoàng IT 97 ";
  const age = 29;
  const data = {
    address: "Hà Nội",
    country: "Việt Nam",
  };
  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo list</h1>
      <TodoNew />
      <TodoData
        name={username}
        age={age}
        data={data}
        address={data.address}
        country={data.country}
      />
      <div className="todo-image">
        <img src={TodoLogo} alt="React Logo" className="logo" />
      </div>
    </div>
  );
};

export default App;
