import React from 'react'
import { JobdtlPrflBg } from '../../../../assets/images'
import { Link } from 'react-router-dom'

const RequestJobDetail = () => {
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
                </div>
                <div className="jobdtl-flex-inner">
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam,
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hirngcrd-btm">
                        <div className="hirng-action">
                          <button className="btn decline-btn">Decline</button>
                          <Link
                            to="/request-job-detail"
                            className="btn accept-btn"
                          >
                            Accept
                          </Link>
                        </div>
                      </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default RequestJobDetail