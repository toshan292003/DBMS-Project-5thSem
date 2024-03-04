import React, { useEffect, useState } from "react";
import './tables.css';

export default function Tables() {

    const [Table,setTable] = useState(1);
    
    const [Titles,setTitles] = useState(["Location_ID","Lattitude","Longitude","Location_Name"])

    let TitleChange = (k)=>{
        if(k==1){
            setTitles(["Location_ID","Lattitude","Longitude","Location_Name"]);
        }
        else if(k==2){
            setTitles(["Location_ID","Lattitude","Longitude","Location_Name"]);
        }
    }

    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/tables/location')
        .then(res=>res.json())
        .then(data => setData(data))
        .catch(err=>console.log(err));
    }, [])

    return (
        <>
            <div className="tables">
                <div>
                    <button onClick={TitleChange}>Location</button>
                    <button>Measurement</button>
                    <button>Parameters</button>
                    <button>Quality</button>
                    <button>Sampling</button>
                </div>
                <section>
                    <ul>
                        {Titles.map((d,i)=>(
                            <li>{d}</li>
                        ))} 
                    </ul>
                </section>
                {data.map((d,i)=>(
                    <section>
                        <ul>
                            <li>{d.Loc_ID}</li>
                            <li>{d.Loc_lattitude}</li>
                            <li>{d.Loc_longitude}</li>
                            <li>{d.Loc_name}</li>
                        </ul>
                    </section>
                ))}
            </div>
        </>
    )
}