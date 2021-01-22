import React, {useEffect, useState} from 'react';
import axios from "axios";
import EmployeeCard from "../../Components/EmployeeCard/EmployeeCard"

const Home = () => {

    const [info, setInfo] = useState([]);

    useEffect(() => {

        axios.get("https://randomuser.me/api/?results=10").then((response) => {
            console.log(response.data.results);
            setInfo(response.data.results);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center">Employee Directory</h1>
                </div>
            </div>
            <div className="row">
             {info.map((info) => (
                 <EmployeeCard key={info.results.id.value} name={info.results.name.first} last={info.results.name.last} age={info.results.dob.age}/> 
             ))}
             </div>
        </div>
    );
};

export default Home;