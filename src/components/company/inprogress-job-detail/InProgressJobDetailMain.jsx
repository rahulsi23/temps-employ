import React from 'react'
import { Breadcrumb, InProgressJobDescrp, JobDetail} from './sub-component'

const InProgressJobDetailMain = () => {
  return (
    <>
      <main>
        <Breadcrumb />
        <section className="jobdtl-section">
          <div className="container">
           <JobDetail/>
           <InProgressJobDescrp />
          </div>
        </section>
      </main>
    </>
  )
}

export default InProgressJobDetailMain