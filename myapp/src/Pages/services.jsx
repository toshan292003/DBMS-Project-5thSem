import React from "react";
import Carousel from "../Components/Carousel";
import Progress from "../Components/Progress";
export default function Services() {
  return (
    <>
      <div className="services">
        <Carousel></Carousel>
        <section>
            <Progress percentage = "67" title = "Area-1"></Progress>
            <Progress percentage = "97" title = "Area-2"></Progress>
            <Progress percentage = "27" title = "Area-3"></Progress>
            <Progress percentage = "100" title = "Area-4"></Progress>
            <Progress percentage = "0" title = "Area-5"></Progress>
            <Progress percentage = "50" title = "Area-6"></Progress>
        </section>
      </div>
    </>
  );
}
