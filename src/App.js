import React from "react";
import Header from "./Header";
import TableHeader from "./TableHeader";
import EmployeeCard from "./EmployeeCard";
import API from "./API";

class App extends React.Component {
  state = {
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


  render() {
    console.log(this.state.employees)
    return (

      <div className="container-lg">
        <Header/>
        <TableHeader/>
        <div>
          {this.state.employees.map((burrito) => (
              <EmployeeCard
                key={Math.random()}
                image={burrito.picture.medium}
                name={burrito.name.first + " " + burrito.name.last}
                phone={burrito.phone}
                email={burrito.email}
                
                  
                  />
          )
          )
          }
            </div>
          </div>



    )
  }
}

  export default App;
