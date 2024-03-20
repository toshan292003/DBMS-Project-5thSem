import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './output.css';
export default function Output() {

  const port = 3003;
  const [Keys, setKeys] = useState(["Loc_name", "Parameter_Name","Readings", "Standard_Values","Percentage_Purity", "Water_Purity_Status"]);
  const [Titles, setTitles] = useState(["Location Name", "Parameter Name","Readings", "Standard Values","Percentage Purity", "Water Purity Status"]);
  const options = ['All Parameters','Temperature', 'pH Level', 'Dissolved Oxygen','Turbidity','Conductivity'];

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

  const [data, setData] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:${port}/tables/LocNames`)
          .then(res => res.json())
          .then(data => setData(data))
          .catch(err => console.log(err));
          console.log(data);
  }, [])

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(location);
      console.log(parameter);
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
      <div className="output">
        <h1>Select the Location and Parameter</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="location">Select Location:</label>
            <select value={location} onChange={handleLocationChange}>
              <option value="All">All Locations</option>
              {data.map((option, index) => (
                <option key={index} value={option.Loc_name}>{option.Loc_name}</option>
              ))}
            </select>
            <br />
            <label htmlFor="parameter">Select Parameter:</label>
            <select value={parameter} onChange={handleParameterChange}>
              {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <br/>
          </div>
          <button type="submit">Get Results</button>
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