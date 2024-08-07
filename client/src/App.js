import { useEffect, useState } from "react";
import "./App.css";
import Active from "./components/Active";
import { io } from "socket.io-client";
import parameterService from "./services/parameterService";

function App() {
  const [status, setStatus] = useState({ active: "S" });
  const [data, setData] = useState();
  const [active, setActive] = useState();

  const getDataParameter = async () => {
    const data = await parameterService.get();
    setData(data?.data?.data);
  };

  // const socket = io("http://127.0.0.1:5003/car-active");
  const socket = io("https://bugnef-be-xedieukhien.onrender.com/car-active");
  useEffect(() => {
    // Xử lý các sự kiện từ máy chủ
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    socket.on("updated-parameters", (dataParameter) => {
      console.log(dataParameter);
      // setData(dataParameter);
      if (dataParameter) {
        getDataParameter();
      } else {
        console.log("error");
      }
    });
    // socket.on("collectionChange", async (change) => {
    //   if (change) {
    //     try {
    //       getDataParameter();
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // });
    socket.on("updated-active", (data) => {
      setActive(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    getDataParameter();
  }, []);

  useEffect(() => {
    socket.emit("update-active", status);
    // socket.emit("update-parameters", data);
  }, [status]);
  // console.log(data);

  return (
    <div className="App">
      <Active
        setStatus={setStatus}
        data={data}
        active={active}
        setData={setData}
      ></Active>
    </div>
  );
}

export default App;
