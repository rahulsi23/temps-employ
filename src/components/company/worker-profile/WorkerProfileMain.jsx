import React from 'react'
import { Breadcrumb, WorkerDetailDescrp} from './sub-component'

const WorkerProfileMain = () => {
  return (
    <>
      <main>
        <Breadcrumb />
        <section className="jobdtl-section">
          <div className="container">
           <WorkerDetailDescrp />
          </div>
        </section>
      </main>
    </>
  )
}

export default WorkerProfileMain