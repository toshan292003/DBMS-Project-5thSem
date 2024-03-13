import React, { useState } from "react";
import '../input.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Sample() {

    const [formData, setFormData] = useState({
        Samp_ID: '',
        Loc_ID: '',
        latitude: '',
        longitude: ''
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
            const response = await axios.post('http://localhost:3003/app/input/sample', formData);
            console.log(response.data);
            setFormData({
                Samp_ID: '',
                Loc_ID: '',
                latitude: '',
                longitude: ''
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
                <h1>ENTER SAMPLE POINT INFORMATION:</h1>
                <form>
                    <input type="text" name="Samp_ID" placeholder="Sample ID" onChange={handleChange} />
                    <input type="text" name="Loc_ID" placeholder="Location ID" onChange={handleChange} />
                    <input type="text" name="latitude" placeholder="Latitude" onChange={handleChange} />
                    <input type="text" name="longitude" placeholder="Longitude" onChange={handleChange} />
                    <button onClick={handleSubmit}>SUBMIT</button>
                </form>
            </div>
        </>
    )
}