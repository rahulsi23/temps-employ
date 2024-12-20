import React from "react";
import { WorkFour, WorkOne, WorkThree, WorkTwo } from "../../../assets/images";

const HowItWorksSection = () => {
  return (
    <>
      <section className="howsitwork-section bg-dark">
        <div className="container">
          <div className="top-heading white-tophdng">
            <h3>How it Works?</h3>
            <p> Employers kickstart the process by creating a detailed profile
              outlining their temporary workforce requirements. Job seekers, on
              the other hand, showcase their skills and experience.</p>
          </div>
          <div className="works-list">
            <ul>
                <li>
                    <div className="work-card">
                        <div className="work-icon">
                            <span><img src={WorkOne}  alt="" /></span>
                        </div>
                        <h3>Craft Your TempsEmploy Profile:</h3>
                    </div>
                </li>
                <li>
                    <div className="work-card">
                        <div className="work-icon">
                            <span><img src={WorkTwo}  alt="" /></span>
                        </div>
                        <h3>Get Hired</h3>
                    </div>
                </li>
                <li>
                    <div className="work-card">
                        <div className="work-icon">
                            <span><img src={WorkThree}  alt="" /></span>
                        </div>
                        <h3>Complete your job</h3>
                    </div>
                </li>
                <li>
                    <div className="work-card">
                        <div className="work-icon">
                            <span><img src={WorkFour}  alt="" /></span>
                        </div>
                        <h3>Earn Money</h3>
                    </div>
                </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksSection;
