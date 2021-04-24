import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="search"
          className="form-control"
          placeholder="Search for an employee"
          id="search"
        />
        <br />
      </div>
    </form>
  );
}

export default SearchForm;
