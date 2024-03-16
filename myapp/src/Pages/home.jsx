import React from "react";
import "./home.css";
export default function Home() {
  return (
    <>
      <div className="homedec"></div>
      <div className="homebox">
        <div>
          <section>
            <img src="https://img.freepik.com/free-photo/many-drops-water-drop-banana-leaves_1150-16400.jpg?t=st=1709556197~exp=1709559797~hmac=62d88f21e943424b5f12beaddc0529c7eb5f5c92b0187961aebc0a3a2f3ff28c&w=1060"alt=""/>
          </section>
          <h1>Water Purity Tracker</h1>
          <button>Add Samples</button>
        </div>
        <span className="home-items home-tri"></span>
        <span className="home-items home-circle"></span>
        <span className="home-items home-triangle"></span>
        <span className="home-items home-tri"></span>
      </div>
    </>
  );
}
