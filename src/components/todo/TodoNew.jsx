const TodoNew = (props) => {
  console.log(">>> Props todoNew: ", props);
  const { addNewTodo } = props;
  addNewTodo("Hoàng IT 97");

  return (
    <div className="todo-row">
      <input
        type="text"
        className="todo-input form-control"
        placeholder="Enter your task"
      />
      <button className="btn btn-primary btn-add" onClick={addNewTodo}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
