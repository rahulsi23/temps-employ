import React from "react";
import { Link } from "react-router-dom";
import { Banner } from "../../../assets/images";
import Uploader from "../../image-uploder/Uploader";
const NationalInsuranceNumber = () => {
  return (
    <>
      <div className="login-bg" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="auth-wraper">
          <div className="auth-wraper-inner">
            <div className="auth-card">
              <div className="auth-top">
                <h3>National insurance number</h3>
                <p>Your National Insurance Number is made up 
of 2 letters, 6 numbers and a final letter 
(which is always A, B, C, or D).</p>
              </div>
              <div className="auth-main">
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
                        <em></em>
                        I do not have a National Insurance Number yet
                    </span>
                  </label>
               </div>

                 <div className="form-inputs">
                    <label>Proof of National Insurance Number</label>
             <Uploader />
            </div>
                <div className="auth-btn">
                  <Link className="btn primary-btn" to="/right-to-work">
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default NationalInsuranceNumber