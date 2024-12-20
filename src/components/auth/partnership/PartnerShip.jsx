import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../../../assets/images";
import { DatePicker } from "keep-react";
// import Uploader from "../../image-uploder/Uploader";
const PartnerShip = () => {
  const [date, setDate] = useState(null);
  return (
    <>
      <div className="login-bg" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="auth-wraper">
          <div className="auth-wraper-inner">
            <div className="auth-card">
              <div className="auth-top">
                <h3>Partnership</h3>
                <p>Kindly input the required details to complete the registration process.</p>
              </div>
              <div className="auth-main">
                <div className="form-inputs">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter name"
                  />
                </div>
                <div className="form-inputs">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="form-inputs">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="form-inputs">
                  <label>Address</label>
                  <div className="input-wth-icon">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter address"
                    />
                    <span className="input-locico">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.83398 15C4.30988 15.3431 3.33398 15.8703 3.33398 16.4614C3.33398 17.4953 6.31875 18.3333 10.0007 18.3333C13.6826 18.3333 16.6673 17.4953 16.6673 16.4614C16.6673 15.8703 15.6914 15.3431 14.1673 15"
                          stroke="#B0B0B0"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M12.0827 7.50033C12.0827 8.65091 11.1499 9.58366 9.99935 9.58366C8.84877 9.58366 7.91602 8.65091 7.91602 7.50033C7.91602 6.34973 8.84877 5.41699 9.99935 5.41699C11.1499 5.41699 12.0827 6.34973 12.0827 7.50033Z"
                          stroke="#B0B0B0"
                          stroke-width="1.5"
                        />
                        <path
                          d="M11.0472 14.5783C10.7661 14.849 10.3904 15.0003 9.99952 15.0003C9.60852 15.0003 9.23285 14.849 8.95177 14.5783C6.37793 12.0843 2.92867 9.29824 4.61077 5.25343C5.52027 3.06643 7.70347 1.66699 9.99952 1.66699C12.2955 1.66699 14.4787 3.06643 15.3882 5.25343C17.0682 9.29316 13.6273 12.0929 11.0472 14.5783Z"
                          stroke="#B0B0B0"
                          stroke-width="1.5"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* <div className="form-inputs">
             <Uploader />
            </div> */}
                <div className="auth-btn">
                  <Link className="btn primary-btn" to="/national-insurance">
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

export default PartnerShip