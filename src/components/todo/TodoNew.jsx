import { useState } from "react";

const TodoNew = (props) => {
  /** Hard code */
  // Giá trị của input, có thể là một state nếu muốn thay đổi theo người dùng
  // const valueInput = "Hoàng IT 97"; // đang hardcode -> cần cập nhận biến bằng useState

  /** Sử dụng useState hook */
  //useState hook để quản lý các giá trị text động của ô <input type="text" />
  const [valueInput, setValueInput] = useState("");

  const { addNewTodo } = props;
  // addNewTodo("Hoàng IT 97");

  // Event cho button Add(nút Add)
  const handleOnClick = () => {
    console.log(">>> Check value input: ", valueInput);
  };

  // Event cho ô input
  const handleOnChange = (name) => {
    // console.log(">>> Handle on change", name);

    // cập nhật giá trị ô input mỗi lần typing vào ô input
    setValueInput(name);
  };

  return (
    <div className="todo-row">
      <input
        type="text"
        className="todo-input form-control"
        placeholder="Enter your task"
        onChange={(text) => handleOnChange(text.target.value)}
      />
      <button className="btn btn-primary btn-add" onClick={handleOnClick}>
        Add
      </button>
      <div className="">My text is: {valueInput}</div>
    </div>
  );
};

export default TodoNew;
