import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../../../assets/images";
import OTPInput from "react-otp-input";
const Otp = () => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <div className="login-bg" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="auth-wraper">
          <div className="auth-wraper-inner">
            <div className="auth-card">
              <div className="auth-top">
                <h3>OTP Verification </h3>
                <p>Please enter your OTP to verify</p>
              </div>
              <div className="auth-main">
                <div className="otp-inputs">
                <OTPInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={5}
                      renderSeparator={''}
                      skipDefaultStyles={true}
                      renderInput={(props) => <input {...props} />}
                    />
                </div>
             
                <div className="auth-btn">
                  <Link className="btn primary-btn" to="/personal-info">
                    Submit
                  </Link>
                </div>
                <div className="dnthv-acnt">
                <p>Didn’t received the code? <Link to="/otp">Resend</Link></p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp