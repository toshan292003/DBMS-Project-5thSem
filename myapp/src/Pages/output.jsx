import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Output() {

  const port = 3003;
  const [Keys, setKeys] = useState(["Loc_name", "Parameter_Name","Readings", "Standard_Values","Percentage_Purity", "Water_Purity_Status"]);
  const [Titles, setTitles] = useState(["Location Name", "Parameter Name","Readings", "Standard Values","Percentage Purity", "Water Purity Status"]);

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

  const [input, setinput] = useState([]);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(location);
      const response = await axios.post('http://localhost:3003/app/queries/location', { location, parameter });
      console.log(response.data);
      setinput(response.data);
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
            <option value="Kasavanahalli Lake">Kasavanahalli Lake</option>
            <option value="Rayasandra Lake">Rayasandra Lake</option>
            <option value="Nelamangala Lake">Nelamangala Lake</option>
            <option value="Sarakki Lake">Sarakki Lake</option>
            <option value="Chikkabanavara Lake">Chikkabanavara Lake</option>
            <option value="Arakere Lake">Arakere Lake</option>
            <option value="Basavanapura Lake">Basavanapura Lake</option>
          </select>
          <br />
          <label htmlFor="parameter">Select Parameter:</label>
          <select value={parameter} onChange={handleParameterChange}>
            <option value="Temperature">Temperature</option>
            <option value="pH Level">pH Level</option>
            <option value="Dissolved Oxygen">Dissolved Oxygen</option>
            <option value="Turbidity">Turbidity</option>
            <option value="Conductivity">Conductivity</option>
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
        {input.map((d) => (
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