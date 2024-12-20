import React from "react";
import Select from "react-select";
const EditTimSheetPopup = ({ handlePopup }) => {
  const optionsTimeStart = [
    { value: "09:00 AM", label: "09:00 AM" },
    { value: "10:00 AM", label: "10:00 AM" },
    { value: "11:00 AM", label: "11:00 AM" },
  ];
  const optionsTimeEnd = [
    { value: "05:00 PM", label: "05:00 PM" },
    { value: "06:00 PM", label: "06:00 PM" },
    { value: "07:00 PM", label: "07:00 PM" },
  ];
  return (
    <>
      <div className="logout-modal">
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="rlsttpwb-tabs">
              <div className="innerpop-descrp">
                <div className="popbtm-dtl">
                  <div className="job-otp">
                    <div className="job-otpcard-inner">
                      <div className="auth-main">
                        <div className="authtimshet-head">
                          <h3>Monday</h3>
                        </div>
                        <div className="form-flex">
                          <div className="form-inner-flx-50">
                            <div className="form-inputs">
                              <div className="select-box">
                                <Select options={optionsTimeStart} />
                              </div>
                            </div>
                          </div>

                          <div className="form-inner-flx-50">
                            <div className="form-inputs">
                              <div className="select-box">
                                <Select options={optionsTimeEnd} />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="auth-btn timshetauth-btn">
                          <button
                            className="btn primary-btn"
                            onClick={handlePopup}
                          >
                            Save
                          </button>
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

export default EditTimSheetPopup;
