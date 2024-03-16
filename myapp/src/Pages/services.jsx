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
  }, [])

  useEffect(()=>{
    console.log(data);
  })

  const details = [
    {
      img: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      <div className="services">
        <Carousel details = {details}></Carousel>
        <section>
          {data.map((n) => (
            <Progress percentage={parseInt(n.Percentage_Purity)} title={n.Loc_name}></Progress>
          ))}
        </section>
      </div>
    </>
  );
}