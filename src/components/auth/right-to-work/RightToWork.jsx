import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../../../assets/images";
import Uploader from "../../image-uploder/Uploader";
const RightToWork = () => {
  const [boxState, setBoxState] = useState(
    "uk-passport" || "non-uk" || "uk-birth"
  );
  return (
    <>
      <div className="login-bg" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="auth-wraper">
          <div className="auth-wraper-inner">
            <div className="auth-card">
              <div className="auth-top">
                <h3>Right to Work</h3>
                <p>
                  Kindly upload the required details to complete the
                  registration process.
                </p>
              </div>
              <div className="auth-main">
                <div className="righttowrk-tab">
                  <ul>
                    <li onClick={() => setBoxState("uk-passport")}>
                      <div className={`righttowrk-btn ${boxState === "uk-passport" ? 'active' : ''}`}>Uk Passport</div>
                    </li>
                    <li onClick={() => setBoxState("non-uk")}>
                      <div className={`righttowrk-btn ${boxState === "non-uk" ? 'active' : ''}`}>Non-UK National</div>
                    </li>
                    <li onClick={() => setBoxState("uk-birth")}>
                      <div className={`righttowrk-btn ${boxState === "uk-birth" ? 'active' : ''}`}>UK Birth Certificate</div>
                    </li>
                  </ul>
                </div>
                {boxState === "uk-passport" && (
                  <div className="form-inputs">
                    <label>UK Passport</label>
                    <Uploader />
                  </div>
                )}
                {boxState === "non-uk" && (
                  <div className="form-inputs">
                    <label>Non-UK National</label>
                    <Uploader />
                  </div>
                )}
                {boxState === "uk-birth" && (
                  <div className="form-inputs">
                    <label>UK Birth Certificate</label>
                    <Uploader />
                  </div>
                )}
                <div className="auth-btn">
                  <Link className="btn primary-btn" to="/cscs">
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

export default RightToWork;
