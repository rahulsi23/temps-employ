import React from 'react'
import { Breadcrumb, CompletedJobDetail, JobProfileSummary } from './sub-component'

const CompletedJobDetailMain = () => {
  return (
    <>
      <main>
        <Breadcrumb />
        <section className="jobdtl-section">
          <div className="container">
            <JobProfileSummary />
            <CompletedJobDetail />
          </div>
        </section>
      </main>
    </>
  )
}

export default CompletedJobDetailMain