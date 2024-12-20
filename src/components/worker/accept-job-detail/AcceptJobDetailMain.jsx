import React from "react";
import { AcceptJobDetail, Breadcrumb, JobProfileSummary } from "./sub-component";

const AcceptJobDetailMain = () => {
  return (
    <>
      <main>
        <Breadcrumb />
        <section className="jobdtl-section">
          <div className="container">
            <JobProfileSummary />
            <AcceptJobDetail />
          </div>
        </section>
      </main>
    </>
  );
};

export default AcceptJobDetailMain;
