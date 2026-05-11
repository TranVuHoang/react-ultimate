const TodoData = (props) => {
  const { name, age } = props;
  console.log(">>> Props: ", props);

  return (
    <div className="todo-data">
      <h2 className="name">Name: {name}</h2>
      <p className="desc">Learn React1</p>
      <p className="desc">Lorem ipsum dolor sit amet.</p>
      <p>{JSON.stringify(props.todoList)}</p>
    </div>
  );
};

export default TodoData;
