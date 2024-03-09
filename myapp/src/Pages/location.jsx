import React, { useState } from "react";
import './input.css';

export default function Input(){

    const [Fields,setFields] = useState(["Location ID", "Lattitude", "Longitude", "Location Name"]);

    let ChangeFields = (k)=>{
        if (k == 1) {
            setFields(["Location ID", "Lattitude", "Longitude", "Location Name"]);
        }
    }

    return(
        <>
            <div className="input">
                <h1>ENTER LOCATION DETAILS:</h1>
                <form action="">
                    {Fields.map((names)=>(
                        <input type="text" name={names} placeholder={names}/>
                    ))}
                    <input type="button" value="Submit"/>
                </form>
            </div>
        </>
    )
}