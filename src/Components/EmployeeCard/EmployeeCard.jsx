import React from 'react';
import "./style.css";

const EmployeeCard = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.first}</h5>
                <p className="card-text">
                    {props.age}
                </p>
            </div>
         </div>
    );
};

export default EmployeeCard;