import React, { useState } from "react";
import { JobdtlPrflBg, PrflImage, RouteIndication } from "../../../../assets/images";
import { Link } from "react-router-dom";
import SheetPopup from "./SheetPopup";
import RequestSentPopup from "./RequestSentPopup";
const WorkerDetailDescrp = () => {
  const [showSheetPopup, setShowSheetPopup] = useState(false);
  const handleSheetPopup = () => {
    setShowSheetPopup((p) => !p);
  };

  const [showRequestSentPopup, setShowRequestSentPopup] = useState(false);
  const handleRequestSentPopup = () => {
    setShowRequestSentPopup((p) => !p);
  };


  return (
    <>
      <div className="card">
        <div className="jobdtl-main">
          <div className="jobdtl-head">
            <h3>
              Lorenz Paul<span>(Visual Designer)</span>
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
              <div className="chatwithicon-main">
                <div className="chat-cv">
                  <div className="cv-with-icon">
                    <span>
                      Cv
                      <em>
                        <svg
                          width="14"
                          height="13"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3257 8.08197V11.7715C13.3257 12.0511 13.2146 12.3192 13.0169 12.5169C12.8192 12.7146 12.5511 12.8257 12.2715 12.8257H1.72994C1.45036 12.8257 1.18223 12.7146 0.984537 12.5169C0.786844 12.3192 0.675781 12.0511 0.675781 11.7715V8.08197C0.675781 7.94218 0.731313 7.80812 0.830159 7.70927C0.929006 7.61042 1.06307 7.55489 1.20286 7.55489C1.34265 7.55489 1.47672 7.61042 1.57556 7.70927C1.67441 7.80812 1.72994 7.94218 1.72994 8.08197V11.7715H12.2715V8.08197C12.2715 7.94218 12.3271 7.80812 12.4259 7.70927C12.5247 7.61042 12.6588 7.55489 12.7986 7.55489C12.9384 7.55489 13.0725 7.61042 13.1713 7.70927C13.2702 7.80812 13.3257 7.94218 13.3257 8.08197ZM6.62782 8.45488C6.67678 8.50389 6.73491 8.54276 6.79889 8.56929C6.86288 8.59581 6.93147 8.60946 7.00073 8.60946C7.07 8.60946 7.13859 8.59581 7.20257 8.56929C7.26656 8.54276 7.32469 8.50389 7.37364 8.45488L10.009 5.81948C10.058 5.77051 10.0969 5.71237 10.1234 5.64839C10.1499 5.58441 10.1635 5.51583 10.1635 5.44657C10.1635 5.37732 10.1499 5.30874 10.1234 5.24476C10.0969 5.18077 10.058 5.12264 10.009 5.07367C9.96007 5.02469 9.90193 4.98585 9.83795 4.95935C9.77396 4.93284 9.70538 4.9192 9.63613 4.9192C9.56687 4.9192 9.4983 4.93284 9.43431 4.95935C9.37033 4.98585 9.31219 5.02469 9.26322 5.07367L7.52781 6.80973V0.702861C7.52781 0.56307 7.47228 0.429006 7.37343 0.330159C7.27459 0.231313 7.14052 0.175781 7.00073 0.175781C6.86094 0.175781 6.72688 0.231313 6.62803 0.330159C6.52918 0.429006 6.47365 0.56307 6.47365 0.702861V6.80973L4.73825 5.07367C4.63934 4.97476 4.5052 4.9192 4.36534 4.9192C4.22547 4.9192 4.09133 4.97476 3.99243 5.07367C3.89353 5.17257 3.83796 5.30671 3.83796 5.44657C3.83796 5.58644 3.89353 5.72058 3.99243 5.81948L6.62782 8.45488Z"
                            fill="black"
                          />
                        </svg>
                      </em>
                    </span>
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
                <div className="rtngbtm-main">
                  <div className="chatwithicon-sheettime">
                    <h3>$ 123</h3>
                    <span onClick={handleSheetPopup}>See timesheet</span>
                  </div>
                  <div className="rtngbtm-sec">
                    <div className="ratng-points">
                      <span className="active">
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span className="active">
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span className="active">
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span className="active">
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span className="active">
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                    </div>
                    <p>5 reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="jobdtl-content">
              <div className="bkng-top">
                <h3>Skills</h3>
              </div>
              <div className="skills-tab">
              <div className="skils-list">
                              <span className="skils-badge">Figma</span>
                              <span className="skils-badge">Photoshop</span>
                        </div>
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
                <div className="bkng-data-descrp">
                  <p>Date of Birth:</p>
                  <p>01/01/2024</p>
                </div>
              </div>
            </div>
          
          </div>
          <div className="jobdtl-flex-inner">
           <div className="review-summary">
           <div className="review-sumry-head">
            <h3>Summary</h3>
           </div>
           <div className="review-sumry-list">
           <div className="rating-list">
            <ul>
            {Array(2).fill(1).map((item,idx)=>{
              return(
                <li>
                    <div className="employrtng-card">
                    <div className='rtngtp-timing'>
                             <p>50 min ago</p>
                        </div>
                        <div className="rtng-prfl-sec">
                        <span
                  style={{ backgroundImage: `url(${PrflImage})` }}
                ></span>
                        </div>
                      <div className="rtngrght-sec">
                        <h3>Niki Jonas</h3>
                        <div className='ratng-points'>
                            <span className='active'><i class="fa fa-star" aria-hidden="true"></i></span>
                            <span className='active'><i class="fa fa-star" aria-hidden="true"></i></span>
                            <span className='active'><i class="fa fa-star" aria-hidden="true"></i></span>
                            <span className='active'><i class="fa fa-star" aria-hidden="true"></i></span>
                            <span className='active'><i class="fa fa-star" aria-hidden="true"></i></span>
                         </div>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                    </div>
                    </li>
                       )
                    })}
                    </ul>
                    <div className="seeal-ratng-btn">
                         <span>See All</span>
                    </div>
        </div>
           </div>
           <div className="hirereqst-btn">
              <div className="form-btn flex-btn">
                <button type="button" className="btn primary-btn" onClick={handleRequestSentPopup}>
                Hire Request
                </button>
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
      {showSheetPopup && <SheetPopup handlePopup={handleSheetPopup} />}
      {showRequestSentPopup && <RequestSentPopup handlePopup={handleRequestSentPopup} />}
    </>
  );
};

export default WorkerDetailDescrp;
