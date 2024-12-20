import React from "react";

const ChangePasswordForm = () => {
  return (
    <>
      <div className="card">
        <div className="thhdng-chng">
          <h3>Change Password</h3>
        </div>
        <div className="cahnge-password">
        <div className="pwdinput-wthicon">
          <div className="form-inputs">
            <input
              type="password"
              name="newpassword"
              className="form-control"
              placeholder="Enter new password"
            />
          </div>
          <div className="pwdeye-icon">
            <span className="hide-eye"><i class="fa fa-eye" aria-hidden="true"></i></span>
            <span className="show-eye"><i class="fa fa-eye-slash" aria-hidden="true"></i></span>
          </div>
          </div>
         <div className="pwdinput-wthicon">
         <div className="form-inputs">
            <input
              type="password"
              name="repeatnewpassword"
              className="form-control"
              placeholder="Re-enter new password"
            />
          </div>
          <div className="pwdeye-icon">
            <span className="hide-eye"><i class="fa fa-eye" aria-hidden="true"></i></span>
            <span className="show-eye"><i class="fa fa-eye-slash" aria-hidden="true"></i></span>
          </div>
         </div>
          <div className="chngepwd-btn">
            <button className="btn primary-btn">Change</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordForm;
