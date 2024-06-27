import React, { memo } from "react";
import "./TablePmt.css";
import { Scrollbars } from "react-custom-scrollbars-2";

const TablePmt = (props) => {
  // console.log(props);
  // console.log(props.data);
  console.log(props.data);

  return (
    <div className="w-full h-[500px]">
      <div className="flex justify-end">
        <button
          className="bg-red-500 mt-3 hover:bg-red-700  text-white  py-1 px-1 border border-blue-700 rounded ml-2  mb-5"
          onClick={() => props.clearHandler()}
        >
          Clear
        </button>
      </div>
      <div className="h-full w-full">
        <Scrollbars autoHide style={{ width: "100%", height: "100%" }}>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Distance</th>
                  <th>Distance_L</th>
                  <th>Distance_R</th>
                  <th>DLeft_Sensor</th>
                  <th>Dright_sensor</th>
                  <th>ULeft_Sensor</th>
                  <th>Uright_sensor</th>
                </tr>
              </thead>
              <tbody>
                {props?.data?.reverse()?.map((e, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{e.d}</td>
                    <td>{e.dL}</td>
                    <td>{e.dR}</td>
                    <td>{e.Dl}</td>
                    <td>{e.Dr}</td>
                    <td>{e.Ul}</td>
                    <td>{e.Ur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};

export default memo(TablePmt);
