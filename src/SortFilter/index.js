import React from "react";

function SortFilter(props) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle" type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        Sort by Gender
      </button>
      {/* <ul
        className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a
          className="dropdown-item"
          href="#">{props.gender.male}</a></li>
        <li><a
          className="dropdown-item"
          href="#">{props.gender.female}</a></li>
      </ul> */}
    </div>
  );
}

export default SortFilter;
