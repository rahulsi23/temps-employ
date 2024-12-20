import React from "react";
import { AboutImage } from "../../../assets/images";

const AboutSection = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="main-flex">
            <div className="inner-flex">
              <div className="about-image">
                <img src={AboutImage}  alt="" />
              </div>
            </div>
            <div className="inner-flex">
              <div className="about-descrp">
                <span className="title-badge">About</span>
                <h3>
                  Join our community where businesses flourish and skilled{" "}
                </h3>
                <p>
                  TempsEmploy is not just a platform; it's a commitment to
                  simplifying temporary staffing for both employers and job
                  seekers. We believe in creating a space where employers can
                  find reliable temporary workers swiftly, and workers can
                  access meaningful job opportunities. With transparency and
                  fairness at our core, TempsEmploy is reshaping the landscape
                  of temporary employment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
