import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Banner, EmployerRole, WorkerRole } from "../../../assets/images";

const AuthRoles = () => {
  function handleRadioChange(type) {
    if (type === "EMP") {
      localStorage.setItem("userType", "EMPOLYEE");
    }
    if (type === "HR") {
      localStorage.setItem("userType", "HR");
    }
  }

  return (
    <>
      <div className="login-bg" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="auth-wraper">
          <div className="auth-wraper-inner">
            <div className="auth-card">
              <div className="auth-top">
                <h3>Select Your prefrence</h3>
                <p>Please select your prefrence</p>
              </div>
              <div className="auth-main">
                <div className="roles-main">
                  <ul>
                    <li>
                      <div className="roles-card">
                        <label>
                          <input
                            type="radio"
                            name="roles"
                            onClick={() => handleRadioChange("EMP")}
                          />
                          <div className="role-card-inner">
                            <em></em>
                            <div className="role-icon">
                              <img src={WorkerRole} alt="" />
                            </div>
                            <h3 className="roles-title">Find Work</h3>
                          </div>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="roles-card">
                        <label>
                          <input
                            type="radio"
                            name="roles"
                            onClick={() => handleRadioChange("HR")}
                          />
                          <div className="role-card-inner">
                            <em></em>
                            <div className="role-icon">
                              <img src={EmployerRole} alt="" />
                            </div>
                            <h3 className="roles-title">Get Worker</h3>
                          </div>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="auth-btn">
                  <Link className="btn primary-btn" to="/login">
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

export default AuthRoles;
