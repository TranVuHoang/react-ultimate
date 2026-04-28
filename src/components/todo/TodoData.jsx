const TodoData = (props) => {
  // props là một object chứa tất cả các props được truyền vào component
  console.log(">>> Props: ", props);
  return (
    <div className="todo-data">
      <h2 className="name">Name: {props.name}</h2>
      <p className="desc">Learn React</p>
      <p className="desc">Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default TodoData;
