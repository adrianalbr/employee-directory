import React, { useEffect, useState } from "react";
import EmployeeCard from "../../Components/EmployeeCard/EmployeeCard";
import Api from "../../utils/Api";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [order, setOrder] = useState("descend");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Api.getEmployees().then((res) => {
      console.log(res.data.results);
      setUsers(res.data.results);
      setSortedUsers(res.data.results);
    });
  }, []);

  //write a function to change value of order
  const sort =()=> {
    const compare = (a, b) => {
      if (order === "ascend") {
        //condition to check if ascend or descend
        //console.log(a.name.first, b.name.first)
        let ref = a.name.first.localeCompare(b.name.first);
        // console.log(ref)
        return ref;
      } else {
        let ref = b.name.first.localeCompare(a.name.first);
        // console.log(ref)
        return ref;
      }
    };

    const orderArr = users.sort(compare);
    setSortedUsers(orderArr)
    console.log("O", orderArr);
  }

  function handleSearchTerm (event) {
      setSearchTerm(event.target.value)
  }
//   const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Employee Directory</h1>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Search Employee List
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>

        <div>
          <button type="button" className="btn btn-primary" onClick={sort}>
            Sort by name
          </button>
        </div>
      </div>
      <div className="row">
        {sortedUsers.map((info) => (
          <EmployeeCard
            key={info.login.uuid}
            firstName={info.name.first}
            lastName={info.name.last}
            city={info.location.city}
            username={info.login.username}
            age={info.dob.age}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
