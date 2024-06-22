import React from "react";
import "./TablePmt.css";

const TablePmt = (props) => {
  // console.log(props.data);
  return (
    <div>
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
            {props?.data.map((e, index) => (
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
      <button
        className="bg-red-500 mt-3 hover:bg-red-700  text-white  py-1 px-1 border border-blue-700 rounded ml-2 "
        onClick={() => props.clearHandler()}
      >
        Clear
      </button>
    </div>
  );
};

export default TablePmt;
