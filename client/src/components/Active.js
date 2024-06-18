import React, { useEffect, useState } from "react";
import activeService from "../services/activeService";
import io from "socket.io-client";
import TablePmt from "./TablePmt";
import parameterService from "../services/parameterService";

const Active = ({ setStatus, data }) => {
  const [active, setActive] = useState();
  const forwardHandler = async () => {
    // await activeService.update({ active: "F" });
    setStatus({ active: "F" });
    setActive("-Forward-");
  };
  const backwardHandler = async () => {
    // await activeService.update({ active: "B" });
    setStatus({ active: "B" });
    setActive("-Back-");
  };
  const turnLeftHandler = async () => {
    // await activeService.update({ active: "L" });
    setStatus({ active: "L" });
    setActive("-Turn Left-");
  };
  const turnRightHandler = async () => {
    // await activeService.update({ active: "R" });
    setStatus({ active: "R" });
    setActive("-Turn Right-");
  };
  const stopHandler = async () => {
    // await activeService.update({ active: "S" });
    setStatus({ active: "s" });
    setActive("-Stop-");
  };
  const autoLineHandler = async () => {
    // await activeService.update({ active: "Y" });
    setStatus({ active: "Y" });
    setActive("-Auto Line-");
  };
  const autoObstacleHandler = async () => {
    // await activeService.update({ active: "Z" });
    setStatus({ active: "Z" });
    setActive("-Auto Obstacle-");
  };
  const aotoFollowHandler = async () => {
    // await activeService.update({ active: "T" });
    setStatus({ active: "T" });
    setActive("-Auto Follow-");
  };

  const start = async () => {
    // await activeService.update({ active: "S" });
    setStatus({ active: "S" });
    setActive("-Stop-");
  };

  // socket.on('connect', () => {
  //   console.log('Connected to server');

  // });
  // const [data, setData] = useState();

  const clearHandler = async () => {
    try {
      await parameterService.delete();
    } catch (error) {
      console.log(error);
    }
  };

  // const getDataParameter = async () => {
  //   const data = await parameterService.get();
  //   setData(data);
  // };

  useEffect(() => {
    start();
    // getDataParameter();
    // // const socket = io('http://localhost:5000');
    // const socket = io("https://bugnef-be-xedieukhien.onrender.com");
    // socket.on("collectionChange", async (change) => {
    //   if (change) {
    //     try {
    //       getDataParameter();
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // });
    // // console.log(data);
    // return () => {
    //   socket.disconnect();
    //   // clearHandler();// Ngắt kết nối khi component unmount
    // };
  }, []);

  return (
    <div className="flex w-full justify-around ">
      <div className="flex flex-col justify-center items-center h-[700px]">
        <div className="mb-[70px] ml-[50px] w-[200px] flex justify-center border-cyan-400 px-2 py-2 border">
          <span>Active:</span>
          <span>{active}</span>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center border-r border-lime-500 pr-3">
            <button
              className="bg-blue-500 mb-3 w-[80px] h-[80px] rounded-full hover:bg-blue-700 text-white font-bold border border-blue-700 ml-2 mr-2"
              onClick={forwardHandler}
            >
              Forward
            </button>
            <div className="mb-3">
              <button
                className="bg-sky-500 hover:bg-sky-700 rounded-full text-white font-bold py-2 px-4 border border-blue-700 ml-4 "
                onClick={turnLeftHandler}
              >
                Turn Left
              </button>
              <button
                className="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 border border-blue-700 rounded ml-2 "
                onClick={stopHandler}
              >
                Stop
              </button>
              <button
                className="hover:bg-purple-800 rounded-full bg-purple-600 text-white font-bold py-2 px-4 border border-blue-700 ml-2 mr-2"
                onClick={turnRightHandler}
              >
                Turn Right
              </button>
            </div>
            <button
              className="bg-yellow-400 hover:bg-yellow-600 w-[90px] h-[80px] rounded-full text-white font-bold py-1 px-1 border border-blue-700 "
              onClick={backwardHandler}
            >
              Backward
            </button>
          </div>

          <div className="flex flex-col ml-3">
            <button
              className="bg-emerald-400 mb-3 hover:bg-emerald-600 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-2"
              onClick={autoLineHandler}
            >
              Auto Line
            </button>
            <button
              className="bg-emerald-400 mb-3 hover:bg-emerald-600 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-2"
              onClick={autoObstacleHandler}
            >
              Auto Obstacle
            </button>
            <button
              className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-2"
              onClick={aotoFollowHandler}
            >
              Auto Follow
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[150px]">
        <TablePmt data={data} clearHandler={clearHandler}></TablePmt>
      </div>
    </div>
  );
};

export default Active;
