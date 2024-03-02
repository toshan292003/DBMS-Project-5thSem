import React from "react";
import Carousel from "../Components/Carousel";
import Progress from "../Components/Progress";
export default function Services() {
  return (
    <>
      <div className="services">
        <Carousel></Carousel>
        <section>
            <Progress percentage = "67"></Progress>
            <Progress percentage = "97"></Progress>
            <Progress percentage = "27"></Progress>
            <Progress percentage = "100"></Progress>
            <Progress percentage = "0"></Progress>
            <Progress percentage = "50"></Progress>
        </section>
      </div>
    </>
  );
}
