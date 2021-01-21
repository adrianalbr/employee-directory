import React, {useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {

    const [info, setInfo] = useState([
        {
            gender: "female",
            title: "Mrs",
            first: "Lotta",
            last: "Aalto",
            email: "lotta.aalto@example.com",
            age: "35",
        },
    ]);

    // useEffect(() => {

    //     axios.get("https://randomuser.me/api/?results=10").then((response) => {
    //         console.log(response.data.data);
    //         setInfo(response.data.data);
    //     });
    // }, {});

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center">Employee Directory</h1>
                </div>
            </div>
            <div className="row">
             {/* This is where the employees go */}
             {info.map((info) => (
                  <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..."/>
                  <div className="card-body">
                   <h5 className="card-title">{info.first, info.last}</h5>
                      <p className="card-text">
                          {info.age}
                      </p>
                    </div>
              </div>
             ))}
             </div>
        </div>
    );
};

export default Home;