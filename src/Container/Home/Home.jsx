import React, { useEffect, useState } from "react";
import EmployeeCard from "../../Components/EmployeeCard/EmployeeCard";
import Api from "../../utils/Api";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [order, setOrder] = useState("ascend");
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
    setSortedUsers([...orderArr])
    console.log("O", orderArr);
  };

  const handleSearchTerm = (event) => {
      let value = event.target.value;
      setSearchTerm(value);
  };
//   const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Employee Directory</h1>
        </div>
        </div>

      <div className="col-sm-4">
          <div className="input-group" >
      <input type="text" className="form-control mb-3 mt-3" name="search" value={searchTerm} onChange={handleSearchTerm} placeholder="Search"/>
      </div>
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
