const TodoNew = () => {
  return (
    <div className="todo-row">
      <input
        type="text"
        className="todo-input form-control"
        placeholder="Enter your task"
      />
      <button className="btn btn-primary btn-add">Add</button>
    </div>
  );
};

export default TodoNew;
