import React from "react";
import { Breadcrumb, RequestJobDetail } from "./sub-component";

const RequestJobDetailMain = () => {
  return (
    <>
      <main>
        <Breadcrumb />
        <section className="jobdtl-section">
          <div className="container">
        <RequestJobDetail />
          </div>
        </section>
      </main>
    </>
  );
};

export default RequestJobDetailMain;
