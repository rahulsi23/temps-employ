import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../../../assets/images";
import Uploader from "../../image-uploder/Uploader";
const Cscs = () => {
    
    const [boxState, setBoxState] = useState(
        "yes" || "no"
      );
  return (
    <>
      <div className="login-bg" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="auth-wraper">
          <div className="auth-wraper-inner">
            <div className="auth-card">
              <div className="auth-top">
                <h3>CSCS Card</h3>
                <p>Do you have CSCS Card</p>
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
                                Yes
                            </span>
                          </label>
                        </div>
                    </li>
                    <li  onClick={() => setBoxState("no")}>
                    <div className="cscs-card">
                          <label>
                            <input type="radio" name="cscs" />
                            <span>
                                <em></em>
                                No
                            </span>
                          </label>
                        </div>
                    </li>
                    </ul>
                </div>
                {boxState === "yes" && (
                 <div className="form-inputs">
                    <label>CSCS Card</label>
             <Uploader />
            </div>
              )}
                {boxState === "no" && (
            <div className="form-inputs">
                    <label>Link</label>
                     <div className="cscs-link">
                        <Link to="" target="_blank">https://www.cscs.uk.com/card-type/labourer/</Link>
                     </div>
                    </div>
           )}
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
    </>
  );
};


export default Cscs