import React, { useState } from "react";
import '../input.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Quality() {

    const [formData, setFormData] = useState({
        Std_ID: '',
        Param_id: '',
        Description: '',
        MinValue: '',
        MaxValue: ''
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
            const response = await axios.post('http://localhost:3003/app/input/quality', formData);
            console.log(response.data);
            setFormData({
                Std_ID: '',
                Param_id: '',
                Description: '',
                MinValue: '',
                MaxValue: ''
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
                <h1>ENTER QUALITY DETAILS:</h1>
                <form>
                    <input type="text" name="Std_ID" placeholder="Quality ID" onChange={handleChange} />
                    <input type="text" name="Param_id" placeholder="Parameter ID" onChange={handleChange} />
                    <input type="text" name="Description" placeholder="Description" onChange={handleChange} />
                    <input type="number" name="MinValue" placeholder="Minimum Value" onChange={handleChange} />
                    <input type="number" name="MaxValue" placeholder="Maximum Value" onChange={handleChange} />
                    <button onClick={handleSubmit}>SUBMIT</button>
                </form>
            </div>
        </>
    )
}