import React, { useState } from "react";
import '../input.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Measurement() {

    const [formData, setFormData] = useState({
        Measure_ID: '',
        Sample_id: '',
        Param_id: '',
        Value: ''
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
            const response = await axios.post('http://localhost:3003/app/input/measurement', formData);
            console.log(response.data);
            setFormData({
                Measure_ID: '',
                Sample_id: '',
                Param_id: '',
                Value: ''
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
                <h1>ENTER MEASUREMENT DETAILS:</h1>
                <form>
                    <input type="text" name="Measure_ID" placeholder="Measurement ID" onChange={handleChange} />
                    <input type="text" name="Sample_id" placeholder="Sampling ID" onChange={handleChange} />
                    <input type="text" name="Param_id" placeholder="Parameter ID" onChange={handleChange} />
                    <input type="number" name="Value" placeholder="Value" onChange={handleChange} />
                    <button onClick={handleSubmit}>SUBMIT</button>
                </form>
            </div>
        </>
    )
}