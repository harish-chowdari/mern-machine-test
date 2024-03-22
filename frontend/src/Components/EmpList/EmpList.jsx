import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmpList = () => {
  const [empDetails, setEmpDetails] = useState([]);

  useEffect(() => {
    const fetchEmpDetails = async () => {
      try {
        const response = await axios.get('http://localhost:4115/api/empdetails');
        setEmpDetails(response.data);
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    fetchEmpDetails();
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div>
      <h1>Employee Details</h1>
      <ul>
        {empDetails.map((emp, index) => (
          <li key={index}>
            <p>Name: {emp.name}</p>
            <p>Email: {emp.email}</p>
            <p>Mobile: {emp.mobile}</p>
            {emp.designation && <p>Designation: {emp.designation}</p>}
            {emp.gender && <p>Gender: {emp.gender}</p>}
            {emp.image && (
              <div>
                <p>Image:</p>
                <img src={emp.image} alt={emp.name} style={{ maxWidth: '200px' }} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmpList;
