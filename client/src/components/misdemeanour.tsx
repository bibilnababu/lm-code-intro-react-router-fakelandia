import React, { useContext, useEffect, useState } from 'react';

const Misdemeanour = () => {
 
  const [misdemeanours, setMisdemeanours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/api/misdemeanours/100');
      const data = await response.json();
      setMisdemeanours(data);
    };

    fetchData();
  }, [setMisdemeanours]);

  
  

  return (
    <div>
     
      <h1>Misdemeanours</h1>
      <label htmlFor="filter">Filter by:</label>
      
      <table>
        <thead>
          <tr>
            <th>Citizen ID</th>
            <th>Date</th>
            <th>Misdemeanour</th>
            <th>Punishment Idea</th>
          </tr>
        </thead>
        
      </table>
    </div>
  );
};


export default Misdemeanour;

