import React, { useState } from "react";

const SheetPopup = ({handlePopup}) => {
  return (
    <>

<div className="main-popup timesheet-modal">
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="popup-inner">
              <div className="popup-header">
                <div className="popup-heading">
                <h3>Time Sheet:</h3>
              </div>
              <div className="close-icon" onClick={handlePopup}>
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 1L1 15M1 1L15 15"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              </div>
              <div className="popup-body">
              <div className="timesheet-main">
                <div className="timesheet-head">
                  <div className="timesheet-head-inner">
                    <h3>Day</h3>
                  </div>
                  <div className="timesheet-head-inner">
                    <h3>Time</h3>
                  </div>
                </div>
                <div className="timesheet-body">
                  <div className="timesheet-data">
                    <div className="timesheet-data-inner">
                      <p>Monday</p>
                    </div>
                    <div className="timesheet-data-inner">
                      <p>09:00 AM To 05:00 PM</p>
                     
                    </div>
                  </div>

                  <div className="timesheet-data">
                    <div className="timesheet-data-inner">
                      <p>Tuesday</p>
                    </div>
                    <div className="timesheet-data-inner">
                      <p>09:00 AM To 05:00 PM</p>
                    
                    </div>
                  </div>

                  <div className="timesheet-data">
                    <div className="timesheet-data-inner">
                      <p>Wednesday</p>
                    </div>
                    <div className="timesheet-data-inner">
                      <p>09:00 AM To 05:00 PM</p>

                    </div>
                  </div>

                  <div className="timesheet-data">
                    <div className="timesheet-data-inner">
                      <p>Thursday</p>
                    </div>
                    <div className="timesheet-data-inner">
                      <p>09:00 AM To 05:00 PM</p>
                   
                    </div>
                  </div>

                  <div className="timesheet-data">
                    <div className="timesheet-data-inner">
                      <p>Friday</p>
                    </div>
                    <div className="timesheet-data-inner">
                      <p>09:00 AM To 05:00 PM</p>
                    
                    </div>
                  </div>

                  <div className="timesheet-data">
                    <div className="timesheet-data-inner">
                      <p>Saturday</p>
                    </div>
                    <div className="timesheet-data-inner">
                      <p>09:00 AM To 05:00 PM</p>
                    
                    </div>
                  </div>

                  <div className="timesheet-data">
                    <div className="timesheet-data-inner">
                      <p>Sunday</p>
                    </div>
                    <div className="timesheet-data-inner">
                      <p>09:00 AM To 05:00 PM</p>
                    
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay" onClick={handlePopup}></div>
      </div>
    </>
  );
};
export default SheetPopup;
