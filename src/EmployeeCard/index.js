import React from "react";
import "./style.css";

function EmployeeCard(props) {

  return (

    <table>
      <tbody>
        <tr>
          <td><img className="employeePhoto" src={props.image} alt={props.name} /></td>
          <td>{props.name}</td>
          <td>{props.email}</td>
          <td>{props.phone}</td>
        </tr>
      </tbody>
    </table>


  );

}
export default EmployeeCard;

