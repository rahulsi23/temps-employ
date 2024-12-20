import React from "react";
import { Breadcrumb, JobDetail, WokerList } from "./sub-component";

const JobDetailMain = () => {
  return (
    <>
      <main>
        <Breadcrumb />
        <section className="jobdtl-section">
          <div className="container">
            <JobDetail />
            <WokerList />
          </div>
        </section>
      </main>
    </>
  );
};

export default JobDetailMain;
