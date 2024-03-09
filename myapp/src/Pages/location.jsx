import React, { useState } from "react";
import './input.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Input(){

    const [formData,setFormData] = useState({
        LocID : '',
        lat : '',
        long : '',
        LocName : ''
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
          const response = await axios.post('http://localhost:3003/app/input/location', formData);
          console.log(response.data);
          setFormData({
            LocID : '',
            lat : '',
            long : '',
            LocName : ''
          });
          toast.success("Data Inserted Successfully!");
        } catch (error) {
          console.error('Error submitting data:', error);
          toast.error("This Entry Already Exists!");
        }
      };

    return(
        <>
            <div className="input">
                <h1>ENTER LOCATION DETAILS:</h1>
                <form>
                    <input type="text" name="LocID" placeholder="LocID" onChange={handleChange}/>
                    <input type="text" name="lat" placeholder="Latitude" onChange={handleChange}/>
                    <input type="text" name="long" placeholder="Longitude" onChange={handleChange}/>
                    <input type="text" name="LocName" placeholder="Location Name" onChange={handleChange}/>
                    <button onClick={handleSubmit}>SUBMIT</button>
                </form>
            </div>
        </>
    )
}