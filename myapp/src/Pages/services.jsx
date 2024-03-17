import React, { useState, useEffect } from "react";
import Carousel from "../Components/Carousel";
import Progress from "../Components/Progress";
export default function Services() {

  const port = 3003;
  const [Keys, setKeys] = useState(["Loc_name", "Loc_ID", "Percentage_Purity", "Water_Purity_Status"]);
  const [Titles, setTitles] = useState(["Location Name", "Loc_ID", "Purity %", "Water Purity Status"]);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:${port}/app/quality/locations`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
      console.log(data)
  }, [])

  useEffect(()=>{
    console.log(data);
  })

  const details = [
    {
      img: "https://pbs.twimg.com/media/Etg_8rxUcAoMxH1.jpg",
      name: "Netravathi"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Cauvery_Kaveri_River_Karnataka_India_%282%29.jpg",
      name: "Netravathi"
    },
    {
      img: "https://live.staticflickr.com/4511/37447307270_0438d76443_b.jpg",
      name: "Netravathi"
    },
  ];

  return (
    <>
      <div className="services">
        <Carousel details = {details}></Carousel>
        <section>
          <h1>Top 6 Purest Water Bodies with their Purity Percentage</h1>
          {data.map((n) => (
            <Progress percentage={parseInt(n.Percentage_Purity)} title={n.Loc_name}></Progress>
          ))}
        </section>
      </div>
    </>
  );
}