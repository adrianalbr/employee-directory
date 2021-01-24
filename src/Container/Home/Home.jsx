import React, { useEffect, useState } from "react";
import EmployeeCard from "../../Components/EmployeeCard/EmployeeCard";
import Api from "../../utils/Api";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [order, setOrder] = useState("ascend");
  const [search, setSearch] = useState("");

  useEffect(() => {
    Api.getEmployees().then((res) => {
      console.log(res.data.results);
      setUsers(res.data.results);
      setSortedUsers(res.data.results);
    });
  }, []);

  const handleSearch = event => {
    let value = event.target.value;
    setSearch(value);
};

  //write a function to change value of order
  const sort =()=> {
    const compare = (a, b) => {
      if (order === "ascend") {
        let ref = a.name.first.localeCompare(b.name.first);
        return ref;
      } else {
        let ref = b.name.first.localeCompare(a.name.first);
        return ref;
      }
    };

    const orderArr = users.sort(compare);
    setSortedUsers([...orderArr])
    console.log("O", orderArr);

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Employee Directory</h1>
        </div>
        </div>

      <div className="col-sm-4">
          <div className="input-group" >
      <input type="text" className="form-control mb-3 mt-3" name="search" value={search} onChange={handleSearch} placeholder="Search"/>
      </div>
        <div>
          <button type="button" className="btn btn-primary" onClick={sort}>
            Sort by name in descending order
          </button>
        </div>
      </div>
      <div className="row">
      
      {sortedUsers
      .filter(
       emp => emp.name.first.toLowerCase().includes(search.toLowerCase()) ||
       emp.name.last.toLowerCase().includes(search.toLowerCase()) ||
       emp.email.toLowerCase().includes(search.toLowerCase()))
      .map((info => (
          <EmployeeCard
            key={info.login.uuid}
            firstName={info.name.first}
            lastName={info.name.last}
            city={info.location.city}
            username={info.login.username}
            email={info.email}
          />
        )))}
      </div>
    </div>
  );
};

export default Home;
