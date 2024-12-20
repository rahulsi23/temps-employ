import React, { useState } from "react";
import { CompleteList, InProgressList, RequestList } from "./sub-component";

const WorkerHomeMain = () => {
  const [boxState, setBoxState] = useState(
    "request" || "inprogress" || "complete"
  );
  return (
    <>
      <main>
        <section className="homeone-section">
          <div className="container">
            <div className="hometab-list">
              <ul>
                <li onClick={() => setBoxState("request")}>
                  <div
                    className={`hometab-btn ${
                      boxState === "request" ? "active" : ""
                    }`}
                  >
                    Request
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
            </div>
             <div className="hometab-content">
             {boxState === "request" && (
              <RequestList />
            )}
            {boxState === "inprogress" && (
              <InProgressList />
            )}
            {boxState === "complete" && (
              <CompleteList />
            )}
             </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WorkerHomeMain;
