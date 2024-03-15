import React, { useEffect, useState } from "react";
import './tables.css';

export default function Tables() {
    const port = 3003;
    const [Keys, setKeys] = useState([]);
    const [Titles, setTitles] = useState(["Location_ID", "Lattitude", "Longitude", "Location_Name"])

    let TitleChange = (k) => {
        if (k == 1) {
            setTitles(["Location_ID", "Lattitude", "Longitude", "Location_Name"]);
            fetch(`http://localhost:${port}/tables/location`)
                .then(res => res.json())
                .then(data => setData(data))
                .catch(err => console.log(err));
            setKeys(["Loc_ID", "Loc_lattitude", "Loc_longitude", "Loc_name"]);
        }
        else if (k == 2) {
            setTitles(["Measure_id", "Sample_id", "Param_id", "TimeStamp", "Value"]);
            fetch(`http://localhost:${port}/tables/measurement`)
                .then(res => res.json())
                .then(data => setData(data))
                .catch(err => console.log(err));
            setKeys(["Measure_ID", "Sample_id", "Param_id", "TimeStamp", "Value"]);
        }
        else if (k == 3) {
            setTitles(["ParamID", "Units", "Name"]);
            fetch(`http://localhost:${port}/tables/parameter`)
                .then(res => res.json())
                .then(data => setData(data))
                .catch(err => console.log(err));
            setKeys(["Param_ID", "Units", "Name"]);
        }
        else if (k == 4) {
            setTitles(["Std_ID", "Param_id", "Description", "MinValue", "MaxValue"]);
            fetch(`http://localhost:${port}/tables/quality`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
            setKeys(["Std_ID", "Param_id", "Description", "MinValue", "MaxValue"]);
        }
        else if (k == 5) {
            setTitles(["Samp_ID", "Lattitude", "Longitude", "Loc_ID"]);
            fetch(`http://localhost:${port}/tables/sampling_point`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
            setKeys (["Samp_ID", "Lattitude", "Longitude", "Loc_ID"]);
        }
    }



    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:${port}/tables/measurement`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <div className="tables">
                <div>
                    <button onClick={() => TitleChange(1)}>Location</button>
                    <button onClick={() => TitleChange(2)}>Measurement</button>
                    <button onClick={() => TitleChange(3)}>Parameters</button>
                    <button onClick={() => TitleChange(4)}>Quality</button>
                    <button onClick={() => TitleChange(5)}>Sampling</button>
                </div>
                <section>   
                    <ul>
                        {Titles.map((d) => (
                            <li>{d}</li>
                        ))}
                    </ul>
                </section>
                {data.map((d) => (
                    <section>
                        <ul>
                            {Keys.map((n) => (
                                <li>{d[n]}</li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </>
    )
}