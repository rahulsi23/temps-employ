import React from "react";
import { Link } from "react-router-dom";
import { Banner } from "../../../assets/images";

const Signup = () => {
  return (
    <>
      <div className="login-bg" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="auth-wraper">
          <div className="auth-wraper-inner">
            <div className="auth-card signup-card">
              <div className="auth-top">
                <h3>Create Account</h3>
                <p>Sign Up now and find the best job suits you</p>
              </div>
              <div className="auth-main">
                <div className="auth-felx">
                  <div className="auth-inner-flex">
                  <div className="form-inputs">
                  <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                  </div>
                  <div className="auth-inner-flex">
                  <div className="form-inputs">
                  <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                  </div>
                  <div className="auth-inner-flex">
                  <div className="form-inputs">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                  </div>
                  <div className="auth-inner-flex">
                  <div className="form-inputs">
                  <input
                    type="number"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                </div>
                <div className="auth-inner-flex">
                  <div className="form-inputs">
                  <input
                    type="date"
                    name="dob"
                    className="form-control"
                    placeholder="Date of Birth"
                  />
                </div>
                </div>
                <div className="auth-inner-flex">
                  <div className="form-inputs">
                  <input
                    type="text"
                    name="addess"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
                </div>
                </div>
                <div className="auth-btn">
                  <Link className="btn primary-btn" to="/otp">
                    Next
                  </Link>
                </div>
                <div className="dnthv-acnt">
                <p>Already have account? <Link to="/login">Login</Link></p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Signup