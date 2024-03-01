import React from "react";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="homedec"></div>
      <div className="homebox">
        <div>
          <h1 id="about-1">ABOUT US</h1>
        </div>
        <span className="home-items home-tri"></span>
        <span className="home-items home-circle"></span>
        <span className="home-items home-triangle"></span>
        <span className="home-items home-tri"></span>
      </div>
      <div className="home-section1">
        <div>
          <section>
            <h2>OUR MISSION</h2>
            <p>
              Our resume builder simplifies creating professional resumes. Users
              input personal info, work history, education, skills, and more.
              Choose from customizable templates, preview, edit, and download.
              Streamlining the process, it ensures a polished presentation to
              potential employers.
            </p>
          </section>
          <img
            src="https://img.freepik.com/free-vector/business-mission-concept-illustration_114360-7315.jpg?t=st=1709297354~exp=1709300954~hmac=fa8a444120a9f08586b7ef53b794f33fb966bef17f6af7dc21727371833c729b&w=826"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
