import React, { useEffect, useState } from "react";
import './tables.css';

export default function Tables() {

    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/tables')
        .then(res=>res.json())
        .then(data => setData(data))
        .catch(err=>console.log(err));
    }, [])

    return (
        <>
            <div className="tables">
                <section>
                    <ul>
                        <li>Loc_ID</li>
                        <li>Lattitude</li>
                        <li>Longitude</li>
                        <li>Loc_Name</li>
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