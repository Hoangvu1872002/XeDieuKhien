import { useEffect, useState } from "react";
import "./App.css";
import Active from "./components/Active";
import { io } from "socket.io-client";

function App() {
  const [status, setStatus] = useState();
  const [data, setData] = useState();
  const [active, setActive] = useState();

  // const socket = io("http://127.0.0.1:5003/car-active");
  const socket = io("https://bugnef-be-xedieukhien.onrender.com/car-active");
  useEffect(() => {
    // Xử lý các sự kiện từ máy chủ
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    socket.on("updated-parameters", (data) => {
      console.log(data);
      setData(data);
    });
    socket.on("updated-active", (data) => {
      setActive(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.emit("update-active", status);
    // socket.emit("update-parameters", data);
  }, [status]);

  return (
    <div className="App">
      <Active setStatus={setStatus} data={data} active={active}></Active>
    </div>
  );
}

export default App;
