import React from 'react';
import "./style.css";

const EmployeeCard = (props) => {
    return (
    <div className="card">
      <div className="img-container d-flex align-items-center justify-content-center">
        <h2>{props.firstName} {props.lastName}</h2>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Full Name:</strong> {props.firstName} {props.lastName}
          </li>
          <li>
            <strong>City:</strong> {props.city}
          </li>
          <li>
            <strong>Username:</strong> {props.username}
          </li>
          <li>
            <strong>Age:</strong> {props.age}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;