import React from "react";
import { Link } from "react-router-dom";
import { Banner } from "../../../assets/images";

const Login = () => {
  return (
    <>
      <div className="login-bg" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="auth-wraper">
          <div className="auth-wraper-inner">
            <div className="auth-card">
              <div className="auth-top">
                <h3>Log in</h3>
                <p>Login to explore temps employ</p>
              </div>
              <div className="auth-main">
                <div className="form-inputs">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email here"
                  />
                </div>
                <div className="form-inputs">
                  <input
                    type="password"
                    name="newpassword"
                    className="form-control"
                    placeholder="**********"
                  />
                </div>
                <div className="rmbrfrgt-main">
                  <div className="rmembr-btn">
                    <div className="chkbx-main">
                      <label>
                        <input type="checkbox" name="" />
                        <span>
                          <em></em>Remember Me.
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="frgot-btn">
                    <Link to="/forgot-password">Forgot Password </Link>
                  </div>
                </div>
                <div className="auth-btn">
                  <Link className="btn primary-btn" to="/home">
                    Login
                  </Link>
                </div>
                <div className="dnthv-acnt">
                <p>Don’t have account? <Link to="/signup">Signup</Link></p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default  Login;