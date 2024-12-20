import React from "react";
import { Link } from "react-router-dom";
import { Banner } from "../../../assets/images";

const ForgotPassword = () => {
  return (
    <>
      <div className="login-bg" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="auth-wraper">
          <div className="auth-wraper-inner">
            <div className="auth-card">
              <div className="auth-top">
                <h3>Forgot your password?</h3>
                <p>Enter your Email/phone number to send OTP</p>
              </div>
              <div className="auth-main">
                <div className="form-inputs">
                    <label>Phone/ Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email or phone here"
                  />
                </div>
               
                <div className="auth-btn">
                  <Link className="btn primary-btn" to="/otp">
                    Verify
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


export default ForgotPassword