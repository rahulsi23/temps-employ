import React from "react";
import { Link } from "react-router-dom";
import { Banner } from "../../../assets/images";

const CreatePassword = () => {
  return (
    <>
      <div className="login-bg" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="auth-wraper">
          <div className="auth-wraper-inner">
            <div className="auth-card">
              <div className="auth-top">
                <h3>Create New Password</h3>
                <p>Please enter and confirm your new password.</p>
              </div>
              <div className="auth-main">
              <div className="form-inputs">
                    <label>Password</label>
                    <div className="pwdinput-wthicon">
            <input
              type="password"
              name="newpassword"
              className="form-control"
              placeholder="Enter new password"
            />
          <div className="pwdeye-icon">
            <span className="hide-eye"><i class="fa fa-eye" aria-hidden="true"></i></span>
            <span className="show-eye"><i class="fa fa-eye-slash" aria-hidden="true"></i></span>
          </div>
         </div>
                </div>
                <div className="form-inputs">
                    <label>Confirm Password</label>
                    <div className="pwdinput-wthicon">
            <input
              type="password"
              name="repeatnewpassword"
              className="form-control"
              placeholder="Confirm new password"
            />
          <div className="pwdeye-icon">
            <span className="hide-eye"><i class="fa fa-eye" aria-hidden="true"></i></span>
            <span className="show-eye"><i class="fa fa-eye-slash" aria-hidden="true"></i></span>
          </div>
         </div>
                </div>
               <div className="pswrd-note">
               <p>must contain 2 character</p>
               </div>
                <div className="auth-btn">
                  <Link className="btn primary-btn" to="/login">
                  Submit
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




export default CreatePassword