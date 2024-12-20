import React, { useState } from "react";
import EditTimSheetPopup from "./EditTimSheetPopup";

const TimeSheetList = () => {
    const [showEditTimSheetPopup, setShowEditTimSheetPopup] = useState(false);

    const handleEditTimSheetPopup = () => {
      setShowEditTimSheetPopup((p) => !p);
    };
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="card-title">
            <h3>Time Sheet:</h3>
          </div>
        </div>
        <div className="card-body">
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
                  <div className="timshet-edtbtn">
                    <span onClick={handleEditTimSheetPopup}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.7274 3.23722C12.3484 2.56442 12.6589 2.22802 12.9888 2.03179C13.7849 1.55832 14.7653 1.54359 15.5747 1.99295C15.9101 2.17918 16.2301 2.50612 16.8702 3.15998C17.5103 3.81385 17.8304 4.14078 18.0126 4.48346C18.4525 5.31028 18.4381 6.31167 17.9746 7.12493C17.7825 7.46198 17.4532 7.77917 16.7946 8.41352L8.95818 15.9613C7.71008 17.1634 7.08602 17.7645 6.30607 18.0691C5.52612 18.3738 4.66868 18.3513 2.95382 18.3065L2.7205 18.3004C2.19844 18.2868 1.93741 18.2799 1.78567 18.1077C1.63393 17.9355 1.65465 17.6696 1.69608 17.1378L1.71858 16.8491C1.83519 15.3523 1.89349 14.6039 2.18577 13.9312C2.47805 13.2584 2.98222 12.7123 3.99054 11.6198L11.7274 3.23722Z"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.834 3.33398L16.6673 9.16732"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.666 18.334H18.3327"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="timesheet-data">
                <div className="timesheet-data-inner">
                  <p>Tuesday</p>
                </div>
                <div className="timesheet-data-inner">
                  <p>09:00 AM To 05:00 PM</p>
                  <div className="timshet-edtbtn">
                    <span onClick={handleEditTimSheetPopup}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.7274 3.23722C12.3484 2.56442 12.6589 2.22802 12.9888 2.03179C13.7849 1.55832 14.7653 1.54359 15.5747 1.99295C15.9101 2.17918 16.2301 2.50612 16.8702 3.15998C17.5103 3.81385 17.8304 4.14078 18.0126 4.48346C18.4525 5.31028 18.4381 6.31167 17.9746 7.12493C17.7825 7.46198 17.4532 7.77917 16.7946 8.41352L8.95818 15.9613C7.71008 17.1634 7.08602 17.7645 6.30607 18.0691C5.52612 18.3738 4.66868 18.3513 2.95382 18.3065L2.7205 18.3004C2.19844 18.2868 1.93741 18.2799 1.78567 18.1077C1.63393 17.9355 1.65465 17.6696 1.69608 17.1378L1.71858 16.8491C1.83519 15.3523 1.89349 14.6039 2.18577 13.9312C2.47805 13.2584 2.98222 12.7123 3.99054 11.6198L11.7274 3.23722Z"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.834 3.33398L16.6673 9.16732"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.666 18.334H18.3327"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="timesheet-data">
                <div className="timesheet-data-inner">
                  <p>Wednesday</p>
                </div>
                <div className="timesheet-data-inner">
                  <p>09:00 AM To 05:00 PM</p>
                  <div className="timshet-edtbtn">
                    <span onClick={handleEditTimSheetPopup}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.7274 3.23722C12.3484 2.56442 12.6589 2.22802 12.9888 2.03179C13.7849 1.55832 14.7653 1.54359 15.5747 1.99295C15.9101 2.17918 16.2301 2.50612 16.8702 3.15998C17.5103 3.81385 17.8304 4.14078 18.0126 4.48346C18.4525 5.31028 18.4381 6.31167 17.9746 7.12493C17.7825 7.46198 17.4532 7.77917 16.7946 8.41352L8.95818 15.9613C7.71008 17.1634 7.08602 17.7645 6.30607 18.0691C5.52612 18.3738 4.66868 18.3513 2.95382 18.3065L2.7205 18.3004C2.19844 18.2868 1.93741 18.2799 1.78567 18.1077C1.63393 17.9355 1.65465 17.6696 1.69608 17.1378L1.71858 16.8491C1.83519 15.3523 1.89349 14.6039 2.18577 13.9312C2.47805 13.2584 2.98222 12.7123 3.99054 11.6198L11.7274 3.23722Z"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.834 3.33398L16.6673 9.16732"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.666 18.334H18.3327"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="timesheet-data">
                <div className="timesheet-data-inner">
                  <p>Thursday</p>
                </div>
                <div className="timesheet-data-inner">
                  <p>09:00 AM To 05:00 PM</p>
                  <div className="timshet-edtbtn">
                    <span onClick={handleEditTimSheetPopup}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.7274 3.23722C12.3484 2.56442 12.6589 2.22802 12.9888 2.03179C13.7849 1.55832 14.7653 1.54359 15.5747 1.99295C15.9101 2.17918 16.2301 2.50612 16.8702 3.15998C17.5103 3.81385 17.8304 4.14078 18.0126 4.48346C18.4525 5.31028 18.4381 6.31167 17.9746 7.12493C17.7825 7.46198 17.4532 7.77917 16.7946 8.41352L8.95818 15.9613C7.71008 17.1634 7.08602 17.7645 6.30607 18.0691C5.52612 18.3738 4.66868 18.3513 2.95382 18.3065L2.7205 18.3004C2.19844 18.2868 1.93741 18.2799 1.78567 18.1077C1.63393 17.9355 1.65465 17.6696 1.69608 17.1378L1.71858 16.8491C1.83519 15.3523 1.89349 14.6039 2.18577 13.9312C2.47805 13.2584 2.98222 12.7123 3.99054 11.6198L11.7274 3.23722Z"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.834 3.33398L16.6673 9.16732"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.666 18.334H18.3327"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="timesheet-data">
                <div className="timesheet-data-inner">
                  <p>Friday</p>
                </div>
                <div className="timesheet-data-inner">
                  <p>09:00 AM To 05:00 PM</p>
                  <div className="timshet-edtbtn">
                    <span onClick={handleEditTimSheetPopup}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.7274 3.23722C12.3484 2.56442 12.6589 2.22802 12.9888 2.03179C13.7849 1.55832 14.7653 1.54359 15.5747 1.99295C15.9101 2.17918 16.2301 2.50612 16.8702 3.15998C17.5103 3.81385 17.8304 4.14078 18.0126 4.48346C18.4525 5.31028 18.4381 6.31167 17.9746 7.12493C17.7825 7.46198 17.4532 7.77917 16.7946 8.41352L8.95818 15.9613C7.71008 17.1634 7.08602 17.7645 6.30607 18.0691C5.52612 18.3738 4.66868 18.3513 2.95382 18.3065L2.7205 18.3004C2.19844 18.2868 1.93741 18.2799 1.78567 18.1077C1.63393 17.9355 1.65465 17.6696 1.69608 17.1378L1.71858 16.8491C1.83519 15.3523 1.89349 14.6039 2.18577 13.9312C2.47805 13.2584 2.98222 12.7123 3.99054 11.6198L11.7274 3.23722Z"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.834 3.33398L16.6673 9.16732"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.666 18.334H18.3327"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="timesheet-data">
                <div className="timesheet-data-inner">
                  <p>Saturday</p>
                </div>
                <div className="timesheet-data-inner">
                  <p>09:00 AM To 05:00 PM</p>
                  <div className="timshet-edtbtn">
                    <span onClick={handleEditTimSheetPopup}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.7274 3.23722C12.3484 2.56442 12.6589 2.22802 12.9888 2.03179C13.7849 1.55832 14.7653 1.54359 15.5747 1.99295C15.9101 2.17918 16.2301 2.50612 16.8702 3.15998C17.5103 3.81385 17.8304 4.14078 18.0126 4.48346C18.4525 5.31028 18.4381 6.31167 17.9746 7.12493C17.7825 7.46198 17.4532 7.77917 16.7946 8.41352L8.95818 15.9613C7.71008 17.1634 7.08602 17.7645 6.30607 18.0691C5.52612 18.3738 4.66868 18.3513 2.95382 18.3065L2.7205 18.3004C2.19844 18.2868 1.93741 18.2799 1.78567 18.1077C1.63393 17.9355 1.65465 17.6696 1.69608 17.1378L1.71858 16.8491C1.83519 15.3523 1.89349 14.6039 2.18577 13.9312C2.47805 13.2584 2.98222 12.7123 3.99054 11.6198L11.7274 3.23722Z"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.834 3.33398L16.6673 9.16732"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.666 18.334H18.3327"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="timesheet-data">
                <div className="timesheet-data-inner">
                  <p>Sunday</p>
                </div>
                <div className="timesheet-data-inner">
                  <p>09:00 AM To 05:00 PM</p>
                  <div className="timshet-edtbtn">
                    <span onClick={handleEditTimSheetPopup}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.7274 3.23722C12.3484 2.56442 12.6589 2.22802 12.9888 2.03179C13.7849 1.55832 14.7653 1.54359 15.5747 1.99295C15.9101 2.17918 16.2301 2.50612 16.8702 3.15998C17.5103 3.81385 17.8304 4.14078 18.0126 4.48346C18.4525 5.31028 18.4381 6.31167 17.9746 7.12493C17.7825 7.46198 17.4532 7.77917 16.7946 8.41352L8.95818 15.9613C7.71008 17.1634 7.08602 17.7645 6.30607 18.0691C5.52612 18.3738 4.66868 18.3513 2.95382 18.3065L2.7205 18.3004C2.19844 18.2868 1.93741 18.2799 1.78567 18.1077C1.63393 17.9355 1.65465 17.6696 1.69608 17.1378L1.71858 16.8491C1.83519 15.3523 1.89349 14.6039 2.18577 13.9312C2.47805 13.2584 2.98222 12.7123 3.99054 11.6198L11.7274 3.23722Z"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.834 3.33398L16.6673 9.16732"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.666 18.334H18.3327"
                          stroke="#0B312F"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      {showEditTimSheetPopup && <EditTimSheetPopup handlePopup={handleEditTimSheetPopup} />}
    </>
  );
};

export default TimeSheetList;
