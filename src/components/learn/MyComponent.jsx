// JSX
// Fragment <> </>
import "./style.css";

const MyComponent = () => {
  return (
    // Dùng Fragment <> </> để bọc tất cả phần tử HTML vào
    <>
      <div className="">Trang xinh yêu love you</div>
      <div className="chill" style={{ borderRadius: "10px" }}>
        Chill
      </div>
    </>
  );
};
export default MyComponent;
