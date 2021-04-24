import React, { Component } from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import SortFilter from "./SortFilter";
import TableHeader from "./TableHeader";
import EmployeeCard from "./EmployeeCard";
import API from "./API";

class App extends Component {
  state = {
    search: "",
    employees: []
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    this.setState({ employees: data.results });
    console.log("updated state employees: ", this.state.employees)
  };

  filterEmployees = (employee) => {
    if (employee.name.first.includes(this.state.search)) {
      return true;
    }
    if (employee.name.last.includes(this.state.search)) {
      return true;
    }
    if (employee.email.includes(this.state.search)) {
      return true;
    }
    return false;
  }

  handleInputChange = e => {
    const { value } = e.target;
    this.setState({ search: value });
  }

  render() {
    return (
      <div className="container-lg">
        <Header />
        <div>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <div>
      <SortFilter />
        </div>
      </div>
        <TableHeader />
        <div>
          {this.state.employees.filter(this.filterEmployees).map((burrito) => (
            <EmployeeCard
              key={Math.random()}
              image={burrito.picture.medium}
              name={burrito.name.first + " " + burrito.name.last}
              phone={burrito.phone}
              email={burrito.email}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App;
