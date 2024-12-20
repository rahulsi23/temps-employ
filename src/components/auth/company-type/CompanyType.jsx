import React from "react";
import { Link } from "react-router-dom";
import { Banner } from "../../../assets/images";

const CompanyType = () => {
  return (
    <>
      <div className="company-type-main">
        <div className="login-bg" style={{ backgroundImage: `url(${Banner})` }}>
          <div className="auth-wraper">
            <div className="auth-wraper-inner">
              <div className="auth-card">
                <div className="auth-top">
                  <h3>Company</h3>
                  <p>Select Company Type</p>
                </div>
                <div className="auth-main">
                  <div className="cscs-tab">
                    <ul>
                      <li onClick={() => setBoxState("yes")}>
                        <div className="cscs-card">
                          <label>
                            <input type="radio" name="cscs" />
                            <span>
                              <em></em>
                              Sole Trader
                            </span>
                          </label>
                        </div>
                      </li>
                      <li onClick={() => setBoxState("no")}>
                        <div className="cscs-card">
                          <label>
                            <input type="radio" name="cscs" />
                            <span>
                              <em></em>
                              Partnership
                            </span>
                          </label>
                        </div>
                      </li>
                      <li onClick={() => setBoxState("no")}>
                        <div className="cscs-card">
                          <label>
                            <input type="radio" name="cscs" />
                            <span>
                              <em></em>
                              Limited Company
                            </span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="auth-btn">
                    <Link className="btn primary-btn" to="/otp">
                      Next
                    </Link>
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
export default CompanyType;
