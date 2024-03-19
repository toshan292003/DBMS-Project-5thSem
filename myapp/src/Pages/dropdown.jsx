import React, { useEffect, useState } from 'react';

function Dropdown() {
  const port = 3003;
  let option = ['Temperature'];
  const [selectedOption, setSelectedOption] = useState(option[0]); // State to store selected option
  
  const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:${port}/tables/LocNames`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, [])

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Update selected option when dropdown value changes
  };

  return (
    <div className='output'>
      <form action="">
        <label htmlFor="dropdown">Select an option:</label>
        <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
          {option.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <p>You have selected: {selectedOption}</p>
      </form>
    </div>
  );
}

export default Dropdown;
