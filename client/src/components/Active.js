import React from "react";
import activeService from "../services/activeService";

const Active = () => {
  const forwardHandler = async () => {
    await activeService.update({ active: "forward" });
  };
  const backwardHandler = async () => {
    await activeService.update({ active: "backward" });
  };
  const turnLeftHandler = async () => {
    await activeService.update({ active: "turn left" });
  };
  const turnRightHandler = async () => {
    await activeService.update({ active: "turn right" });
  };
  return (
    <div className="flex justify-center items-center h-[500px]">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-2"
        onClick={forwardHandler}
      >
        Forward
      </button>
      <button
        className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-2"
        onClick={backwardHandler}
      >
        Backward
      </button>
      <button
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-2"
        onClick={turnLeftHandler}
      >
        Turn Left
      </button>
      <button
        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-2"
        onClick={turnRightHandler}
      >
        Turn Right
      </button>
    </div>
  );
};

export default Active;
