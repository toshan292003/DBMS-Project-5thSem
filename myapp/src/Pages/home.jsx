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

      <div className="home-section1">
        <div>
          <img
            src="https://d1civoyjepycei.cloudfront.net/static/img/ai_writer_features/ai_resume_letter_writer.b5e3f346ae52.gif"
            alt=""
          />
          <section>
            <h2>How does our Resume Writer work ?</h2>
            <p>
              Our resume builder simplifies creating professional resumes. Users
              input personal info, work history, education, skills, and more.
              Choose from customizable templates, preview, edit, and download.
              Streamlining the process, it ensures a polished presentation to
              potential employers.
            </p>
            <button>Water Purity Tracker</button>
          </section>
        </div>
        <div>
          <section>
            <h2>Get Ratings and Check where you have to improve.</h2>
            <p>
              Revamp your resume effortlessly with our intuitive platform. Get
              personalized feedback and actionable insights to stand out to
              employers. Upgrade your chances of landing your dream job today!
            </p>
            <button>Rate My Resume</button>
          </section>
          <img
            src="https://img.freepik.com/free-vector/customer-feedback-online-review-concept_107791-13281.jpg?w=1380&t=st=1707736986~exp=1707737586~hmac=ac4b5352ac113168edd7eab2b024487f6c205a9622f905a2cda6a2ce3794e1a5"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
