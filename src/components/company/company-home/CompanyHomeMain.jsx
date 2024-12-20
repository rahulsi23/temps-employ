import React, { useState } from "react";
import { Completelist, InProgressList, OpenJobList } from "./sub-component";
import { Link } from "react-router-dom";

const CompanyHomeMain = () => {
  const [boxState, setBoxState] = useState(
    "open" || "inprogress" || "complete"
  );
  return (
    <>
      <main>
        <section className="homeone-section">
          <div className="container">
            <div className="hometab-list home-tab-flx">
              <ul>
                <li onClick={() => setBoxState("open")}>
                  <div
                    className={`hometab-btn ${
                      boxState === "open" ? "active" : ""
                    }`}
                  >
                    Open
                  </div>
                </li>
                <li onClick={() => setBoxState("inprogress")}>
                  <div
                    className={`hometab-btn ${
                      boxState === "inprogress" ? "active" : ""
                    }`}
                  >
                    In progress
                  </div>
                </li>
                <li onClick={() => setBoxState("complete")}>
                  <div
                    className={`hometab-btn ${
                      boxState === "complete" ? "active" : ""
                    }`}
                  >
                    Complete
                  </div>
                </li>
              </ul>
              <div className="post-job-btn">
                <Link to="/post-detail" className="btn primary-btn">
                  Post a job 
                </Link>
              </div>
            </div>
            <div className="hometab-content">
              {boxState === "open" && <OpenJobList />}
              {boxState === "inprogress" && <InProgressList />}
              {boxState === "complete" && <Completelist />}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CompanyHomeMain;
