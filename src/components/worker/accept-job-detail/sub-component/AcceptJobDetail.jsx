import React, { useState } from "react";
import { JobdtlPrflBg, RouteIndication } from "../../../../assets/images";
import { Link } from "react-router-dom";
import OtpPopup from "./OtpPopup";

const AcceptJobDetail = () => {
    const [showOtpPopup, setShowOtpPopup] = useState(false);

    const handleOtpPopup = () => {
      setShowOtpPopup((p) => !p);
    };
  return (
    <>
      <div className="card">
        <div className="jobdtl-main">
          <div className="jobdtl-head">
            <h3>
              Emma<span>(HR Manager at New Company)</span>
            </h3>
          </div>
        </div>
        <div className="jobdtl-flex">
          <div className="jobdtl-flex-inner">
            <div className="jobprfl-top">
              <div className="jobprfl-bgimage">
                <span
                  style={{ backgroundImage: `url(${JobdtlPrflBg})` }}
                ></span>
              </div>
              <div className="chatwithicon-btn">
                <Link to="/chat">
                  Chat With Lorenz
                  <em>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.66732 1.66634H12.334V9.66634H2.44732L1.66732 10.4463V1.66634ZM1.66732 0.333008C0.933984 0.333008 0.340651 0.933008 0.340651 1.66634L0.333984 13.6663L3.00065 10.9997H12.334C13.0673 10.9997 13.6673 10.3997 13.6673 9.66634V1.66634C13.6673 0.933008 13.0673 0.333008 12.334 0.333008H1.66732ZM3.00065 6.99967H8.33398V8.33301H3.00065V6.99967ZM3.00065 4.99967H11.0007V6.33301H3.00065V4.99967ZM3.00065 2.99967H11.0007V4.33301H3.00065V2.99967Z"
                        fill="#0EB7B0"
                      />
                    </svg>
                  </em>
                </Link>
              </div>
            </div>
            <div className="jobdtl-content">
              <div className="bkng-top">
                <h3>Details</h3>
              </div>
              <div className="bkng-data">
                <div className="bkng-data-descrp">
                  <p>Email Address:</p>
                  <p>emma@gmail.com</p>
                </div>
                <div className="bkng-data-descrp">
                  <p>Phone Number:</p>
                  <p>9999999999</p>
                </div>
                <div className="bkng-data-descrp">
                  <p>Address:</p>
                  <p>Apt. 284 16298 Green Isle, ME 21756</p>
                </div>
              </div>
            </div>
            <div className="jobdtl-content">
              <div className="bkng-top">
                <h3>Job Details</h3>
              </div>
              <div className="bkng-data">
                <div className="bkng-data-descrp">
                  <p>Job Title:</p>
                  <p>Designer</p>
                </div>
                <div className="bkng-data-descrp">
                  <p>Job Category:</p>
                  <p>UI UX Designer</p>
                </div>
                <div className="bkng-data-descrp">
                  <p>Location:</p>
                  <p>Apt. 284 16298 Green Isle, ME 21756</p>
                </div>
                <div className="bkng-data-descrp">
                  <p>Skill Required:</p>
                  <p>Figma, Photoshop</p>
                </div>
                <div className="bkng-data-descrp">
                  <p>Start Date:</p>
                  <p>01/01/2024</p>
                </div>
                <div className="bkng-data-descrp">
                  <p>Start Time:</p>
                  <p>12:00 AM</p>
                </div>
                <div className="bkng-data-descrp">
                  <p>Work Hour:</p>
                  <p>5:00</p>
                </div>
                <div className="bkng-data-descrp bkng-data-dtl-descrp">
                  <p>Description</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="jobdtl-flex-inner">
            <div className="route-indication-map">
              <div className="indication-map-inner">
                <span
                  style={{ backgroundImage: `url(${RouteIndication})` }}
                ></span>
              </div>
            </div>
            <div className="pikupmain-wthicon">
              <div className="pickup-route">
                <ul>
                  <li>
                    <label>Pick Up</label>
                    <p>
                      CH143, Scheme No 74, Indore, Madhya Pradesh 452010, India
                    </p>
                  </li>
                  <li>
                    <label>Drop Off</label>
                    <p>
                      CH29, Scheme No 74, Indore, Madhya Pradesh 452010, India
                    </p>
                  </li>
                </ul>
              </div>
              <div className="jobtime-duration">
            <div className="time-countdwn text-success">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.01959 1.8351C6.69549 1.8351 5.40113 2.22774 4.30019 2.96336C3.19924 3.69899 2.34116 4.74457 1.83445 5.96787C1.32774 7.19118 1.19516 8.53727 1.45348 9.83592C1.7118 11.1346 2.34941 12.3275 3.28569 13.2637C4.22196 14.2 5.41485 14.8376 6.71351 15.0959C8.01216 15.3543 9.35825 15.2217 10.5816 14.715C11.8049 14.2083 12.8504 13.3502 13.5861 12.2492C14.3217 11.1483 14.7143 9.85394 14.7143 8.52984C14.7123 6.75491 14.0063 5.05325 12.7512 3.79818C11.4962 2.54311 9.79452 1.83713 8.01959 1.8351ZM8.01959 14.1088C6.91617 14.1088 5.83754 13.7816 4.92009 13.1686C4.00263 12.5555 3.28756 11.6842 2.8653 10.6648C2.44305 9.64539 2.33257 8.52365 2.54783 7.44144C2.7631 6.35923 3.29444 5.36515 4.07467 4.58492C4.8549 3.80469 5.84898 3.27335 6.93119 3.05808C8.0134 2.84282 9.13514 2.9533 10.1546 3.37556C11.174 3.79782 12.0453 4.51289 12.6583 5.43034C13.2713 6.34779 13.5985 7.42643 13.5985 8.52984C13.5969 10.009 13.0086 11.427 11.9627 12.4729C10.9168 13.5188 9.49871 14.1071 8.01959 14.1088ZM3.39324 1.67191L1.16166 3.90349C1.10982 3.95533 1.04829 3.99644 0.980562 4.0245C0.912837 4.05255 0.84025 4.06699 0.766946 4.06699C0.693641 4.06699 0.621055 4.05255 0.55333 4.0245C0.485605 3.99644 0.424069 3.95533 0.372235 3.90349C0.267551 3.79881 0.20874 3.65683 0.20874 3.50878C0.20874 3.36074 0.267551 3.21875 0.372235 3.11407L2.60382 0.882489C2.65565 0.830655 2.71719 0.789537 2.78491 0.761485C2.85264 0.733432 2.92522 0.718994 2.99853 0.718994C3.07183 0.718994 3.14442 0.733432 3.21214 0.761485C3.27987 0.789537 3.3414 0.830655 3.39324 0.882489C3.44507 0.934323 3.48619 0.995859 3.51424 1.06358C3.54229 1.13131 3.55673 1.2039 3.55673 1.2772C3.55673 1.3505 3.54229 1.42309 3.51424 1.49082C3.48619 1.55854 3.44507 1.62008 3.39324 1.67191ZM15.6669 3.90349C15.6151 3.95536 15.5536 3.99651 15.4859 4.02459C15.4181 4.05266 15.3455 4.06712 15.2722 4.06712C15.1989 4.06712 15.1263 4.05266 15.0586 4.02459C14.9909 3.99651 14.9293 3.95536 14.8775 3.90349L12.6459 1.67191C12.5413 1.56723 12.4824 1.42525 12.4824 1.2772C12.4824 1.12915 12.5413 0.987173 12.6459 0.882489C12.7506 0.777805 12.8926 0.718994 13.0406 0.718994C13.1887 0.718994 13.3307 0.777805 13.4354 0.882489L15.6669 3.11407C15.7188 3.16588 15.76 3.22741 15.788 3.29514C15.8161 3.36287 15.8306 3.43547 15.8306 3.50878C15.8306 3.5821 15.8161 3.65469 15.788 3.72242C15.76 3.79015 15.7188 3.85168 15.6669 3.90349ZM11.9249 7.97194C12.0728 7.97194 12.2147 8.03072 12.3193 8.13535C12.424 8.23997 12.4827 8.38188 12.4827 8.52984C12.4827 8.6778 12.424 8.81971 12.3193 8.92433C12.2147 9.02896 12.0728 9.08774 11.9249 9.08774H8.01959C7.87162 9.08774 7.72972 9.02896 7.62509 8.92433C7.52047 8.81971 7.46169 8.6778 7.46169 8.52984V4.62457C7.46169 4.47661 7.52047 4.33471 7.62509 4.23008C7.72972 4.12546 7.87162 4.06668 8.01959 4.06668C8.16755 4.06668 8.30945 4.12546 8.41408 4.23008C8.5187 4.33471 8.57748 4.47661 8.57748 4.62457V7.97194H11.9249Z"
                    fill="#03C988"
                  />
                </svg>
              </span>
              <h3>01:21:22</h3>
            </div>
            <p>Total work Time</p>
          </div>
            </div>
            <div className="strtwrk-btn">
              <button className="btn primary-btn" onClick={handleOtpPopup}>Start work</button>
              <p>Enter OTP to Verify your Arrival</p>
            </div>
            <div className="jbdtl-type">
          <div className="rght-jbtype">
          <div className="jbtype-descrp">
              <h3>€50.00</h3>
              <p>Hourly Rate</p>
            </div>
          </div>
        </div>
        <div className="workpaused-msg">
       <p>Your Work is paused for now</p>
        </div>
          </div>
        </div>
      </div>



      {showOtpPopup && <OtpPopup handlePopup={handleOtpPopup} />}
    </>
  );
};

export default AcceptJobDetail;
