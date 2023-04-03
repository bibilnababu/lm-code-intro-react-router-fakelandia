import React, { useContext, useEffect, useState } from "react";
import { Misdemeanour as MisdemeanourType } from "../misdemeanours.types";

const Misdemeanour: React.FC = () => {
  const [misdemeanours, setMisdemeanours] = useState<MisdemeanourType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/misdemeanours/3");
      const data = (await response.json()) as { misdemeanours:MisdemeanourType[]};
      console.log(data);
      setMisdemeanours(data.misdemeanours);
  
    };

    fetchData();
  }, []);
  

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
        <tbody>
         
        {misdemeanours.map((misdemeanour, index) => (
            <tr key={index}>
              <td>{misdemeanour.citizenId}</td>
              <td>{misdemeanour.date}</td>
              <td>{misdemeanour.misdemeanour}</td>
              <td>
                <img
                  src={`https://picsum.photos/200/200?random=${index}`}
                  alt="punishment idea"
                />
              </td>
            </tr>
          ))}
          
          </tbody>
      </table>
    </div>
  );
};

export default Misdemeanour;
