import React, { useState } from "react";
import OTPInput from "react-otp-input";
const OtpPopup = ({ handlePopup }) => {
    const [otp, setOtp] = useState("");
  return (
    <>
      <div className="logout-modal">
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="rlsttpwb-tabs">
              <div className="innerpop-descrp">
                <div className="popbtm-dtl">
                <div className='job-otp'>
    <div className="job-otpcard-inner">
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
                  <button  className="btn primary-btn" onClick={handlePopup}>Next</button>
                </div>
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



export default OtpPopup