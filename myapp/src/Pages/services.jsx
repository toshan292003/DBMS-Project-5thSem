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
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Kasavanahalli_lake.jpg/2560px-Kasavanahalli_lake.jpg",
      name:"Kasavanahalli Lake"
    },
    {
      img: "https://pbs.twimg.com/media/Etg_8rxUcAoMxH1.jpg",
      name: "Netravathi"
    },
    {
      img: "https://images.indianexpress.com/2023/05/2-97.jpg",
      name: "Basvanapura Lake"
    },
    {
      img: "https://lh5.googleusercontent.com/p/AF1QipPKfYo5pwsbZwElLEQ6g1uEPivSRIAVlmWqKhfo=w480-h300-k-n-rw",
      name: "Nelamangala Lake"
    },
    {
      img: "https://content.jdmagicbox.com/comp/bangalore/l4/080pxx80.xx80.220128232922.y9l4/catalogue/sarakki-lake-jp-nagar-7th-phase-bangalore-tourist-attraction-1yo9vnvw7f.jpg",
      name: "Sarakki Lake"
    },
    {
      img: "https://content.jdmagicbox.com/comp/bangalore/d6/080pxx80.xx80.220328233113.q9d6/catalogue/muthanallur-lake-muthanallur-bangalore-tourist-attraction-hj1dbcatev.jpg",
      name: "Rayasandra Lake"
    }
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