const TodoNew = (props) => {
  console.log(">>> Props todoNew: ", props);
  const { addNewTodo } = props;
  // addNewTodo("Hoàng IT 97");

  const handleClick = () => {
    alert("Hello world");
  };

  const handleOnChange = (name) => {
    console.log(">>> Handle on change", name);
  };

  return (
    <div className="todo-row">
      <input
        type="text"
        className="todo-input form-control"
        placeholder="Enter your task"
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button className="btn btn-primary btn-add" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
