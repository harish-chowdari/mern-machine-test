import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from "./EmpList.module.css";
import { Link } from 'react-router-dom';

const EmpList = () => {
  const [empDetails, setEmpDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const currentDate = new Date().toLocaleDateString(); // Get current date in "DD/MM/YYYY" format

  useEffect(() => {
    const fetchEmpDetails = async () => {
      try {
        const response = await axios.get('http://localhost:4005/empdetails');
        setEmpDetails(response.data);
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    fetchEmpDetails();
  }, []); 

  // Function to handle delete action
  const handleDelete = (index) => {
    const updatedEmpDetails = [...empDetails];
    updatedEmpDetails.splice(index, 1);
    setEmpDetails(updatedEmpDetails);
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter employee details based on search query
  // Filter employee details based on search query
const filteredEmpDetails = empDetails.filter(emp => 
  (emp.name && emp.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
  (emp.gender && emp.gender.toLowerCase().includes(searchQuery.toLowerCase())) ||
  (emp.designation && emp.designation.toLowerCase().includes(searchQuery.toLowerCase())) ||
  (emp.courses && emp.courses.some(course => course.toLowerCase().includes(searchQuery.toLowerCase())))
);

  

  return (
    <div className={Styles.container}>
      <h1>Employee List</h1>
      <div className={Styles.box}>
        <div className={Styles.countdiv}>
          <p>Total Count: {empDetails.length}</p>
          <Link to="/home" className={Styles.createemp}>Create Employee</Link>
        </div>
        <div className={Styles.search}>
          <p>Search</p>
          <input type='text' placeholder='Enter Search Keyword' value={searchQuery} onChange={handleSearchChange} />
        </div>
        <div className={Styles.table}>
          
          <table>

            <thead>

              <tr>
                <th>Unique Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>MobileNo</th>
                <th>Designation</th>
                <th>Gender</th>
                <th>Course</th>
                <th>Create Date</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>
              {filteredEmpDetails.map((emp, index) => {
                  console.log(emp); // Add this line to log the _id of each employee
                  return (
                    <tr key={index}>
                      <td className={Styles.sno}>{index + 1}</td>
                      <td><img src={emp.image} alt={emp.name} style={{ maxWidth: '50px' }} /></td>
                      <td>{emp.name}</td>
                      <td>{emp.email}</td>
                      <td>{emp.mobile}</td>
                      <td>{emp.designation}</td>
                      <td>{emp.gender}</td>
                      <td>{emp.courses.join(', ')}</td>
                      <td>{currentDate}</td> {/* Display current date */}
                      <td> 
                        <Link to={`/edit/${emp._id}`}><button>edit</button></Link> - <button onClick={() => handleDelete(index)}>delete</button>
                      </td>
                    </tr>
                  );
                })}

            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpList;
