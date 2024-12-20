import React from "react";
import { Banner } from "../../../assets/images";
import Uploader from "../../image-uploder/Uploader";
const OwnerNiNumber = () => {
  return (
    <>
      <div className="sole-trader-main">
        <div className="login-bg" style={{ backgroundImage: `url(${Banner})` }}>
          <div className="auth-wraper">
            <div className="auth-wraper-inner">
              <div className="auth-card">
                <div className="auth-top">
                  <h3>Partnership</h3>
                  <p>
                    Kindly input the required details to complete the
                    registration process.
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-main">
                    <div className="form-flex">
                      <div className="form-inner-flx-50">
                        <div className="form-inputs">
                          <label className="form-label">
                            First Owner Name <i>*</i>
                          </label>
                          <input
                            type="text"
                            name="company-name"
                            placeholder="Enter company owner name"
                          />
                        </div>
                      </div>
                      <div className="form-inner-flx-50">
                        <div className="form-inputs">
                          <label>National Insurance Number</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter name"
                          />
                        </div>
                        <div className="slect-check">
                          <label>
                            <input type="checkbox" />
                            <span>
                              <em></em>I do not have a National Insurance Number
                              yet
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="form-inner-flx-100">
                        <div className="form-inputs">
                          <label>Proof of National Insurance Number</label>
                          <Uploader />
                        </div>
                      </div>
                    </div>
                    <div className="add-ower-ni-number">
                      <div className="add-ower-number-inner">
                        <span>
                          <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.99935 7.16699V13.8337M13.3327 10.5003H6.66602"
                              stroke="#0B312F"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M18.3327 10.5003C18.3327 5.89795 14.6017 2.16699 9.99935 2.16699C5.39697 2.16699 1.66602 5.89795 1.66602 10.5003C1.66602 15.1027 5.39697 18.8337 9.99935 18.8337C14.6017 18.8337 18.3327 15.1027 18.3327 10.5003Z"
                              stroke="#0B312F"
                            />
                          </svg>
                        </span>
                        Add Partner
                      </div>
                    </div>

                    <div className="form-btn flex-btn">
                      <button type="button" className="btn primary-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default OwnerNiNumber