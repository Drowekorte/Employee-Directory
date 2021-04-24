import React from "react";
import "./style.css";

function TableHeader() {
  return (
    <table className="tableHead">
      <thead>
        <tr>
          <th><strong></strong></th>
          <th><strong>Name</strong></th>
          <th><strong>Email</strong></th>
          <th><strong>Phone</strong></th>
        </tr>
      </thead>
    </table>


  );
}

export default TableHeader;

