import React from 'react'
import { Breadcrumb, SoleTraderProfileForm } from './sub-component'
import Setting from '../../settings/Setting'

const SoleTraderProfileMain = () => {
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
              <SoleTraderProfileForm />
              </div>
        </div>
          </div>
      </section>
     </main>
  </>
  )
}

export default SoleTraderProfileMain