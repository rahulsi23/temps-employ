import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { PrflImage } from "../../../../assets/images";

const WokerList = () => {
  const optionsIdType = [
    { value: "Lowest Rating", label: "Lowest Rating" },
    { value: "Rating", label: "Rating" },
    { value: "Rate", label: "Rate" },
    { value: "Location", label: "Location" },
    { value: "Job Acceptance", label: "Job Acceptance" },
  ];
  const optionsIdType2 = [
    { value: "30", label: "30" },
    { value: "60", label: "60" },
    { value: "90", label: "90" },
    { value: "120", label: "120" },
    { value: "150", label: "150" },
  ];
  return (
    <>
      <div className="card wrklist-card">
        <div className="worklst-tphdng">
          <h3>Work History</h3>
          <div className="workhstry-fltr workhstry-selet-flx">
            <div className="select-box">
              <Select
                options={optionsIdType2}
                placeholder={<div>Sort by</div>}
              />
            </div>
            <div className="select-box">
              <Select options={optionsIdType} placeholder={<div>Filter</div>} />
            </div>
          </div>
        </div>
        <div className="mywrk-listing workhstry-lstng">
          <ul>
            {Array(5)
              .fill(1)
              .map((item, idx) => {
                return (
                  <li>
                    <div className="wrklst-box">
                      <div className="wrklst-main">
                          <div className="wrklst-box-btm">
                            <div className="mppost-prfldtl">
                            <div className="wrklst-image">
                            <Link to="/worker-Profile"
                              style={{ backgroundImage: `url(${PrflImage})` }}
                            ></Link>
                          </div>
                            <div className="wrkothr-dtls">
                            <div className="wrklst-designer">
                            <Link to="/worker-Profile" className="emplyr-titl">Lorenz Paul</Link>
                            <p>(Visual Designer)</p>
                          </div>
                              <div className="wrkothr-dtls-flx">
                                <div className="wrkothr-dtls-flx-inner">
                                  <h3>
                                    <span className="mute-text">
                                      <svg
                                        width="14"
                                        height="15"
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.83657 13.7308C7.54446 14.0044 7.15393 14.1573 6.74749 14.1573C6.34106 14.1573 5.95059 14.0044 5.65841 13.7308C2.98289 11.2106 -0.602631 8.39519 1.14592 4.30779C2.09134 2.09776 4.36079 0.683594 6.74749 0.683594C9.13422 0.683594 11.4037 2.09776 12.3491 4.30779C14.0954 8.39007 10.5187 11.2193 7.83657 13.7308Z"
                                          stroke="#0EB7B0"
                                          stroke-width="1.2"
                                        />
                                        <path
                                          d="M9.10446 6.74657C9.10446 8.0488 8.0488 9.10446 6.74657 9.10446C5.44434 9.10446 4.38867 8.0488 4.38867 6.74657C4.38867 5.44434 5.44434 4.38867 6.74657 4.38867C8.0488 4.38867 9.10446 5.44434 9.10446 6.74657Z"
                                          stroke="#0EB7B0"
                                          stroke-width="1.2"
                                        />
                                      </svg>
                                      Location:
                                    </span>
                                    <span className="dark-text">
                                      {" "}
                                      XYZ Restaurant, 123 Main Street, City,
                                      State
                                    </span>
                                  </h3>
                                  <p>
                                    We are seeking reliable and experienced
                                    kitchen staff to join our team at XYZ
                                    Restaurant. As a kitchen staff
                                  </p>
                                </div>
                              </div>
                              <div className="wrklist-rating">
                                <p>
                                  4.8
                                  <span className="clndr-icon">
                                    <svg
                                      width="11"
                                      height="11"
                                      viewBox="0 0 11 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10.4122 5.05508L8.32403 6.87752L8.94957 9.59081C8.98267 9.73265 8.97322 9.8811 8.92241 10.0176C8.8716 10.1541 8.78168 10.2726 8.66389 10.3583C8.5461 10.444 8.40566 10.493 8.26015 10.4993C8.11463 10.5056 7.97048 10.4689 7.84573 10.3937L5.47925 8.95832L3.11785 10.3937C2.9931 10.4689 2.84896 10.5056 2.70344 10.4993C2.55792 10.493 2.41749 10.444 2.2997 10.3583C2.18191 10.2726 2.09198 10.1541 2.04117 10.0176C1.99036 9.8811 1.98092 9.73265 2.01402 9.59081L2.63863 6.8803L0.549954 5.05508C0.439482 4.9598 0.359599 4.83403 0.320323 4.69353C0.281047 4.55304 0.284126 4.40407 0.329174 4.26532C0.374222 4.12656 0.459234 4.0042 0.573549 3.91356C0.687864 3.82293 0.826393 3.76807 0.971764 3.75585L3.72487 3.5174L4.79954 0.954129C4.85566 0.819629 4.95032 0.704741 5.0716 0.623931C5.19288 0.54312 5.33536 0.5 5.4811 0.5C5.62684 0.5 5.76932 0.54312 5.8906 0.623931C6.01188 0.704741 6.10654 0.819629 6.16266 0.954129L7.24057 3.5174L9.99275 3.75585C10.1381 3.76807 10.2766 3.82293 10.391 3.91356C10.5053 4.0042 10.5903 4.12656 10.6353 4.26532C10.6804 4.40407 10.6835 4.55304 10.6442 4.69353C10.6049 4.83403 10.525 4.9598 10.4146 5.05508H10.4122Z"
                                        fill="#ECE656"
                                      />
                                    </svg>
                                  </span>
                                </p>
                                <span className="wrklist-prices">$600</span>
                              </div>
                            </div>
                            </div>
                            <div className="work-btn-auth">
                              <div className="wrkothr-dsgnation">
                                <Link
                                  to="/work-history-detail"
                                  class="viewdtl-badge"
                                >
                                 Send Request
                                </Link>
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
                          </div>
                        </div>
                      </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default WokerList;
