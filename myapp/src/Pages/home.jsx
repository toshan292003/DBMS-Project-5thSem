import React from "react";
import "./home.css";
export default function Home() {
  return (
    <>
      <div className="homedec"></div>
      <div className="homebox">
        <div>
          <img src="https://e1.pxfuel.com/desktop-wallpaper/766/164/desktop-wallpaper-letter-r-r-logo-3d.jpg"alt=""/>
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
      <div className="home-resume-samples">
        <span>
          Elevate your resume with our selection of professional templates
          tailored to your industry.
        </span>
        <h2>Select your Resume Template</h2>
        <p>
        Choose from a variety of professional resume templates to showcase your skills and experience effectively.
        </p>
        <div>
            <img src="https://marketplace.canva.com/EAFjRZP7Qy4/1/0/1131w/canva-minimalist-modern-professional-cv-resume-xkDELtpQH94.jpg" alt="" />
            <img src="https://marketplace.canva.com/EAFjRZP7Qy4/1/0/1131w/canva-minimalist-modern-professional-cv-resume-xkDELtpQH94.jpg" alt="" />
            <img src="https://marketplace.canva.com/EAFjRZP7Qy4/1/0/1131w/canva-minimalist-modern-professional-cv-resume-xkDELtpQH94.jpg" alt="" />
            <img src="https://marketplace.canva.com/EAFjRZP7Qy4/1/0/1131w/canva-minimalist-modern-professional-cv-resume-xkDELtpQH94.jpg" alt="" />
            <img src="https://marketplace.canva.com/EAFjRZP7Qy4/1/0/1131w/canva-minimalist-modern-professional-cv-resume-xkDELtpQH94.jpg" alt="" />
            <img src="https://marketplace.canva.com/EAFjRZP7Qy4/1/0/1131w/canva-minimalist-modern-professional-cv-resume-xkDELtpQH94.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
