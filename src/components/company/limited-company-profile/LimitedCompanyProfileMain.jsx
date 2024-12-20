import React from 'react'
import { Breadcrumb, LimitedCompanyProfileForm } from './sub-component'
import Setting from '../../settings/Setting'

const LimitedCompanyProfileMain = () => {
  return (
    <>
     <main>
    <Breadcrumb />
      <section className="workhistory-section">
          <div className='container'>
          <div className="home-flex-main">
          <div className="home-flex-30">
          <Setting />
          </div>
          <div className="home-flex-70">
              <LimitedCompanyProfileForm />
              </div>
        </div>
          </div>
      </section>
     </main>
    </>
  )
}

export default LimitedCompanyProfileMain