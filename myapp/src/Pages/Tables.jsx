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
                <table>
                    <thead>
                        <tr>
                            <th>Loc_ID</th>
                            <th>Lattitude</th>
                            <th>Longitude</th>
                            <th>Loc_Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d,i)=>(
                            <tr key={i}>
                                <td>{d.Loc_ID}</td>
                                <td>{d.Loc_lattitude}</td>
                                <td>{d.Loc_longitude}</td>
                                <td>{d.Loc_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}