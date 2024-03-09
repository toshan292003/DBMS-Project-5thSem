import React, { useState } from "react";
import '../input.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Parameter() {

  const [formData, setFormData] = useState({
    paramID: '',
    unit: '',
    name: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3003/app/input/parameter', formData);
      console.log(response.data);
      setFormData({
        paramID: '',
        unit: '',
        name: ''
      });
      toast.success("Data Inserted Successfully!");
    } catch (error) {
      console.error('Error submitting data:', error);
      toast.error("This Entry Already Exists!");
    }
  };

  return (
    <>
      <div className="input">
        <h1>ENTER PARAMETER DETAILS:</h1>
        <form>
          <input type="text" name="paramID" placeholder="Parameter ID" onChange={handleChange} />
          <input type="text" name="unit" placeholder="Std Unit" onChange={handleChange} />
          <input type="text" name="name" placeholder="Name of Parameter" onChange={handleChange} />
          <button onClick={handleSubmit}>SUBMIT</button>
        </form>
      </div>
    </>
  )
}