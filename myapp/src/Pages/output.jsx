import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Output() {

  const port = 3003;
  const [Keys, setKeys] = useState(["Loc_name", "Loc_ID", "Percentage_Purity", "Water_Purity_Status"]);
  const [Titles, setTitles] = useState(["Location Name", "Loc_ID", "Purity %", "Water Purity Status"])

  // Define state variables for location and parameter details
  const [location, setLocation] = useState('');
  const [parameter, setParameter] = useState('');

  // Function to handle location selection
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  // Function to handle parameter selection
  const handleParameterChange = (event) => {
    setParameter(event.target.value);
  };
  
  const [data, setData] = useState([]);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(location);
      const response = await axios.post('http://localhost:3003/app/queries/location', {location,parameter});
      console.log(response.data);
      setData(response.data);
      console.log("Data sent Successfully");
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };


  return (
    <>
      <div className="input">
        <h1>Location and Parameter Selection</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="location">Select Location:</label>
          <select value={location} onChange={handleLocationChange}>
            <option value="Netravathi">Netravathi</option>
            <option value="Location 2">Location 2</option>
            <option value="Location 3">Location 3</option>
          </select>
          <br />
          <label htmlFor="parameter">Select Parameter:</label>
          <select value={parameter} onChange={handleParameterChange}>
            <option value="P1">Temperature</option>
            <option value="P2">pH Level</option>
            <option value="P3">Dissolved Oxygen</option>
            <option value="P4">Turbidity</option>
            <option value="P5">Conductivity</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="tables">
        <section>
          <ul>
            {Titles.map((d) => (
              <li>{d}</li>
            ))}
          </ul>
        </section>
        {data.map((d) => (
          <section>
            <ul>
              {Keys.map((n) => (
                <li>{d[n]}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>

  );
}