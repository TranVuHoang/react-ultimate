// JSX
// Fragment <> </>
import "./style.css";

const MyComponent = () => {
  /** Kiểu dữ liệu nguyên thuỷ */
  // const username = "Trang Trang"; // biến username kiểu string
  const age = 23; // biến age kiểu number
  const love = true; // biến love kiểu boolean

  /** Kiểu dữ liệu object */
  const array = [1, 2, 3];
  const user = {
    name: "Trang",
    age: 25,
  };
  return (
    <>
      <div className="">
        {user.name} xinh yêu love you {age} {love}
        <hr />
        {JSON.stringify(user)}
        <hr />
        {JSON.stringify(array)}
        <hr />
        {console.log("Hoàng Trần")}
      </div>
      <div className="chill" style={{ borderRadius: "10px" }}>
        Chill
      </div>
    </>
  );
};
export default MyComponent;
