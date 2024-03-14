import React, { useState } from 'react';

const YourComponent = () => {
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

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the selected location and parameter
    console.log('Selected Location:', location);
    console.log('Selected Parameter:', parameter);
    // You can perform further actions here like API calls, state updates, etc.
  };

  return (
    <div>
      <h1>Location and Parameter Selection</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Select Location:</label>
        <select id="location" value={location} onChange={handleLocationChange}>
          <option value="">-- Select Location --</option>
          <option value="Location 1">Location 1</option>
          <option value="Location 2">Location 2</option>
          <option value="Location 3">Location 3</option>
        </select>
        <br />
        <label htmlFor="parameter">Select Parameter:</label>
        <select id="parameter" value={parameter} onChange={handleParameterChange}>
          <option value="">-- Select Parameter --</option>
          <option value="Parameter 1">Parameter 1</option>
          <option value="Parameter 2">Parameter 2</option>
          <option value="Parameter 3">Parameter 3</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YourComponent;